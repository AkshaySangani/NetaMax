import React, { ReactElement } from "react";

import { screenSizes } from "styled/screen";

import { useMediaQuery, Box, Divider, Flex, Text, Button } from "@chakra-ui/react";
import IconWhatsapp from "styled/icons/Shops/Order/Whatsapp";
import IconCurrency from "styled/icons/Shops/Summary/Currency";
import IconCash from "styled/icons/Shops/Summary/Cash";
import TruckSolid from "styled/icons/Shops/Summary/TruckSolid";
import NetaIcon from "styled/icons/Shops/Summary/NetaIcon";
import newformatDate from "../../../utils/dateUtils";
import { IModalInvoiceProps } from "./IModalInvoiceProps";
/**
 * The Valores component of ModalInvoice
 * @param {IModalInvoiceProps} props Shops Menu props
 * @returns {ReactElement} The menu container
 */
export const Valores = (props: IModalInvoiceProps): ReactElement => {
  const { metadata, credit, invoice } = props;
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);

  const { updatedAt } = metadata;
  const { dropToPay, creditToPay, totalToPayToday } = credit;
  const { storeDebit } = invoice;

  const newDateFormatDay = `${newformatDate(updatedAt, true)}`;

  return (
    <Box bg="#fff" pt="10" pb="6" pl="4" pr="4">
      <Flex
        direction={["column", "column", "row"]}
        justifyContent="center"
        gap={["1.5rem", "2rem"]}
        color="#939393"
      >
        <Flex d="column" textAlign="center" justifyContent="center">
          <Flex justifyContent="center" pb="2" gap="1rem">
            <TruckSolid />
            <Text lineHeight="30px" fontSize={["14px", "15px", "17px"]}>
              ${dropToPay}
            </Text>
          </Flex>
          <Flex justifyContent="center" fontSize={["13px", "14px", "15px"]}>
            Valor total de la entrega
          </Flex>
        </Flex>
        {isDesktop && <Divider h="3rem" orientation="vertical" borderWidth="1px" color="#BABABA" />}

        <Flex justifyContent="center" gap={["2rem"]}>
          <Flex w="50%" d="column" textAlign="center">
            <Flex justifyContent="center" pb="2" gap="1rem">
              <IconCash />
              <Text lineHeight="30px" fontSize={["14px", "15px", "17px"]}>
                ${creditToPay}
              </Text>
            </Flex>
            <Flex justifyContent="center" fontSize={["13px", "14px", "15px"]}>
              Saldo adeudado en Crédito al {newDateFormatDay}
            </Flex>
          </Flex>
          <Divider h={["4rem", "3rem"]} orientation="vertical" borderWidth="1px" color="#BABABA" />
          <Flex d="column" textAlign="center">
            <Flex justifyContent="center" pb="2" gap="1rem">
              <NetaIcon />
              <Text fontSize={["14px", "15px", "17px"]} lineHeight="30px">
                ${storeDebit}
              </Text>
            </Flex>
            <Flex justifyContent="center" fontSize={["13px", "14px", "15px"]}>
              Débito de tu Billetera Neta
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider
        ml="auto"
        mr="auto"
        justify="center"
        w="80%"
        mt={["6", "8"]}
        orientation="horizontal"
        borderWidth="1px"
        color="#BABABA"
      />
      <Flex pb="7" pt="4" alignItems="center" color="#333333" fontWeight="700">
        <Flex width={["50%", "40%"]} justifyContent="flex-end" pr="6">
          <IconCurrency />
          <Text lineHeight="2" pl="3" fontSize={["17px", "18px"]}>
            {totalToPayToday}
          </Text>
        </Flex>
        <Divider
          borderColor="#333333"
          h={["2rem", "1rem"]}
          orientation="vertical"
          borderWidth="1px"
        />
        <Text
          justifyContent="flex-start"
          fontSize={["13px", "16px"]}
          textAlign="start"
          pl={["1rem", "2rem"]}
        >
          Total a pagar al conductor en Efectivo
        </Text>
      </Flex>
      <Flex justify="center">
        <Button
          leftIcon={<IconWhatsapp />}
          background="#03CA69"
          color="#FDFCFE"
          _hover={{ bg: "#028545" }}
          borderRadius="99px"
        >
          <Text fontSize={["12px", "14px"]}>Si tienes dudas contáctanos</Text>
        </Button>
      </Flex>
    </Box>
  );
};
