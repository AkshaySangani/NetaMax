import React, { ReactElement, useState, useEffect } from "react";
import IconArrow from "styled/icons/Shops/Order/Arrow";
import IconWhatsapp from "styled/icons/Shops/Order/Whatsapp";
import { screenSizes } from "styled/screen";
import router from "next/router";

import { Link, Text } from "@chakra-ui/layout";
import { useMediaQuery, Button, Flex, Spacer } from "@chakra-ui/react";

import { IOrderProps } from "./IOrderProps";
import newformatDate from "../../../utils/dateUtils";
import { format, utcToZonedTime } from "date-fns-tz";
import { es } from "date-fns/locale";
/**
 * The shops menu popover container.
 * @param {IOrderProps} orderProps Shops Menu props
 * @returns {ReactElement} The menu container
 */
export const Order = (orderProps: IOrderProps): ReactElement => {
  const {
    id,
    shippingStatusId,
    orderStatusId,
    customerPickupDateAt,
    createdOnUtc,
    storeName,
    qtyItems,
    customerName,
    phoneNumber,
    onOrderDetailsClick,
    onContactarCliente,
  } = orderProps;
  const today = new Date(createdOnUtc);
  const timeZone = "America/Mexico_City";
  const timeInBrisbane = utcToZonedTime(today, timeZone);

  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);

  const newDateFormat = `${newformatDate(createdOnUtc)} - ${format(
    timeInBrisbane,
    "HH:mm aaaaa'm'",
    {
      locale: es,
    }
  )}`;

  const sendText = `Hola ${customerName}, te hablo de la tiendita ${storeName}, donde montaste tu pedido de NETA`;
  const msjText = sendText.split(" ").join("%20");
  const toWhatsApp = `https://wa.me/52${phoneNumber}?text=${msjText}`;

  const [statusAndColor, setStatusAndColor] = useState<{ color: string; text: string }>({
    color: "#06b45d",
    text: "Entregado",
  });

  /**
   * Order details column.
   * @type {Function}
   * @returns {ReactElement} First Column order resumen.
   */
  function fistColumn() {
    return (
      <>
        <Flex direction="column" justifyContent="flex-start">
          <Text fontSize={["13px", "15px"]} style={{ color: "#9FB1C6" }}>
            Realizada:
          </Text>
          <Flex direction="column" align-items="flex-start">
            <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} style={{ color: "#787878" }}>
              {newDateFormat}
            </Text>
            {isDesktop && (
              <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} color="#787878">
                # {id}&nbsp;
                <span style={{ color: "#9FB1C6" }}>&#124; Orden</span>
              </Text>
            )}
          </Flex>
        </Flex>
        <Flex
          direction="column"
          justifyContent={["flex-start", "center"]}
          align={["flex-start", "center"]}
        >
          <Text
            style={{ color: "black" }}
            textAlign="left"
            w="100%"
            fontSize={["14px", "18px"]}
            p={["7px 0", "0"]}
          >
            <span style={{ fontWeight: "600", textTransform: "capitalize" }}>{customerName}</span>
            &nbsp;
            <span style={{ color: "#9FB1C6" }}>&#124; Cliente</span>
          </Text>
          <Link href={toWhatsApp} target="_blank" textDecoration="none!important">
            <Button
              color="#3870FF"
              border="1px solid #3870FF"
              _focus={{ border: "1px solid #3870FF" }}
              _hover={{ bgColor: "none" }}
              bg="#03be61"
              mr={["1", "2"]}
              mt={["2", "7px"]}
              borderRadius="7px"
              h={["40px", "40px"]}
              w={["50", "183.25px"]}
              onClick={() => onContactarCliente && onContactarCliente(orderProps)}
            >
              <IconWhatsapp />
              <Text ml="4px" style={{ color: "white" }}>
                Contactar cliente
              </Text>
            </Button>
          </Link>
        </Flex>
      </>
    );
  }

  useEffect(() => {
    if (shippingStatusId) {
      statusPicker();
    }
  }, [shippingStatusId]);

  /**
   * Status Picker.
   * @type {Function}
   * @returns {void} Color Status + msj.
   */
  function statusPicker() {
    if (orderStatusId === "30" && customerPickupDateAt !== "") {
      setStatusAndColor({
        color: "#06b45d",
        text: "Entregado al Cliente",
      });
    } else if (orderStatusId === "30" && customerPickupDateAt === "") {
      setStatusAndColor({
        color: "#f0894b",
        text: "Entregado en Tienda",
      });
    } else if (orderStatusId === "40") {
      setStatusAndColor({
        color: "#F04D4B",
        text: "No entregado",
      });
    } else {
      setStatusAndColor({
        color: "#F04D4B",
        text: "No entregado",
      });
    }
  }

  return (
    <Flex
      direction={["column", "row", "row"]}
      boxShadow="base"
      p={["10px 12px", "17px 22px"]}
      rounded="md"
      bg="white"
      maxW="740px"
    >
      <Flex justifyContent="space-between" w="100%" align="center">
        {/* Fist Child */}
        {!isDesktop ? (
          <Flex direction="column" justify="space-between" align="flex-start">
            {fistColumn()}
          </Flex>
        ) : (
          fistColumn()
        )}
        {/* Third Child */}
        <Flex pt={5} justifyContent="center" align={["flex-start", "center"]} h={["100%", "auto"]}>
          <IconArrow />
        </Flex>
        {/* Last Child */}
        <Flex align-items="flex-end" justifyContent="center" align="center">
          <Flex direction="column" align-items="flex-end">
            <Text
              fontSize={{ base: "16px", md: "17px", lg: "16px" }}
              color={statusAndColor.color}
              textAlign="right"
              w="100%"
              p={["5px 0", "0"]}
            >
              <b>{statusAndColor.text}</b>
            </Text>
            <Text fontSize={{ base: "14px", md: "17px", lg: "16px" }} textAlign="right" w="100%">
              {qtyItems == 1 ? `${qtyItems} producto` : `${qtyItems} productos`}
            </Text>
            {!isDesktop && (
              <Text
                fontSize={{ base: "14px", md: "17px", lg: "16px" }}
                color="#787878"
                textAlign="right"
                w="100%"
              >
                # {id}&nbsp;
                <span style={{ color: "#9FB1C6" }}>&#124; Orden</span>
              </Text>
            )}
            <Button
              bgColor="transparent"
              border="none"
              p={["5px 0", "0"]}
              m="0"
              w="100%"
              h="auto"
              onClick={() => {
                onOrderDetailsClick && onOrderDetailsClick(orderProps);
                router.push(`order/${id}`);
              }}
              data-testid="Ver detalle"
            >
              <Text
                fontSize={{
                  base: "14px",
                  md: "17px",
                  lg: "16px",
                }}
                w="100%"
                fontWeight="500"
                color="#3870FF"
                textAlign="right"
              >
                Ver detalle
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Spacer />
    </Flex>
  );
};
