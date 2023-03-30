import { ReactElement } from "react";

import { MI_CUENTA_ROUTE } from "constants/checkoutConstants";
import { useRouter } from "next/router";
import IconCoin from "styled/icons/Coin";
import GroupBuyingIcon from "styled/icons/GroupBuyingIcon";
import GroupBuyingIconFilled from "styled/icons/GroupBuyingIconFilled";
import UserIcon from "styled/icons/MiCuenta/User";
import StoreIcon from "styled/icons/StoreIcon";
import StoreIconFilled from "styled/icons/StoreIconFilled";

import { Box } from "@chakra-ui/react";

import { ITabMenuProps } from "./ITabMenuProps";
import { CustomTab, TabMenuContainer } from "./TabMenu.styled";

/**
 * The TabMenu component
 * @param {ITabMenuProps} props The component props
 * @returns {ReactElement} Tab Menu
 */
export const TabMenu = ({ isNavBarCollapsed, netaWalletBalance }: ITabMenuProps): ReactElement => {
  const router = useRouter();
  return (
    <TabMenuContainer $isNavBarCollapsed={isNavBarCollapsed} pt="14px">
      <Box
        className="tab-container"
        background="#FFFFFF"
        borderBottom="none"
        w="100%"
        h={isNavBarCollapsed ? "64px" : "83px"}
        display="flex"
        justifyContent="space-between"
        padding="5px"
        borderRadius={isNavBarCollapsed ? "0px" : "9px"}
      >
        <CustomTab
          onClick={() => router.push("/")}
          activeTab={router.pathname === "/"}
          isTiendita={router.pathname === "/"}
          as="button"
          data-testid="Tiendita tab"
        >
          <Box
            className="tab-items-container"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {router.pathname === "/" ? (
              <StoreIconFilled width="22px" height="19px" />
            ) : (
              <StoreIcon width="22px" height="19px" />
            )}
            <Box marginLeft="4px">Tiendita</Box>
          </Box>
        </CustomTab>

        <CustomTab
          onClick={() => router.push("/en-grupo")}
          activeTab={router.pathname === "/en-grupo"}
          isEnGrupo={router.pathname === "/en-grupo"}
          as="button"
          data-testid="En grupo tab"
        >
          <Box
            className="tab-items-container"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {router?.pathname === "/en-grupo" ? (
              <GroupBuyingIconFilled width="18px" height="22px" />
            ) : (
              <GroupBuyingIcon width="18px" height="22px" />
            )}
            <Box marginTop="5px" marginLeft="4px">
              En Grupo
            </Box>
          </Box>
        </CustomTab>

        <CustomTab
          onClick={() => router.push(MI_CUENTA_ROUTE)}
          activeTab={router.pathname === MI_CUENTA_ROUTE}
          isMiCuenta={router.pathname === MI_CUENTA_ROUTE}
          as="button"
          data-testid="Mi cuenta tab"
        >
          <Box
            className="tab-items-container"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            {router.pathname === MI_CUENTA_ROUTE ? (
              <UserIcon width="22px" height="22px" fill="#00A81B" />
            ) : (
              <UserIcon width="22px" height="22px" />
            )}
            <Box marginLeft="4px">Mi cuenta</Box>
          </Box>
        </CustomTab>

        <CustomTab
          onClick={() => router.push("/gana-dinero")}
          activeTab={router.pathname}
          isGanaDinero={router.pathname === "/gana-dinero"}
          as="button"
          data-testid="Gana dinero tab"
        >
          <Box
            className="tab-items-container"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <IconCoin width="26px" height="26px" />
            <Box marginLeft="4px">
              Gana dinero
              {netaWalletBalance && parseFloat(netaWalletBalance) > 0 ? (
                <Box
                  marginTop="-4px"
                  data-testid="netaWalletBalance"
                  fontSize="10px"
                >{`Tu dinero: $${parseFloat(netaWalletBalance).toFixed(2)}`}</Box>
              ) : (
                ""
              )}
            </Box>
          </Box>
        </CustomTab>
      </Box>
    </TabMenuContainer>
  );
};
