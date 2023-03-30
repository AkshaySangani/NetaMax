import {
  DrawerHeader,
  Flex,
  DrawerBody,
  Container,
  Box,
  VStack,
  DrawerFooter,
  Text,
} from "@chakra-ui/react";
import { DeliverButton } from "components/Shops/DeliverOrderButton/DeliverOrderButton.styled";
import { OrderDetail } from "components/Shops/OrderDetail/OrderDetail";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { PickUpWizardSteps } from "constants/pickUpTokenConstants";
import { ReactElement } from "react";
import IconPickUpBasket from "styled/icons/Shops/PickUp/Basket";
import { formatMoney } from "utils/currencyUtils";
import { IOrderDetailsProps } from "./IOrderDetailsProps";

/**
 * The OrderDetails Component
 * @param {IOrderDetailsProps} orderDetailsProps The orderDetails props.
 * @returns {ReactElement} The OrderDetails component
 */
export const OrderDetails = (orderDetailsProps: IOrderDetailsProps): ReactElement => {
  const { orderDetail, onVerify } = orderDetailsProps;
  return (
    <>
      <DrawerHeader paddingX="16px">
        <Flex alignItems="center">
          <Text fontSize="16px" data-testid="order-details-header">
            Productos a entregar
          </Text>
        </Flex>
      </DrawerHeader>
      <DrawerBody paddingX="0px">
        <Container paddingX="16px">
          <Text fontSize="14px" fontWeight="400" color="#353535">
            Cliente
          </Text>
          <Text
            fontWeight="800"
            fontSize="24px"
            lineHeight="30px"
            data-testid="order-details-client"
          >
            {orderDetail?.customer?.firstName}
          </Text>
          <Flex marginTop="8px">
            <Box mr="5px" height="18px">
              <IconPickUpBasket />
            </Box>
            <Text fontWeight="500" fontSize="14px" lineHeight="18px">
              {orderDetail?.productsAmount} Productos a entregar
            </Text>
          </Flex>
        </Container>
        <VStack
          marginTop="16px"
          paddingTop="16px"
          borderY="2px solid rgba(53, 53, 53, 0.1)"
          height="50%"
          overflowY="auto"
        >
          {orderDetail?.productsOrder.map((order, index) => (
            <OrderDetail key={`order-${index}`} {...order} />
          ))}
        </VStack>
        <Container marginTop="18px" paddingX="16px">
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
            onClick={() => onVerify(PickUpWizardSteps.ORDER_CONFIRMED)}
            height="48px"
            display="flex"
            alignItems="center"
            cursor="pointer"
          >
            <Text fontWeight="600">Confirmar entrega</Text>
          </DeliverButton>
        </Box>
      </DrawerFooter>
    </>
  );
};
