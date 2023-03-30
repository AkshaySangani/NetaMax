import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { GoToLogin } from "components/common/GoToLogin/GoToLogin";
import { Loader } from "components/common/Loader";
import { MisComprasDetail } from "components/MisCompras/Detail/MisComprasDetail";
import { HeaderContainer } from "components/ProductDetails/ProductDetails.styled";
import { TrackerApp, TAB_MISCOMPRAS_VER_DETALLE_PEDIDO } from "constants/amplitudeConstants";
import { MIS_COMPRAS_ROUTE } from "constants/checkoutConstants";
import { selectCustomer, selectIsLoggedIn } from "dataflows/Auth/AuthSelectors";
import { onOpen as onOpenAction } from "dataflows/Checkout/CheckoutSlice";
import {
  selectIsLoadingGetOrderByOrderId,
  selectOrderDetail,
} from "dataflows/MisCompras/MisComprasSelectors";
import { getOrderByOrderId } from "dataflows/MisCompras/MisComprasThunks";
import { trackEvent } from "utils/tracker";

import { Center, Container } from "@chakra-ui/react";

import { IMisComprasDetailContainerProps } from "./IMisComprasDetailContainerProps";

/**
 * The MisComprasContainer component.
 * @returns {ReactElement} the component element.
 * @param {IMisComprasDetailContainerProps} props order number.
 */
export const MisComprasDetailContainer = (props: IMisComprasDetailContainerProps): ReactElement => {
  const { orderId } = props;

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const order = useSelector(selectOrderDetail);
  const userAuth = useSelector(selectCustomer);
  const isLoading = useSelector(selectIsLoadingGetOrderByOrderId);

  /**
   * handles OnOpen action login.
   * @returns {void}
   */
  const onOpenLoginFlow = () => {
    dispatch(onOpenAction({ onlyLoginSteps: true }));
  };

  useEffect(() => {
    trackEvent(TAB_MISCOMPRAS_VER_DETALLE_PEDIDO, [TrackerApp.Amplitude, TrackerApp.Segment]);
  }, []);

  useEffect(() => {
    if (orderId && userAuth !== undefined) {
      dispatch(getOrderByOrderId(orderId));
    }
  }, [isLoggedIn, orderId]);

  if (!isLoggedIn) return <GoToLogin onOpenLogin={onOpenLoginFlow} />;

  return isLoading ? (
    <Center h="50%" w="100%" position="fixed">
      <Loader />
    </Center>
  ) : (
    <Container maxW="container.xl">
      <HeaderContainer>
        <BackToHome
          title="Volver a mis compras"
          homeRoute={MIS_COMPRAS_ROUTE}
          size={18}
          weight={700}
        />
      </HeaderContainer>
      {order && <MisComprasDetail order={order} />}
    </Container>
  );
};
