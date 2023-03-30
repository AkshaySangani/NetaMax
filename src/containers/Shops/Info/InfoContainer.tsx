import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { MyInfoForm } from "components/Shops/Info/MyInfoForm";
import { ProfitBanner } from "components/Shops/ProfitBanner/ProfitBanner";
import { SA_INFO_PAGE_VIEWED, TrackerApp } from "constants/amplitudeConstants";
import { SHARE_URL, WHATSAPP_HELP } from "constants/shopsConstants";
import { selectShopUser } from "dataflows/Shops/Login/LoginSelectors";
import {
  selectCurrentProfit,
  selectIsLoadingCurrentProfit,
} from "dataflows/Shops/ShopInfo/ShopInfoSelectors";
import { getCurrentProfit } from "dataflows/Shops/ShopInfo/ShopsInfoThunks";
import { splitHost } from "utils/stringUtils";
import { trackEvent } from "utils/tracker";

import { Container } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/react";

/**
 * The Shop's Info Container.
 * @returns {ReactElement} The Shop's Info Container
 */
export const InfoContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const currentProfit = useSelector(selectCurrentProfit);
  const isLoadingCurrentProfit = useSelector(selectIsLoadingCurrentProfit);

  const shopUser = useSelector(selectShopUser);
  const currentShop = shopUser && shopUser[0];
  const url = `${SHARE_URL}${splitHost(currentShop?.Hosts || "")}`;

  useEffect(() => {
    if (!currentProfit) dispatch(getCurrentProfit({ storeId: currentShop?.Id }));
    trackEvent(SA_INFO_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storeId: currentShop?.Id,
      storeName: currentShop?.Name,
      storePhone: currentShop?.CompanyPhoneNumber,
      storeEarnings: currentProfit,
    });
  }, []);

  return (
    <Container
      centerContent={false}
      maxW="container.md"
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
      marginTop={3}
    >
      <BackToHome homeRoute={"/invoices"} title="Inicio" color="#3870FF" />
      {!isLoadingCurrentProfit && currentProfit && (
        <ProfitBanner todaysProfit={currentProfit} url={url} />
      )}
      <Text fontSize={{ base: "16px", md: "17px", lg: "17px" }} fontWeight="400">
        Si necesitas realizar algún cambio en los datos de la tienda{" "}
        <a href={WHATSAPP_HELP} target="_blank" rel="noreferrer">
          <b>
            <u>contáctanos aquí.</u>
          </b>
        </a>
      </Text>
      {currentShop && <MyInfoForm {...currentShop} />}
    </Container>
  );
};
