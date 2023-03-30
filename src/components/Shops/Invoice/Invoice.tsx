import React, { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { WHATSAPP_HELP } from "constants/shopsConstants";
import router from "next/router";
import IconDetail from "styled/icons/Shops/Order/Detail";
import IconHelp from "styled/icons/Shops/Order/Help";
import IconInvoice from "styled/icons/Shops/Order/Invoice";
import IconTruck from "styled/icons/Shops/Order/Truck";
import { formatMoney } from "utils/currencyUtils";
import { convertDateToLocaleString } from "utils/dateUtils";

import { Box, Link, Text } from "@chakra-ui/layout";
import { Button, Flex, Spacer } from "@chakra-ui/react";

import { IInvoiceProps } from "./IInvoiceProps";

/**
 * The Invoice component.
 * @returns {ReactElement} the Invoice component.
 * @param {IInvoiceProps} invoiceProps ProfitBanner props
 */
export const Invoice = (invoiceProps: IInvoiceProps): ReactElement => {
  const {
    invoiceDate,
    id,
    pdfUrl,
    subTotal,
    storeCommisssion,
    trackingUrl,
    onInvoiceClick,
    onViewOrdersClick,
  } = invoiceProps;

  return (
    <Box boxShadow="base" p="2" rounded="md" bg="white">
      <Flex direction={["column", "row", "row"]}>
        <Box
          mb={["2", "0"]}
          ml={["2", "0"]}
          mr={["0", "4"]}
          mt={["0", "2"]}
          w={["auto", "auto", "160px"]}
        >
          <Text fontSize={{ base: "18px", md: "17px", lg: "16px" }}>
            <b>Fecha de entrega: </b>
            {convertDateToLocaleString(invoiceDate)}
          </Text>
        </Box>
        <Box p="2" mr="4" w={["auto", "auto", "110px"]}>
          <Text fontSize={{ base: "18px", md: "17px", lg: "16px" }}>
            <b>Valor: </b>
            {formatMoney(subTotal, CURRENCY_NAME)}
          </Text>
        </Box>
        <Box p="2" mr="4" w={["auto", "auto", "120px"]}>
          <Text fontSize={{ base: "18px", md: "17px", lg: "16px" }}>
            <b>Tu Ganancia: </b>
            <b style={{ color: "#3870FF" }}>{formatMoney(storeCommisssion, CURRENCY_NAME)}</b>
          </Text>
        </Box>
        {/* TODO: Uncomment this code when deliveryStatus is working.
        <Box p="2" mr="4" w={["auto", "auto", "120px"]}>
          <Text fontSize={{ base: "18px", md: "17px", lg: "16px" }}>
            <b>Estado: </b>
            {deliveryStatus ? deliveryStatus : <b style={{ color: "#3BAE5F" }}>Entregado</b>}
          </Text>
        </Box> */}
        <Spacer />
        <Box pl="2">
          <Link data-testid="Factura link" href={pdfUrl} target="_blank">
            <Button
              color="#3870FF"
              border="1px solid #3870FF"
              _focus={{ border: "1px solid #3870FF" }}
              background="white"
              mr={["1", "2"]}
              mt={["2", "0"]}
              borderRadius="16px"
              h={["40px", "50px"]}
              data-testid="Factura button"
              onClick={() => {
                onInvoiceClick && onInvoiceClick();
              }}
            >
              <IconInvoice /> <Text ml="1">Factura</Text>
            </Button>
          </Link>
          <Button
            color="#3870FF"
            border="1px solid #3870FF"
            _focus={{ border: "1px solid #3870FF" }}
            background="white"
            mr={["1", "2"]}
            mt={["2", "0"]}
            borderRadius="16px"
            h={["40px", "50px"]}
            data-testid="Ver órdenes"
            onClick={() => {
              onViewOrdersClick && onViewOrdersClick();
              router.push(`/invoices/${id}/details`);
            }}
          >
            <IconDetail /> <Text ml="1">Ver órdenes</Text>
          </Button>
          <Link data-testid="Ayuda link" href={WHATSAPP_HELP} target="_blank">
            <Button
              color="#3870FF"
              border="1px solid #3870FF"
              _focus={{ border: "1px solid #3870FF" }}
              background="white"
              mr={["1", "2"]}
              p="3"
              mt={["2", "0"]}
              mb={["2", "0"]}
              borderRadius="16px"
              h={["40px", "50px"]}
            >
              <IconHelp /> <Text ml="1">Ayuda</Text>
            </Button>
          </Link>
          <Link
            href={trackingUrl === "" ? undefined : `${trackingUrl}`}
            target="_blank"
            data-testid="Rastrear link"
            _hover={{
              textDecoration: "none",
              cursor: trackingUrl === "" ? "default" : "pointer",
            }}
          >
            <Button
              color="#3870FF"
              border="1px solid #3870FF"
              _focus={{ border: "1px solid #3870FF" }}
              background="white"
              mr={["1", "2"]}
              p="3"
              mt={["2", "0"]}
              mb={["2", "0"]}
              borderRadius="16px"
              h={["40px", "50px"]}
              data-testid="Rastrear"
              disabled={trackingUrl === ""}
            >
              <IconTruck /> <Text ml="1">Rastrear</Text>
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};
