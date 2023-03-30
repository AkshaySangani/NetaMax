import React, { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import IconCurrency from "styled/icons/Shops/Summary/Currency";
import IconInvoice from "styled/icons/Shops/Summary/Invoice";
import IconOrder from "styled/icons/Shops/Summary/Orders";
import IconShoppingCar from "styled/icons/Shops/Summary/ShoppingCar";
import IconTracking from "styled/icons/Shops/Summary/Tracking";
import IconTruck from "styled/icons/Shops/Summary/Truck";
import { formatMoney } from "utils/currencyUtils";
import { ModalInvoice } from "components/Shops/ModalInvoice/ModalInvoice";

import { Box, Link, Text } from "@chakra-ui/layout";
import { Button, Flex } from "@chakra-ui/react";

import { ISummaryProps } from "./ISummaryProps";

// import { useDisclosure, useMediaQuery, Center, Image } from "@chakra-ui/react";

/**
 * @param {ISummaryProps} summaryProps The component props
 * @returns {React.ReactElement} The Summary component
 */
export const Summary = (summaryProps: ISummaryProps): ReactElement => {
  const {
    driverAmount,
    earningsAmount,
    qtyOrders,
    qtyProducts,
    invoiceUrl,
    trackUrl,
    modalInvoice,
    onOpen,
    onClose,
    isOpenModal,
    handleOnInvoiceClick,
    handleOnTrackClick,
  } = summaryProps;

  const priceToShow =
    earningsAmount == 0 ? "Pendiente" : formatMoney(earningsAmount, CURRENCY_NAME);
  return (
    <Box boxShadow="base" p="2" rounded="md" bg="#F0EFF1">
      <Flex
        direction={["column", "row"]}
        wrap={["nowrap", "wrap"]}
        w={["100%", "100%"]}
        p={["10px", "19px"]}
      >
        <Flex
          direction={["row", "row"]}
          wrap={["wrap", "wrap"]}
          w={["100%", "100%"]}
          justify="space-between"
        >
          <Flex w={["45%", "auto"]}>
            <IconCurrency />
            <Flex direction="column" paddingInline="3">
              <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} w="100%">
                <b style={{ color: "#06b45d" }}> Tus ganancias </b>
              </Text>
              <Text fontSize={{ base: "18px", md: "17px", lg: "16px" }}>
                <b style={{ color: "#06b45d" }}>{priceToShow}</b>
              </Text>
            </Flex>
          </Flex>
          <Flex w={["45%", "auto"]}>
            <IconTruck />
            <Flex direction="column" paddingInline="3">
              <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} style={{ color: "gray" }}>
                Total a pagar
              </Text>
              <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} fontWeight="600">
                {formatMoney(driverAmount, CURRENCY_NAME)}
              </Text>
            </Flex>
          </Flex>
          <Flex w={["45%", "auto"]}>
            <IconShoppingCar />
            <Flex direction="column" paddingInline="3">
              <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} style={{ color: "gray" }}>
                # Productos
              </Text>
              <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} fontWeight="600">
                {qtyProducts}
              </Text>
            </Flex>
          </Flex>
          <Flex w={["45%", "auto"]}>
            <IconOrder />
            <Flex direction="column" paddingInline="3">
              <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} style={{ color: "gray" }}>
                # Órdenes
              </Text>
              <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} fontWeight="600">
                {qtyOrders}
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex justifyContent="flex-start" mt="19px" w="100%">
          <Flex direction="row-reverse" justify="space-around" w="100%">
            <Button
              color="white"
              border="1px solid #3870FF"
              _focus={{ border: "1px solid #3870FF" }}
              _hover={
                invoiceUrl === ""
                  ? { background: "#3871ff", color: "black" }
                  : { background: "#499453" }
              }
              background="#3871ff"
              mr={["1", "2"]}
              mt={["2", "0"]}
              borderRadius="13px"
              h={["40px", "54px"]}
              w={["100%", "266px"]}
              data-testid="Factura btn"
              disabled={invoiceUrl === ""}
              onClick={() => handleOnInvoiceClick()}
            >
              <IconInvoice />
              <Text ml="1">Factura</Text>
            </Button>
            {isOpenModal && modalInvoice && (
              <ModalInvoice
                invoice={modalInvoice.invoice}
                credit={modalInvoice.credit}
                metadata={modalInvoice.metadata}
                orderItems={modalInvoice.orderItems}
                storeProfit={modalInvoice.storeProfit}
                modalInvoice={modalInvoice}
                onOpen={onOpen}
                onClose={onClose}
                isOpenModal={isOpenModal}
              />
            )}
            <Link
              href={trackUrl === "" ? undefined : `${trackUrl}`}
              target="_blank"
              data-testid="Rastrear link"
              _hover={{
                textDecoration: "none",
                cursor: trackUrl === "" ? "default" : "pointer",
              }}
              width="45%"
            >
              <Button
                color="white"
                border="1px solid #3870FF"
                _focus={{ border: "1px solid #3870FF" }}
                background="#1c8a2c"
                mr={["1", "2"]}
                p="3"
                mt={["2", "0"]}
                mb={["2", "0"]}
                borderRadius="13px"
                h={["40px", "54px"]}
                data-testid="Rastrear btn"
                w={["100%", "266px"]}
                _hover={
                  trackUrl === ""
                    ? { background: "##499453", color: "black" }
                    : { background: "#499453" }
                }
                disabled={trackUrl === ""}
                onClick={() => handleOnTrackClick && handleOnTrackClick()}
              >
                <IconTracking /> <Text ml="1">Rastrear</Text>
              </Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
