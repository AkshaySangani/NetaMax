import { Container, Flex, Box, DrawerBody, Button, DrawerFooter, Text } from "@chakra-ui/react";
import { DeliverButton } from "components/Shops/DeliverOrderButton/DeliverOrderButton.styled";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import React, { ReactElement } from "react";
import IconPickUpBasket from "styled/icons/Shops/PickUp/Basket";
import IconPickUpCheck from "styled/icons/Shops/PickUp/Check";
import { formatMoney } from "utils/currencyUtils";
import { splitHost } from "utils/stringUtils";
import { IOrderConfirmedProps } from "./IOrderConfirmedProps";

/**
 * The OrderConfirmed Component
 * @param {IOrderConfirmedProps} orderConfirmedProps The orderConfirmedProps props.
 * @returns {ReactElement} The OrderConfirmed component
 */
export const OrderConfirmed = (orderConfirmedProps: IOrderConfirmedProps): ReactElement => {
  const { handleCopy, copyText, orderDetail, handleClose, currentShop } = orderConfirmedProps;

  return (
    <>
      <Container background="#3CE88B" minHeight="40vh">
        <Flex direction="column" justifyContent="space-evenly" h="full">
          <Box>
            <IconPickUpCheck />
          </Box>
          <Box paddingBottom="10px">
            <Text fontSize="14px">Entrega confirmada</Text>
            <Text fontSize="32px" fontWeight="800" lineHeight="40px">
              Entrega confirmada correctamente
            </Text>
          </Box>
        </Flex>
      </Container>
      <DrawerBody paddingX="0px">
        <Container paddingX="16px" borderBottom="2px solid rgba(53, 53, 53, 0.1)" paddingY="24px">
          <Text fontSize="24px" fontWeight="800" color="#353535">
            Sigue compartiendo tu liga
          </Text>
          <Text fontWeight="400" fontSize="14px">
            Para que sigas ganando con tus entregas
          </Text>
          <Flex marginTop="16px" alignItems="center" justify="space-between">
            <Text fontSize="14px" fontWeight="600">
              {`https://neta.mx?${splitHost(currentShop?.Hosts || "")}`}
            </Text>
            <Button
              onClick={handleCopy}
              border="1px solid #353535"
              borderRadius="48px"
              paddingX="16px"
              paddingY="6px"
              background="white"
              minWidth="100px"
            >
              <Text fontSize="14px" fontWeight="600">
                {copyText}
              </Text>
            </Button>
          </Flex>
        </Container>
        <Container marginTop="18px" paddingX="16px">
          <Text>Resumen de compra</Text>
          <Flex marginBottom="24px">
            <Box mr="5px" height="18px">
              <IconPickUpBasket />
            </Box>
            <Text fontWeight="500" fontSize="14px" lineHeight="18px">
              {orderDetail?.productsAmount} Productos entregados
            </Text>
          </Flex>
          <Text fontSize="14px" fontWeight="400" color="#353535">
            Información de la orden
          </Text>
          <Flex marginTop="9px" alignItems="center" justify="space-between">
            <Text fontSize="14px" fontWeight="600">
              Subtotal
            </Text>
            <Text fontSize="16px" fontWeight="800">
              {formatMoney(Number(orderDetail?.orderSubtotalInclTax), CURRENCY_NAME)}
            </Text>
          </Flex>
          <Flex
            borderBottom="0.5px solid rgba(53, 53, 53, 0.2)"
            alignItems="center"
            justify="space-between"
            paddingBottom="8px"
          >
            <Text fontSize="14px" fontWeight="600">
              Descuento
            </Text>
            <Text fontSize="16px" fontWeight="800">
              {formatMoney(Number(orderDetail?.orderDiscount), CURRENCY_NAME)}
            </Text>
          </Flex>
          <Flex marginTop="9px" alignItems="center" justify="space-between">
            <Text fontSize="14px" fontWeight="600">
              Total
            </Text>
            <Text fontSize="16px" fontWeight="800">
              {formatMoney(Number(orderDetail?.orderTotal), CURRENCY_NAME)}
            </Text>
          </Flex>
        </Container>
      </DrawerBody>
      <DrawerFooter>
        <Box width="100%">
          <DeliverButton
            onClick={handleClose}
            height="48px"
            display="flex"
            alignItems="center"
            cursor="pointer"
          >
            <Text fontWeight="600">Regresar al inicio</Text>
          </DeliverButton>
        </Box>
      </DrawerFooter>
    </>
  );
};
