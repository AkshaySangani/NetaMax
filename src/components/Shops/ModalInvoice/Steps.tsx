import React, { ReactElement } from "react";

import { Box, Flex, Text } from "@chakra-ui/react";
/**
 * Steps component of ModalInvoice
 * @param {IModalInvoiceProps} props Shops Menu props
 * @returns {ReactElement} The menu container
 */
export const Steps = (): ReactElement => {
  return (
    <Box w="100%" bg="#fff">
      <Box bg="#F0F5FF" rounded="lg" p={["1.4rem", "1.8rem"]} mr="6" ml="6">
        <Flex
          direction={["column", "column", "row"]}
          fontSize={{ base: "13px", md: "13px", lg: "14px" }}
          gap="1.5rem"
        >
          <Flex>
            <Text
              fontSize={{ base: "17px", md: "18px", lg: "20px" }}
              fontWeight="700"
              lineHeight={["16.5px", "26.5px"]}
              mr={["3px", "8px"]}
              color="#68717D"
            >
              1.
            </Text>
            <Text color="#767676">
              <span>
                <b>Revisa tu orden</b> al momento de la entrega y solo pagar los productos que
                recibas
              </span>
            </Text>
          </Flex>
          <Flex>
            <Text
              fontSize={{ base: "17px", md: "18px", lg: "20px" }}
              fontWeight="700"
              lineHeight={["16.5px", "26.5px"]}
              mr={["3px", "8px"]}
              color="#68717D"
            >
              2.
            </Text>
            <Text color="#767676">
              <span>
                <b>Tienes 24 horas</b> después de la entrega para hacer cualquier reclamación
              </span>
            </Text>
          </Flex>
          <Flex>
            <Text
              fontSize={{ base: "17px", md: "18px", lg: "20px" }}
              fontWeight="700"
              lineHeight={["16.5px", "26.5px"]}
              mr={["3px", "8px"]}
              color="#68717D"
            >
              3.
            </Text>
            <Text color="#767676">
              <span>
                <b>Si deseas hacer algun cambio</b> en tu entrega por favor comunícate al 5545439866
              </span>
            </Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};
