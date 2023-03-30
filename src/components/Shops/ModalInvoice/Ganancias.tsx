import React, { ReactElement } from "react";

import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import newformatDate from "../../../utils/dateUtils";
import { IModalInvoiceProps } from "./IModalInvoiceProps";
import { toFixed } from "../../../utils/numberUtils";
/**
 * The Ganancias component of ModalInvoice
 * @param {IModalInvoiceProps} props Shops Menu props
 * @returns {ReactElement} The menu container
 */
export const Ganancias = (props: IModalInvoiceProps): ReactElement => {
  const { invoice, storeProfit } = props;

  const { profitweekdatefrom, profitweekdateto, month, week, historical } = storeProfit;

  const today = new Date(invoice.invoiceDate);
  const newDateFormatWeekFrom = `${newformatDate(profitweekdatefrom, true)}`;
  const newDateFormatWeekTo = `${newformatDate(profitweekdateto, true)}`;
  const newDateFormatDay = `${newformatDate(today, true)}`;

  return (
    <Stack
      direction={["column-reverse", "column-reverse", "column-reverse", "row"]}
      pt="7"
      pb="12"
      gap="6"
      pl="6"
      pr="6"
      bg="#fff"
    >
      <Box
        w={["100%", "100%", "100%", "45%"]}
        h="165px"
        backgroundImage="linear-gradient(180deg, #dde8ff 2.50%, #f6f9ff 2.50%, #f6f9ff 50%, #dde8ff 50%, #dde8ff 52.50%, #f6f9ff 52.50%, #f6f9ff 100%)"
        backgroundSize="68.00px 68.00px"
        borderRadius="12"
      >
        <Flex justify="space-around" h="100%">
          <Flex direction="column" justify="flex-end">
            <Text color="#82B2FF" fontWeight="700" textAlign="center">
              {toFixed(storeProfit.today)}
            </Text>
            <Box w="45px" h="25px" bg="#BBD5FF" borderTopRadius="6"></Box>
          </Flex>
          <Flex direction="column" justify="flex-end">
            <Text color="#FFA947" fontWeight="700" textAlign="center">
              {toFixed(week)}
            </Text>
            <Box w="45px" h="55px" bg="#FFD5A6" borderTopRadius="6"></Box>
          </Flex>
          <Flex direction="column" justify="flex-end" alignItems="center">
            <Text color="#92C048" fontWeight="700" textAlign="center">
              {toFixed(month)}
            </Text>
            <Box w="45px" h="90px" bg="#CCEB98" borderTopRadius="6"></Box>
          </Flex>
          <Flex direction="column" justify="flex-end" alignItems="center">
            <Text color="#FF6C96" fontWeight="700" textAlign="center">
              {toFixed(historical)}
            </Text>
            <Box w="45px" h="130px" bg="#FFB5CA" borderTopRadius="6"></Box>
          </Flex>
        </Flex>
        <Flex fontSize={["13px", "15px"]}>
          <Text w="25%" align="center">
            Hoy
          </Text>
          <Text w="25%" align="center">
            Semana
          </Text>
          <Text w="25%" align="center">
            {newDateFormatDay.split(" ")[2]}
          </Text>
          <Text w="25%" align="center">
            Históricas
          </Text>
        </Flex>
      </Box>
      <Box fontSize="13.5px">
        <Text fontSize={["16px", "15px"]} fontWeight="700" pb="4">
          Ganancias de mi tienda
        </Text>
        <Flex color="#767676" direction="column" gap="3">
          <Flex gap="5px">
            <Box w={["12px", "14px"]} h={["12px", "14px"]} bg="#BBD5FF" alignSelf="center"></Box>
            <Text>
              <span>
                <b>Hoy</b> ({newDateFormatDay}) Ganaste ${toFixed(storeProfit.today)}
              </span>
            </Text>
          </Flex>

          <Flex gap="5px">
            <Box w={["12px", "14px"]} h={["12px", "14px"]} bg="#FFD5A6" alignSelf="center"></Box>
            <Text>
              <span>
                <b>Semana</b> (
                {newDateFormatWeekFrom.split(" ")[0] +
                  " " +
                  newDateFormatWeekFrom.split(" ")[1] +
                  " " +
                  newDateFormatWeekFrom.split(" ")[2] +
                  " / " +
                  newDateFormatWeekTo}
                ) Ganaste ${toFixed(week)}
              </span>
            </Text>
          </Flex>

          <Flex gap="5px">
            <Box w={["12px", "14px"]} h={["12px", "14px"]} bg="#CCEB98" alignSelf="center"></Box>
            <Text>
              <span>
                <b>Mes de {newDateFormatDay.split(" ")[2]}</b> - Ganaste ${toFixed(month)}
              </span>
            </Text>
          </Flex>

          <Flex gap="5px">
            <Box w={["12px", "14px"]} h={["12px", "14px"]} bg="#FFB5CA" alignSelf="center"></Box>
            <Text>
              <span>
                <b>Históricas</b> (inicio con Neta a hoy) Ganaste ${toFixed(historical)}
              </span>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Stack>
  );
};
