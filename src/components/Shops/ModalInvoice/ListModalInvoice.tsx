import React, { ReactElement } from "react";

import { Box, Text, Table, Tbody, Tr, Td } from "@chakra-ui/react";

import { IModalInvoiceProps } from "./IModalInvoiceProps";
import { columns } from "../../../constants/shopsConstants";
import { IRowProps } from "./IRowProps";
/**
 * ListModal component of ModalInvoice
 * @param {IModalInvoiceProps} props Shops Menu props
 * @returns {ReactElement} The menu container
 */
export const List = (props: IModalInvoiceProps): ReactElement => {
  const { orderItems } = props;

  return (
    <Box width={["100%", "90%"]} ml="auto" mr="auto">
      <Text textAlign={["center", "start"]} fontSize={["12px", "15px"]} bg="#fff" p="4">
        Este es el acumulado de productos solicitados por tus clientes.
      </Text>
      <div>
        <Table variant="striped" colorScheme="gray">
          <thead>
            <Tr>
              {columns.map((head) => (
                <th
                  key={head.id}
                  style={{ fontSize: "13px", textAlign: "center", color: "#767676" }}
                >
                  {head.header}
                </th>
              ))}
            </Tr>
          </thead>
          <Tbody>
            {orderItems.map((row: IRowProps) => (
              <Tr key={row.id}>
                <Td color="#767676" fontSize={["13px", "15px"]} textAlign="center">
                  {row.Quantity}
                </Td>
                <Td pl="0" pr="0" color="#767676" fontSize={["13px", "15px"]} textAlign="start">
                  {row.name}
                </Td>
                <Td color="#767676" fontSize={["13px", "15px"]} textAlign="center">
                  ${row.UnitPriceInclTax}
                </Td>
                <Td color="#767676" fontSize={["13px", "15px"]} textAlign="center">
                  ${row.PriceInclTax}
                </Td>
                <Td>
                  <input type="checkbox"></input>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>
    </Box>
  );
};
