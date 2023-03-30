import React, { ReactElement } from "react";

import { screenSizes } from "styled/screen";

import { useMediaQuery, Box, Center, Divider, Flex, Text } from "@chakra-ui/react";

import { IModalInvoiceProps } from "./IModalInvoiceProps";
/**
 * MisCuentas component of ModalInvoice
 * @param {IModalInvoiceProps} props Shops Menu props
 * @returns {ReactElement} The menu container
 */
export const MisCuentas = (props: IModalInvoiceProps): ReactElement => {
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  const { invoice } = props;
  const { invoiceDate, id, storeName, storeOwner } = invoice;

  return (
    <Box pt={{ base: "5%", md: "4%", lg: "3%" }} bg="#F5F5F5" borderTopRadius="inherit">
      <Text
        fontSize={{ base: "21px", md: "25px", lg: "25px" }}
        fontWeight="700"
        textAlign="left"
        pl="5%"
        pb={{ base: "2%", md: "3%", lg: "1%" }}
        color="#051549"
      >
        Mis cuentas
      </Text>
      <Divider orientation="horizontal" />
      <Flex
        color="#4A4A4A"
        w="100%"
        align="center"
        justifyContent={["flex-start", "flex-start", "flex-start", "center"]}
        py={{ base: "5%", md: "4%", lg: "3%" }}
      >
        {!isDesktop ? (
          <Flex direction="column" justifyContent="left" pl="6%" gap="3">
            <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} fontWeight={400}>
              Número de factura&nbsp;&nbsp;&nbsp;
              <span style={{ fontWeight: "600" }}>&#124;&nbsp;&nbsp; {id}</span>
            </Text>
            <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} fontWeight={400}>
              Fecha de factura&nbsp;&nbsp;&nbsp;
              <span style={{ fontWeight: "600" }}>&#124;&nbsp;&nbsp; {invoiceDate}</span>
            </Text>
            <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} fontWeight={400}>
              Tienda&nbsp;&nbsp;&nbsp;
              <span style={{ fontWeight: "600" }}>&#124;&nbsp;&nbsp; {storeName}</span>
            </Text>
            <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} fontWeight={400}>
              Propietario&nbsp;&nbsp;&nbsp;
              <span style={{ fontWeight: "600" }}>&#124;&nbsp;&nbsp; {storeOwner}</span>
            </Text>
          </Flex>
        ) : (
          <Flex direction="row" justifyContent="center" gap="7rem" fontSize="15px" fontWeight="400">
            <Flex gap="2rem">
              <Flex direction="column" justifyContent="center" gap="1rem">
                <Text>Número de factura</Text>
                <Text>Fecha de factura</Text>
              </Flex>
              <Center height="90%" alignItems="baseline">
                <Divider orientation="vertical" borderWidth="2px" color="#E1E1E1" />
              </Center>
              <Flex direction="column" justifyContent="center" fontWeight="600" gap="1rem">
                <Text>{id}</Text>
                <Text>{invoiceDate}</Text>
              </Flex>
            </Flex>

            <Flex gap="2rem">
              <Flex direction="column" justifyContent="center" gap="1rem">
                <Text>Tienda</Text>
                <Text>Propietario</Text>
              </Flex>
              <Center height="90%" alignItems="baseline">
                <Divider orientation="vertical" borderWidth="2px" color="#E1E1E1" />
              </Center>
              <Flex direction="column" justifyContent="center" fontWeight="600" gap="1rem">
                <Text>{storeName}</Text>
                <Text>{storeOwner}</Text>
              </Flex>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};
