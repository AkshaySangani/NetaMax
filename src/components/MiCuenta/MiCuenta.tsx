import { useEffect, ReactElement } from "react";

import {
  MI_CUENTA_ERES_NUEVO_CLICKED,
  MI_CUENTA_PAGE_VIEWED,
  TrackerApp,
} from "constants/amplitudeConstants";
import { useRouter } from "next/router";
import MisComprasBackground from "styled/icons/MiCuenta/MisComprasBanner";
import Neti from "styled/icons/MiCuenta/Neti";
import SemiCircle from "styled/icons/MiCuenta/SemiCircle";
import SliderRightArrowStrongIcon from "styled/icons/SliderRightArrowStrongIcon";
import { screenSizes } from "styled/screen";
import { trackEvent } from "utils/tracker";

import { useMediaQuery, Box, Button, Circle, Heading, Image, Text } from "@chakra-ui/react";

import {
  EresNuevoBottomContent,
  EresNuevoCardContainer,
  MisComprasBottomContent,
  MisComprasCardContainer,
  MiCuentaContainer,
} from "./MiCuenta.styled";
import { IMiCuentaProps } from "./MiCuentaProps";

/**
 * The MiCuenta component.
 * @param {IMiCuentaProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const MiCuenta = (props: IMiCuentaProps): ReactElement => {
  const {
    onOpenLoginFlow,
    isAmplitudeInitialized,
    isSegmentInitialized,
    isSegmentNodeInitialized,
  } = props;
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  const router = useRouter();

  useEffect(() => {
    if (isAmplitudeInitialized && isSegmentInitialized && isSegmentNodeInitialized) {
      trackEvent(MI_CUENTA_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [isAmplitudeInitialized, isSegmentInitialized, isSegmentNodeInitialized]);

  /**
   * Component for Eres Nuevo card.
   * @returns {ReactElement} the Eres Nuevo card element.
   *
   */
  const CardEresNuevo = (): ReactElement => {
    /**
     * Track event Eres Nuevo button
     * @returns {any}
     *
     **/
    const eresNuevoOnClick = () => {
      router.push("/");
      const Global: any = global;
      Global.LOU.startTour("211602873415", false);
      trackEvent(MI_CUENTA_ERES_NUEVO_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    };

    return (
      <Box display="flex" flexDirection="column" marginTop="-38px">
        <Box position="relative" top="60px" display="flex" justifyContent="center">
          <Neti />
        </Box>

        <EresNuevoCardContainer>
          <Box
            mt="32px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            alignContent="flex-start"
            flexDirection="column"
          >
            <Heading data-testid="eres-nuevo-card" fontWeight="800" fontSize="24px">
              ¡Hola!
            </Heading>

            <Text mt="6px">Ingresa tus datos para acceder a tu cuenta</Text>

            <Box mt="6px">
              <Button
                width="128px"
                borderRadius="20px"
                height="34px"
                colorScheme="netaBlue"
                fontSize="14px"
                fontWeight="700"
                lineHeight="20px"
                onClick={() => onOpenLoginFlow()}
                data-testid="login-button"
              >
                Ingresar datos
              </Button>
            </Box>
          </Box>

          <Box>
            <Box position="relative">
              <SemiCircle />
            </Box>
            <EresNuevoBottomContent>
              <Image
                width={isDesktop ? "110px" : "90px"}
                src="/assets/images/icons/fest-icon.png"
              />

              <Box display="flex" flexDirection="column" marginTop="0px" justifyContent="center">
                <Heading fontWeight="800" fontSize="20px" color="#FFF">
                  ¿Eres Nuevo?
                </Heading>

                <Text fontWeight="400" fontSize="14px" color="#FFF">
                  Conoce los beneficios que tenemos para ti!
                </Text>
              </Box>

              <Box
                m="0 14px"
                display="flex"
                flexDirection="column"
                marginTop="0px"
                justifyContent="center"
              >
                <Circle size="46px" bg="#FFF" cursor="pointer" onClick={() => eresNuevoOnClick()}>
                  <SliderRightArrowStrongIcon fill="#3870FF" />
                </Circle>
              </Box>
            </EresNuevoBottomContent>
          </Box>
        </EresNuevoCardContainer>
      </Box>
    );
  };

  /**
   * Component for Mis compras card.
   * @returns {ReactElement} the Mis Compras card element.
   *
   */
  const CardMisCompras = (): ReactElement => {
    return (
      <Box display="flex" flexDirection="column" marginTop="12px">
        <MisComprasCardContainer>
          <Box>
            <Box position="relative">
              <MisComprasBackground />
            </Box>
            <MisComprasBottomContent>
              <Image
                width={isDesktop ? "110px" : "90px"}
                src="/assets/images/icons/carrito-miscompras-ilu.png"
              />

              <Box display="flex" flexDirection="column" marginTop="0px" justifyContent="center">
                <Heading
                  fontWeight="800"
                  fontSize="20px"
                  color="#5438FF"
                  data-testid="mis-compras-card"
                >
                  Mis compras
                </Heading>

                <Text fontWeight="400" fontSize="14px" color="#4A4A4A">
                  Revisa tu historial
                </Text>
              </Box>

              <Box
                m="0 14px"
                display="flex"
                flexDirection="column"
                marginTop="0px"
                justifyContent="center"
              >
                <Circle
                  size="46px"
                  bg="#FFF"
                  cursor="pointer"
                  onClick={() => router.push("/mi-cuenta/mis-compras/")}
                >
                  <SliderRightArrowStrongIcon fill="#3870FF" />
                </Circle>
              </Box>
            </MisComprasBottomContent>
          </Box>
        </MisComprasCardContainer>
      </Box>
    );
  };

  return (
    <MiCuentaContainer>
      {CardEresNuevo()}
      {CardMisCompras()}
    </MiCuentaContainer>
  );
};
