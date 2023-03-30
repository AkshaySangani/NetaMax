import React, { ReactElement } from "react";

import { UNITS_TITLE } from "constants/basketConstants";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";

import {
  useMediaQuery,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";

import { IOrderReviewModalProps } from "./IOrderReviewModalProps";

/**
 *  The order review modal component
 * @param {IOrderReviewModalProps} props the component props
 * @returns {ReactElement} The order review modal component
 */
export const OrderReviewModal = ({
  productsOrder,
  orderSubtotalInclTax,
  isOpen,
  onClose,
}: IOrderReviewModalProps): ReactElement => {
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);

  return (
    <Center>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={isDesktop ? "4xl" : "sm"}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton fontSize="18px" />
          <ModalHeader w="100%" justifyContent="flex-start">
            <Text fontSize="21px" textAlign="left" marginTop="10px">
              Tus Productos
            </Text>
          </ModalHeader>
          <ModalBody w="100%" maxHeight="550px">
            {productsOrder &&
              productsOrder.map((item) => (
                <Box key={item.id}>
                  <Stack marginBottom="12px" alignItems="center" direction="row">
                    <Box display="flex" alignItems="center" justifyContent="center" w="20%">
                      <Img
                        rounded="lg"
                        fit="cover"
                        height="45px"
                        src={item.seoFilename}
                        alt={item.name}
                        draggable="false"
                        loading="lazy"
                      />
                    </Box>
                    <Box w="77%" pt="4">
                      <Stack spacing="0.5">
                        <Text
                          isTruncated
                          maxWidth="86%"
                          fontWeight="700"
                          fontSize={{ base: "sm", md: "sm", xl: "18px" }}
                        >
                          {item.name}
                        </Text>

                        <Flex alignItems="center">
                          <Text fontWeight="700" fontSize={{ base: "sm", md: "sm", xl: "16px" }}>
                            Precio unitario:
                          </Text>
                          <Text ml="4px" fontWeight="500">
                            {formatMoney(parseFloat(item.price), CURRENCY_NAME)}
                          </Text>
                        </Flex>

                        <HStack spacing="1" mt="3" justify="space-between">
                          <Text fontWeight="700" fontSize={{ base: "sm", md: "sm", xl: "16px" }}>
                            {UNITS_TITLE}: {item.quantity}
                          </Text>
                        </HStack>
                      </Stack>
                    </Box>
                  </Stack>
                  <Divider />
                </Box>
              ))}
          </ModalBody>
          <ModalFooter
            w="100%"
            h="53px"
            justifyContent="space-between"
            borderRadius="12px"
            bg="#F0F0F0"
            fontWeight="700"
            boxShadow="0px 0px 7px rgba(0, 0, 0, 0.08)"
            position="relative"
          >
            <Text>Total</Text>
            <Text>{formatMoney(Number(orderSubtotalInclTax), CURRENCY_NAME)}</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
};
