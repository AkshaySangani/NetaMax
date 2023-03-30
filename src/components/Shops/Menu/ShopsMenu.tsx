import React, { ReactElement } from "react";

import { SHOP_URLS } from "constants/shopsConstants";
import { useRouter } from "next/router";
import IconClients from "styled/icons/Shops/Menu/Clients";
import IconHome from "styled/icons/Shops/Menu/Home";
import IconOrders from "styled/icons/Shops/Menu/Orders";
import IconUser from "styled/icons/User";

import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

/**
 * The shops menu popover container.
 * @param {IShopsMenuProps} shopsMenuProps Shops Menu props
 * @returns {ReactElement} The menu container
 */
export const ShopsMenu = (): ReactElement => {
  const router = useRouter();

  /**
   * Action on item click.
   * @param {string} item the item clicked.
   * @returns {void}
   */
  const redirectTo = (item: string): void => {
    router.push(item);
  };
  const NavMenu = SHOP_URLS.map((item, i) => {
    const { pathName, name, order } = item;
    const icon = renderIcon();

    /**
     * Take order number to render menu items.
     * @returns {ReactElement} The Menu icon to show.
     */
    function renderIcon() {
      switch (order) {
        case 1:
          return <IconHome isActive={router.pathname === pathName} />;
        case 2:
          return <IconOrders isActive={router.pathname === pathName} />;
        case 3:
          return <IconClients isActive={router.pathname === pathName} />;
        case 4:
          return <IconUser isActive={router.pathname === pathName} />;
        default:
          return <></>;
      }
    }

    return (
      <GridItem
        w="100%"
        h="14"
        display="flex"
        alignItems={{ base: "center", lg: "start" }}
        justifyContent={{ base: "center", lg: "start" }}
        key={i}
      >
        <Box
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ base: "center", lg: "start" }}
          justifyContent={{ base: "center", lg: "start" }}
          onClick={() => redirectTo(pathName)}
          data-testid={name}
          _hover={{
            cursor: "pointer",
          }}
        >
          <Box height={"28px"} width="28px">
            {icon}
          </Box>
          <Text
            fontSize={{ base: "12px", md: "14px", lg: "14px" }}
            fontWeight="600"
            color="#353535"
            opacity={router.pathname !== pathName ? "0.4" : "1.0"}
          >
            {name}
          </Text>
        </Box>
      </GridItem>
    );
  });

  return (
    <Box
      position="fixed"
      bottom={{ base: "0", lg: "58%" }}
      left={{ base: "0", lg: "2%" }}
      width={["100%", "100%", "100%", "10%"]}
      height="55px"
      bg={["white", "white", "white", "unset"]}
    >
      <Grid
        templateColumns={{ base: "repeat(4, 1fr)", lg: "auto" }}
        gap={0.5}
        flexDirection={{ base: "row", lg: "column" }}
      >
        {NavMenu}
      </Grid>
    </Box>
  );
};
