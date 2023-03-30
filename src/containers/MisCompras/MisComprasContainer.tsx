import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { GoToLogin } from "components/common/GoToLogin/GoToLogin";
import { Loader } from "components/common/Loader";
import { IMisComprasProps } from "components/MisCompras/IMisComprasProps";
import { MisCompras } from "components/MisCompras/MisCompras";
import { HeaderContainer } from "components/ProductDetails/ProductDetails.styled";
import {
  MI_CUENTA_MIS_COMPRAS_PAGE_VIEWED,
  MIS_COMPRAS_NO_PURCHASES_PAGE_VIEWED,
  TrackerApp,
} from "constants/amplitudeConstants";
import { selectCustomer, selectIsLoggedIn } from "dataflows/Auth/AuthSelectors";
import { onOpen as onOpenAction } from "dataflows/Checkout/CheckoutSlice";
import {
  selectIsAmplitudeInitialized,
  selectIsSegmentInitialized,
  selectIsSegmentNodeInitialized,
} from "dataflows/EventTracking/EventTrackingSelectors";
import {
  selectIsLoadingOrders,
  selectOrders,
  selectOrdersMetadata,
} from "dataflows/MisCompras/MisComprasSelectors";
import { getOrders } from "dataflows/MisCompras/MisComprasThunks";
import { useIsMounted } from "hooks/useIsMounted";
import { trackEvent } from "utils/tracker";

import { Center, Container } from "@chakra-ui/react";

/**
 * The MisComprasContainer component.
 * @returns {ReactElement} the component element.
 */
export const MisComprasContainer = (): ReactElement => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const metadata = useSelector(selectOrdersMetadata);
  const isLoadingOrders = useSelector(selectIsLoadingOrders);
  const userAuth = useSelector(selectCustomer);
  const isAmplitudeInitialized = useSelector(selectIsAmplitudeInitialized);
  const isSegmentInitialized = useSelector(selectIsSegmentInitialized);
  const isSegmentNodeInitialized = useSelector(selectIsSegmentNodeInitialized);
  const isMounted = useIsMounted();

  /**
   * handles OnOpen action login.
   * @returns {void}
   */
  const onOpenLoginFlow = () => {
    dispatch(onOpenAction({ onlyLoginSteps: true }));
  };

  useEffect(() => {
    if (isAmplitudeInitialized && isSegmentInitialized && isSegmentNodeInitialized) {
      trackEvent(MI_CUENTA_MIS_COMPRAS_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [isAmplitudeInitialized, isSegmentInitialized, isSegmentNodeInitialized]);

  useEffect(() => {
    if (userAuth) {
      dispatch(
        getOrders({
          npp: metadata.perPage,
          page: metadata.currentPage,
          userId: userAuth.id,
        })
      );
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (
      isMounted &&
      isLoggedIn &&
      !isLoadingOrders &&
      isAmplitudeInitialized &&
      isSegmentInitialized &&
      isSegmentNodeInitialized &&
      orders &&
      orders?.length == 0
    ) {
      trackEvent(MIS_COMPRAS_NO_PURCHASES_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [
    orders,
    isLoadingOrders,
    isAmplitudeInitialized,
    isSegmentInitialized,
    isSegmentNodeInitialized,
  ]);

  const hasMoreOrders = metadata.totalPages > metadata.currentPage;

  /**
   * Action to fetch more orders.
   * @returns {void}
   */
  const loadNextPage = () => {
    if (userAuth) {
      dispatch(
        getOrders({
          npp: metadata.perPage,
          page: metadata.currentPage + 1,
          userId: userAuth.id,
        })
      );
    }
  };

  const misComprasProps: IMisComprasProps = {
    orders,
    hasMoreOrders,
    loadNextPage,
  };

  if (!isLoggedIn) return <GoToLogin onOpenLogin={onOpenLoginFlow} />;

  return isLoadingOrders && orders?.length === 0 ? (
    <Center h="50%" w="100%" position="fixed">
      <Loader />
    </Center>
  ) : (
    <Container maxW="container.xl">
      <HeaderContainer>
        <BackToHome size={18} weight={700} />
      </HeaderContainer>

      <MisCompras {...misComprasProps} />
    </Container>
  );
};
