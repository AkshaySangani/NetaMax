import React, { ReactElement } from "react";

import Moneta from "styled/icons/Moneta";
import MonetaFilled from "styled/icons/MonetaFilled";
import { screenSizes } from "styled/screen";
import { secondsToString, secondsToStringHour } from "utils/timeUtils";

import { useMediaQuery, Box, Button, Flex, Text } from "@chakra-ui/react";

import { CardLayout } from "../CardLayout/CardLayout";
import { IDiscoveryCardProps } from "./IDiscoveryCardProps";

/**
 * DiscoveryCard
 * @param {IDiscoveryCardProps} props component props
 * @returns {ReactElement} the react element to render.
 */
export const DiscoveryCard = (props: IDiscoveryCardProps): ReactElement => {
  const { coinClaimed, countDown, buttonAction, loading, cardDescription } = props;

  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  return (
    <CardLayout bannerText="Vuelve todos los días">
      <Flex
        p="0 12px"
        flexDirection={isDesktop ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        data-testid="discovery-card-content-wrapper"
      >
        <Flex
          w={isDesktop ? "140px" : "110px"}
          alignItems="center"
          justifyContent="center"
          marginRight={isDesktop ? "0" : "16px"}
          data-testid="discovery-card-icon-wrapper"
        >
          {!coinClaimed ? <Moneta /> : <MonetaFilled />}
        </Flex>
        <Flex flexDirection="column" justifyContent="center">
          <Box
            color="#FFF"
            fontWeight="700"
            fontSize={isDesktop ? "22px" : "17px"}
            textAlign={isDesktop ? "center" : "justify"}
            width={isDesktop ? "65%" : "100%"}
            alignSelf="center"
            data-testid="discovery-card-text"
          >
            {cardDescription}
          </Box>
          {coinClaimed && !isDesktop && (
            <Text
              color="#FFF"
              marginTop="4px"
              fontSize="13px"
              textAlign={isDesktop ? "center" : "justify"}
              data-testid="discovery-card-counter"
            >
              Disponibles en <b>{secondsToString(countDown)}</b>
            </Text>
          )}
        </Flex>
      </Flex>
      <Box p="28px 0">
        <Button
          onClick={buttonAction}
          disabled={countDown > 0}
          borderRadius="16px"
          h="56px"
          w="290px"
          backgroundColor="#FFF"
          color="#3870FF"
          _disabled={{ bgColor: "netaGray.300", cursor: "no-drop", color: "#FFF" }}
          _hover={{ bgColor: "none" }}
          isLoading={loading}
          data-testid="discovery-card-button"
        >
          {countDown > 0
            ? `Regresa por más monetas en ${secondsToStringHour(countDown)}`
            : "¡Quiero mis monetas de HOY!"}
        </Button>
      </Box>
    </CardLayout>
  );
};
