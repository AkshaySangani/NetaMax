import React, { ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { MiCuenta } from "components/MiCuenta/MiCuenta";
import { MI_CUENTA_INGRESAR_DATOS_CLICKED, TrackerApp } from "constants/amplitudeConstants";
import { onOpen as onOpenAction } from "dataflows/Checkout/CheckoutSlice";
import {
  selectIsAmplitudeInitialized,
  selectIsSegmentInitialized,
  selectIsSegmentNodeInitialized,
} from "dataflows/EventTracking/EventTrackingSelectors";
import { trackEvent } from "utils/tracker";

import { Container } from "@chakra-ui/react";

/**
 * The MiCuentaConteiner component.
 * @returns {ReactElement} the component element.
 */
export const MiCuentaContainer = (): ReactElement => {
  const isAmplitudeInitialized = useSelector(selectIsAmplitudeInitialized);
  const isSegmentInitialized = useSelector(selectIsSegmentInitialized);
  const isSegmentNodeInitialized = useSelector(selectIsSegmentNodeInitialized);
  const dispatch = useDispatch();
  /**
   * handles OnOpen action login.
   * @returns {void}
   */
  const onOpenLoginFlow = () => {
    dispatch(onOpenAction({ onlyLoginSteps: true }));
    trackEvent(MI_CUENTA_INGRESAR_DATOS_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment]);
  };

  const miCuentaProps = {
    onOpenLoginFlow,
    isAmplitudeInitialized,
    isSegmentInitialized,
    isSegmentNodeInitialized,
  };

  return (
    <Container maxW="container.xl">
      <MiCuenta {...miCuentaProps} />
    </Container>
  );
};
