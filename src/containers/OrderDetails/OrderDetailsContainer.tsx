import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { Loader } from "components/common/Loader";
import { OrderTable } from "components/OrderDetails/OrderTable/OrderTable";
import { HeaderContainer } from "components/ProductDetails/ProductDetails.styled";
import { selectIsLoadingToken } from "dataflows/NopAuth/NopAuthSelectors";
import { acquireNopToken } from "dataflows/NopAuth/NopAuthThunks";
import { selectOrder } from "dataflows/OrderDetails/IOrderSelectors";
import { getOrderItems } from "dataflows/OrderDetails/OrderThunks";

import { Img } from "@chakra-ui/image";
import { Box, Center, Container, Text } from "@chakra-ui/layout";

import { IOrderDetailsContainerProps } from "./IOrderDetailsContainer";

/**
 * The order details container.
 * @param {IOrderDetailsContainerProps} props the component props.
 * @returns { ReactElement } The order details container.
 */
export const OrderDetailsContainer = (props: IOrderDetailsContainerProps): ReactElement => {
  const { orderId } = props;
  const dispatch = useDispatch();
  const orderItems = useSelector(selectOrder);
  const isLoadingToken = useSelector(selectIsLoadingToken);

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
      {isLoadingToken ? (
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
            <BackToHome size={18} weight={700} />
          </HeaderContainer>
          {/* <SplitCard {...splitCardObject} /> */}
          <Text fontSize="20px" fontWeight="700">
            N. de orden: {orderId}
          </Text>
          {orderItems && (
            <OrderTable
              items={orderItems.items}
              order_total={orderItems.order_total}
              order_discount={orderItems.order_discount}
              order_subtotal_excl_tax={orderItems.order_subtotal_excl_tax}
            />
          )}
        </Container>
      )}
    </div>
  );
};
