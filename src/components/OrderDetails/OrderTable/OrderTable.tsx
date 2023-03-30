import React, { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { IOrderItem } from "dataflows/OrderDetails/IOrderItem";
import { formatMoney } from "utils/currencyUtils";

import { Image } from "@chakra-ui/image";
import { Box, Container, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Table, Tbody, Td, Tr } from "@chakra-ui/react";

import { IOrderTableProps } from "./IOrderTable";

/**
 * The order table component.
 * @param {IOrderTableProps} props the order table props.
 * @returns { ReactElement } The table component
 *
 */
export const OrderTable = (props: IOrderTableProps): ReactElement => {
  const { items, order_subtotal_excl_tax, order_discount, order_total } = props;

  return (
    <div>
      <Container
        centerContent={false}
        maxW="976px"
        boxShadow="md"
        rounded="md"
        bg="white"
        display={["none", "block", "block", "block"]}
        mt="2"
      >
        <Box maxHeight="480px" overflow="auto">
          <Table variant="simple">
            <Tbody>
              {items.map((item: IOrderItem) => (
                <Tr key={item.product_id}>
                  <Td>
                    <Box display="flex">
                      {item.image && (
                        <Image borderRadius="lg" width="40px" src={item.image} mr="4" />
                      )}
                      <Text fontWeight="700">{item.name}</Text>
                    </Box>
                  </Td>
                  <Td>
                    <Text fontWeight="700">Cantidad </Text>
                    {item.quantity}
                  </Td>
                  <Td>
                    <Text fontWeight="700">Precio unitario </Text>
                    {formatMoney(item.unit_price_incl_tax, CURRENCY_NAME)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box align="right" mr="8" mt="4" pb="4">
          <Text fontWeight="500" fontSize="20px" color="#3870FF">
            {"Subtotal: " + formatMoney(order_subtotal_excl_tax, CURRENCY_NAME)}
          </Text>
          <Text fontWeight="700" fontSize="20px" color="#F54A49">
            {"Descuento: " + formatMoney(order_discount, CURRENCY_NAME)}
          </Text>
          <Text fontWeight="700" fontSize="27px" color="#3870FF">
            {"Total: " + formatMoney(order_total, CURRENCY_NAME)}
          </Text>
        </Box>
      </Container>
      <Box display={["block", "none", "none", "none"]}>
        <Box maxHeight="500px" overflow="auto">
          {items.map((item: IOrderItem) => (
            <Box key={item.product_id} mb="4">
              <Divider mb="4" borderColor="#9F9F9F" />
              <Flex ml="4">
                <Box display="flex">
                  {item.image && <Image borderRadius="lg" width="40px" src={item.image} mr="4" />}
                  <Text fontWeight="700" fontSize="16px">
                    {item.name}
                  </Text>
                </Box>
              </Flex>
              <Grid ml="16" mt="2" h="40px" templateColumns="repeat(4, 1fr)">
                <GridItem colSpan={2}>
                  <Text fontWeight="700" fontSize="15px">
                    Cantidad
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontWeight="700" fontSize="15px">
                    Precio
                  </Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontSize="15px">{item.quantity}</Text>
                </GridItem>
                <GridItem colSpan={2}>
                  <Text fontSize="15px">
                    {formatMoney(item.unit_price_incl_tax, CURRENCY_NAME)}
                  </Text>
                </GridItem>
              </Grid>
            </Box>
          ))}
        </Box>
        <Box align="right" mr="8" mt="4">
          <Text fontWeight="500" fontSize="18px" color="#3870FF">
            {"Subtotal: " + formatMoney(order_subtotal_excl_tax, CURRENCY_NAME)}
          </Text>
          <Text fontWeight="700" fontSize="18px" color="#F54A49">
            {"Descuento: " + formatMoney(order_discount, CURRENCY_NAME)}
          </Text>
          <Text fontWeight="700" fontSize="28px" color="#3870FF">
            {"Total: " + formatMoney(order_total, CURRENCY_NAME)}
          </Text>
        </Box>
      </Box>
    </div>
  );
};
