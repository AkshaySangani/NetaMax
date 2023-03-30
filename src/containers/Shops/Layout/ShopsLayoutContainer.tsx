import React, { FC, ReactElement, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { INavBarShopsProps } from "components/Shops/ShopLayout/NavBarShops/INavBarShopsProps";
import { NavBarShops } from "components/Shops/ShopLayout/NavBarShops/NavBarShops";
import { SA_LOGOUT_CLICKED, TrackerApp } from "constants/amplitudeConstants";
import { selectShopUser } from "dataflows/Shops/Login/LoginSelectors";
import { LogOut } from "dataflows/Shops/Login/LoginSlice";
import { useRouter } from "next/router";
import { ShopsMenu } from "components/Shops/Menu/ShopsMenu";
import { trackEvent } from "utils/tracker";

import { Box } from "@chakra-ui/react";
import { initAmplitude } from "utils/amplitude";
import { loadSegmentAnalytics } from "utils/segment";
import { loadSegmentNodeAnalytics } from "utils/segmentNode";
import { initClevertap } from "utils/clevertap";

/**
 * The Layout for Shops container component
 * @param {ReactNode} params children
 * @returns {ReactElement} The layout shops container.
 */
export const LayoutShopsContainer: FC = ({ children }): ReactElement => {
  const shopUser = useSelector(selectShopUser);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentShop = shopUser && shopUser[0];

  /**
   * Handle shops user logout
   * @returns {void}
   */
  const handlesLogOut = () => {
    trackEvent(SA_LOGOUT_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storeID: currentShop?.Id,
      storeName: currentShop?.Name,
    });
    router.push("/").then(() => dispatch(LogOut()));
  };

  useEffect(() => {
    initAmplitude();
    loadSegmentAnalytics();
    loadSegmentNodeAnalytics();
    initClevertap();
  }, []);

  const navBarShopsProps: INavBarShopsProps = {
    shopUser,
    logout: handlesLogOut,
  };

  return (
    <Box pb="70px">
      <NavBarShops {...navBarShopsProps} />
      <main>{children}</main>
      <ShopsMenu />
    </Box>
  );
};
