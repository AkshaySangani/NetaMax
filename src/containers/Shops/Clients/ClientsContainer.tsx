import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { Loader } from "components/common/Loader";
import { ClientDetail } from "components/Shops/ClientDetail/ClientDetail";
import {
  SA_CLIENTS_PAGE_VIEWED,
  SA_SHARE_STORELINK_BANNER_CLICKED,
  TrackerApp,
} from "constants/amplitudeConstants";
import { selectClients, selectIsLoadingClients } from "dataflows/Shops/Clients/ClientsSelectors";
import { getClients } from "dataflows/Shops/Clients/ClientsThunks";
import { IClient } from "dataflows/Shops/IClient";
import { selectShopUser } from "dataflows/Shops/Login/LoginSelectors";
import { trackEvent } from "utils/tracker";

import { Container, Text } from "@chakra-ui/layout";
import { Box, Center } from "@chakra-ui/react";

/**
 * The User's Clients Container
 * @returns {ReactElement} The User's Clients Container
 */
export const ClientsContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const shopUser = useSelector(selectShopUser);
  const currentShop = shopUser && shopUser[0];
  const isLoadingClients = useSelector(selectIsLoadingClients);
  const clients = useSelector(selectClients);

  useEffect(() => {
    dispatch(getClients({ storeId: currentShop?.Id }));
    trackEvent(SA_CLIENTS_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storeId: currentShop?.Id,
      storeName: currentShop?.Name,
    });
  }, []);

  /**
   * Callback to handle the click on the share link button
   * @returns {void}
   */
  const onShareButtonClick = (): void => {
    trackEvent(SA_SHARE_STORELINK_BANNER_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storeId: currentShop?.Id,
      storeName: currentShop?.Name,
    });
  };

  return isLoadingClients ? (
    <Center h="100%" w="100%" position="fixed">
      <Loader />
    </Center>
  ) : (
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
      <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
        Mis clientes
      </Text>
      <Text
        fontSize={{ base: "17px", md: "18px", lg: "20px" }}
        fontWeight="400"
        style={{ marginBottom: 20 }}
      >
        Esta es la lista total de los clientes que han pedido a tu tienda por Neta
        <b> ¡Comparte la liga y sigue ganando!</b>
      </Text>
      <Box maxHeight="480px" overflow="auto">
        {clients &&
          clients.length > 0 &&
          clients.map((client: IClient) => (
            <ClientDetail
              {...client}
              key={client.id}
              storeName={currentShop?.Hosts}
              onShareButtonClick={onShareButtonClick}
            />
          ))}
      </Box>
      <Box textAlign={["center", "right"]} style={{ marginTop: 20 }}></Box>
    </Container>
  );
};
