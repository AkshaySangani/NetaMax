import React, { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { IItem } from "dataflows/Shops/IItem";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";

import { Box, Container, Divider, Flex, Grid, GridItem, Text } from "@chakra-ui/layout";
import { useMediaQuery, Table, Tbody, Td, Tr } from "@chakra-ui/react";

import { IOrderTableProps } from "./IOrderTableProps";

/**
 * The order table component.
 * @param {IOrderTableProps} props the order table props.
 * @returns { ReactElement } The table component
 *
 */
export const OrderTable = (props: IOrderTableProps): ReactElement => {
  const { subtotal, total, discount, objects } = props;
  const [isLargerThanSm] = useMediaQuery(`(min-width: ${screenSizes.sm}px)`);

  /**
   * Renders the Order Table mobile component.
   * @returns {React.ReactElement} The NavBar mobile component
   */
  const renderMobileOrderTable = (): React.ReactElement => {
    return (
      <Box>
        {objects.map((object: IItem) => (
          <Box key={`${object.image}-${object.name}-${object.price}`} mb="4">
            <Divider mb="4" borderColor="#9F9F9F" />
            <Flex ml="4">
              <Box display="flex">
                <Text fontWeight="700" fontSize="19px">
                  {object.name}
                </Text>
              </Box>
            </Flex>
            <Grid ml="16" mt="2" h="40px" templateColumns="repeat(4, 1fr)">
              <GridItem colSpan={2}>
                <Text fontWeight="700" fontSize="17px">
                  Cantidad:
                </Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text fontWeight="700" fontSize="17px">
                  Precio:
                </Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text>{object.qty}</Text>
              </GridItem>
              <GridItem colSpan={2}>
                <Text>{formatMoney(object.price, CURRENCY_NAME)}</Text>
              </GridItem>
            </Grid>
          </Box>
        ))}
        <Box align="right" mr="8" mt="4">
          <Text fontWeight="700" fontSize="18px" color="#777">
            Subtotal: {formatMoney(subtotal, CURRENCY_NAME)}
          </Text>
          <Text fontWeight="700" fontSize="18px" color="#777">
            Descuento: {formatMoney(discount, CURRENCY_NAME)}
          </Text>
          <Text fontWeight="700" fontSize="30px" color="#3870FF">
            Total: {formatMoney(total, CURRENCY_NAME)}
          </Text>
        </Box>
      </Box>
    );
  };

  /**
   * Renders the Order Table mobile component.
   * @returns {React.ReactElement} The NavBar mobile component
   */
  const renderDesktopOrderTable = (): React.ReactElement => {
    return (
      <Container
        centerContent={false}
        maxW="976px"
        boxShadow="md"
        rounded="md"
        bg="white"
        display={["none", "block", "block", "block"]}
      >
        <Box maxHeight="320px" overflow="auto">
          <Table variant="simple">
            <Tbody>
              {objects.map((object: IItem) => (
                <Tr key={`${object.image}-${object.name}-${object.price}`}>
                  <Td>
                    <Text fontWeight="700">{object.name}</Text>
                  </Td>
                  <Td>
                    <Text fontWeight="700">Cantidad </Text>
                    {object.qty}
                  </Td>
                  <Td>
                    <Text fontWeight="700">Precio </Text>
                    {formatMoney(object.price, CURRENCY_NAME)}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
        <Box align="right" mr="8" mt="4" pb="4">
          <Text fontWeight="700" fontSize="18px" color="#777">
            Subtotal: {formatMoney(subtotal, CURRENCY_NAME)}
          </Text>
          <Text fontWeight="700" fontSize="18px" color="#777">
            Descuento: {formatMoney(discount, CURRENCY_NAME)}
          </Text>
          <Text fontWeight="700" fontSize="30px" color="#3870FF">
            Total: {formatMoney(total, CURRENCY_NAME)}
          </Text>
        </Box>
      </Container>
    );
  };

  return isLargerThanSm ? renderDesktopOrderTable() : renderMobileOrderTable();
};
