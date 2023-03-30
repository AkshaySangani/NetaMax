import React, { ReactElement } from "react";

import Link from "next/link";
import IconShare from "styled/icons/Shops/Order/Share";

import { Box, Button, Flex, FlexProps, Spacer, Text } from "@chakra-ui/react";

import { IClientDetailProps } from "./IClientDetailProps";

/**
 * The ClientDetail component.
 * @returns {ReactElement} the Client's details component.
 * @param {IClientDetailProps} props ClientDetail props
 */
export const ClientDetail = (props: IClientDetailProps): ReactElement => {
  const { userName, numberOfOrders, daysAgoLastOrder, phone, storeName, onShareButtonClick } =
    props;
  const clientUrl = `https://api.whatsapp.com/send?phone=52${phone}&text=¡Hola!%20%C2%BFYa%20viste%20las%20promos%20de%20hoy%20en%20neta%3F%20Ingresa%20a%20mi%20liga:%20https://neta.mx/?${storeName}`;

  /**
   * Gets user status in Text based on last order
   * @param {number} daysSinceLastOrder days since last order.
   * @returns {string | FlexProps} Text ChakraUI component.
   */
  const getStatus = (daysSinceLastOrder: number): string | FlexProps => {
    if (daysSinceLastOrder >= 0 && daysSinceLastOrder <= 3) {
      return (
        <Flex>
          <Text mr="2">🥳</Text>
          <Text
            fontSize={{ base: "14px", md: "14px", lg: "14px" }}
            color="#3BAE5F"
            fontWeight="700"
          >
            ¡Este cliente es la Neta!
          </Text>
        </Flex>
      );
    } else if (daysSinceLastOrder <= 6) {
      return (
        <Flex direction={["row", "row"]}>
          <Box p={["2", "0"]} mr={["0", "2"]}>
            😐
          </Box>
          <Box>
            <Text
              fontSize={{ base: "14px", md: "14px", lg: "14px" }}
              color="#ff5c00"
              fontWeight="700"
            >
              ¡Comparte la liga para que siga pidiendo!
            </Text>
          </Box>
        </Flex>
      );
    }
    return (
      <Flex direction={["row", "row"]}>
        <Box p={["2", "0"]} mr={["0", "2"]}>
          😭
        </Box>
        <Box>
          <Text
            fontSize={{ base: "14px", md: "14px", lg: "14px" }}
            color="#FF0300"
            fontWeight="700"
          >
            ¡Lo extrañamos, compartele la liga ya!
          </Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Box boxShadow="xs" p="4" rounded="md" bg="white">
      <Flex direction={["column", "column", "row", "row"]}>
        <Box>
          <Text fontSize={{ base: "18px", md: "14px", lg: "14px" }}>
            Nombre: <b>{userName}</b>
          </Text>
          <Flex direction={["column", "row", "row"]} mt="1">
            <Box w="100px">
              <Text fontSize={{ base: "14px", md: "14px", lg: "14px" }}>
                Pedidos: <b>{numberOfOrders}</b>
              </Text>
            </Box>
            <Box mr={["0", "4", "13"]} ml={["0", "4", "14"]} w="200px">
              <Text fontSize={{ base: "14px", md: "14px", lg: "14px" }}>
                Último pedido:
                <b>
                  {` Hace ${daysAgoLastOrder} día`}
                  {daysAgoLastOrder > 1 && "s"}
                </b>
              </Text>
            </Box>
            <Box mt={["2", "0"]} mb={["3", "0"]} w={["180px", "220px", "180px", "auto"]}>
              {getStatus(daysAgoLastOrder)}
            </Box>
          </Flex>
        </Box>
        <Spacer />
        <Box>
          <Link href={clientUrl} passHref>
            <a href="inherit" target="_blank">
              <Button
                color="#3870FF"
                border="1px solid #3870FF"
                _focus={{ border: "1px solid #3870FF" }}
                background="white"
                borderRadius="xl"
                onClick={() => {
                  onShareButtonClick && onShareButtonClick();
                }}
              >
                <IconShare />
                <Text ml="2">Compartir liga</Text>
              </Button>
            </a>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
