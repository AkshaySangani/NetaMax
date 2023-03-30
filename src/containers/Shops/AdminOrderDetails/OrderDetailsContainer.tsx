import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { Loader } from "components/common/Loader";
import { OrderTable } from "components/OrderDetails/OrderTable/OrderTable";
import { HeaderContainer } from "components/ProductDetails/ProductDetails.styled";
import {
  ButtonNoOp,
  DeliverButton,
} from "components/Shops/DeliverOrderButton/DeliverOrderButton.styled";
import { selectIsLoadingToken } from "dataflows/NopAuth/NopAuthSelectors";
import { acquireNopToken } from "dataflows/NopAuth/NopAuthThunks";
import { selectIsLoadingOrder, selectOrder } from "dataflows/OrderDetails/IOrderSelectors";
import { getOrderItems } from "dataflows/OrderDetails/OrderThunks";
import {
  selectDeliverErrorMessage,
  selectIsDeliveringOrder,
} from "dataflows/Shops/DeliverOrder/DeliverOrderSelectors";
import { deliverOrderNoToken } from "dataflows/Shops/DeliverOrder/DeliverOrderThunk";
import { clearErrorMessage } from "dataflows/Stores/IStoreSlice";

import { Img } from "@chakra-ui/image";
import { Box, Center, Container, Text, VStack } from "@chakra-ui/layout";
import { Alert, AlertIcon, AlertTitle, CloseButton } from "@chakra-ui/react";

import { IOrderDetailsContainerProps } from "./IOrderDetailsContainer";

/**
 * The order details container.
 * @param {IOrderDetailsContainerProps} props the component props.
 * @returns { ReactElement } The order details container.
 */
export const OrderDetailsContainer = (props: IOrderDetailsContainerProps): ReactElement => {
  const { orderId } = props;
  const dispatch = useDispatch();
  const orders = useSelector(selectOrder);
  const isLoadingOrder = useSelector(selectIsLoadingOrder);
  const isLoadingToken = useSelector(selectIsLoadingToken);
  const isDeliveringOrder = useSelector(selectIsDeliveringOrder);
  const deliverErrorMessage = useSelector(selectDeliverErrorMessage);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderItems(orderId));
    }
  }, [orderId]);

  useEffect(() => {
    dispatch(clearErrorMessage());
  }, []);

  /**
   * Marks the order as delivered
   * @returns {void}
   */
  const handleDeliverOrder = () => {
    dispatch(deliverOrderNoToken(orderId));
  };

  /**
   * Acquire NopCommerce token to handle requests.
   * @returns {void}
   */
  const authenticateNopUser = (): void => {
    //TODO: The following credentials should be encrypted,
    //for urgency reasons they are added in code temporarily.
    dispatch(
      acquireNopToken({
        email: "admin@neta.mx",
        password: "2022.SerieA.Net@",
      })
    );
  };

  /**
   * Get Order Details
   * @param {string} orderId the order id
   * @returns {void}
   */
  const getOrderDetails = (orderId: string): void => {
    dispatch(getOrderItems(orderId));
  };

  useEffect(() => {
    authenticateNopUser();
  }, []);

  useEffect(() => {
    isLoadingToken === false && getOrderDetails(orderId);
  }, [isLoadingToken]);

  return (
    <div>
      {isLoadingToken && isLoadingOrder ? (
        <Center h="100%" w="100%" position="fixed">
          <Box>
            <Box pb="25px">
              <Img src="/assets/images/logo.png" width="120px" />
            </Box>
            <Center>
              <Loader />
            </Center>
          </Box>
        </Center>
      ) : (
        <Container centerContent={false} maxW="container.lg" p="6">
          <HeaderContainer>
            <BackToHome size={18} weight={700} homeRoute="/invoices" title="Volver a Mis Ventas" />
          </HeaderContainer>
          {/* <SplitCard {...splitCardObject} /> */}
          <Text fontSize="20px" fontWeight="700">
            N. de orden: {orderId}
          </Text>
          {orders && (
            <OrderTable
              items={orders.items}
              order_total={orders.order_total}
              order_discount={orders.order_discount}
              order_subtotal_excl_tax={orders.order_subtotal_excl_tax}
            />
          )}
          <VStack p="16px" position="fixed" bottom="0" left="0" width="100%" zIndex="1">
            <Alert
              maxHeight="60px"
              maxWidth="482px"
              status="error"
              rounded="lg"
              hidden={deliverErrorMessage === undefined}
            >
              <AlertIcon />
              <AlertTitle mr={2}>{deliverErrorMessage}</AlertTitle>
              <CloseButton
                position="absolute"
                right="8px"
                top="8px"
                onClick={() => dispatch(clearErrorMessage())}
              />
            </Alert>
            <ButtonNoOp
              onClick={handleDeliverOrder}
              variant="unstyled"
              isDisabled={isDeliveringOrder}
              width="100%"
              opacity={1}
              color={isDeliveringOrder ? "gray" : "black"}
            >
              <DeliverButton height="48px" display="flex" alignItems="center" cursor="pointer">
                <Text fontWeight="600">
                  {isDeliveringOrder ? "Entregando" : "Confirmar entrega"}
                </Text>
                {isDeliveringOrder && (
                  <Img marginLeft="16px" w="36px" src="/gif/Spinner-1s-377px.gif" />
                )}
              </DeliverButton>
            </ButtonNoOp>
          </VStack>
        </Container>
      )}
    </div>
  );
};
