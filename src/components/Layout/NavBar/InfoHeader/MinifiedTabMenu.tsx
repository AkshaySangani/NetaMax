import React, { ReactElement } from "react";

import { MI_CUENTA_ROUTE } from "constants/checkoutConstants";
import router from "next/router";
import BagIcon from "styled/icons/BagIcon";
import IconCoin from "styled/icons/Coin";
import StoreIcon from "styled/icons/StoreIcon";

import { Box } from "@chakra-ui/react";

import { CustomTab, MinifiedTabMenuContainer } from "../TabMenu/TabMenu.styled";

/**
 * The InfoHeader Component
 * @param {IInfoHeaderProps} props the InfoHeader props.
 * @returns {ReactElement} the InfoHeader component.
 */
export const MinifiedTabMenu = (): ReactElement => {
  return (
    <MinifiedTabMenuContainer pt="14px">
      <Box
        background="#FFFFFF"
        borderBottom="none"
        w="100%"
        h="64px"
        display="flex"
        justifyContent="space-between"
        padding="7px"
      >
        <CustomTab
          onClick={() => router.push("/")}
          data-testid="Tiendita tab"
          activeTab={router.pathname === "/"}
          as="button"
        >
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <StoreIcon
              width="22px"
              height="19px"
              fill={router.pathname === "/" ? "#3870FF" : "#5F5F5F"}
            />
            <Box marginTop="5px" marginLeft="4px">
              Tiendita
            </Box>
          </Box>
        </CustomTab>

        <CustomTab
          onClick={() => router.push(MI_CUENTA_ROUTE)}
          activeTab={router.pathname === MI_CUENTA_ROUTE}
          data-testid="Mi cuenta tab"
          as="button"
        >
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <BagIcon
              width="18px"
              height="22px"
              fill={router.pathname === MI_CUENTA_ROUTE ? "#3870FF" : "#5F5F5F"}
            />
            <Box marginTop="5px" marginLeft="4px">
              Mi cuenta
            </Box>
          </Box>
        </CustomTab>

        <CustomTab
          onClick={() => router.push("/gana-dinero")}
          isWinMoneyTab={router.pathname === "/gana-dinero"}
          as="button"
          data-testid="Gana dinero tab"
        >
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <IconCoin width="26px" height="26px" />
            <Box
              marginTop="3px"
              marginLeft="4px"
              color={router.pathname === "/gana-dinero" ? "#ED9F00" : "#5F5F5F"}
            >
              Gana dinero
            </Box>
          </Box>
        </CustomTab>
      </Box>
    </MinifiedTabMenuContainer>
  );
};
