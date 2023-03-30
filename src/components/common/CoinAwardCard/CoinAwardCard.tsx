import React, { ReactElement } from "react";

import Coin1 from "styled/icons/CheckoutFlow/Coin1";
import Coin2 from "styled/icons/CheckoutFlow/Coin2";
import Coin3 from "styled/icons/CheckoutFlow/Coin3";
import Coin4 from "styled/icons/CheckoutFlow/Coin4";
import Coin5 from "styled/icons/CheckoutFlow/Coin5";

import { Box, Flex, Text } from "@chakra-ui/react";

import { ICoinAwardCardProps } from "./ICoinAwardCardProps";

/**
 *  Modal component that shows when completing the available challenges.
 * @param {ICoinAwardCardProps} props the component props
 * @returns {ReactElement} the card component
 */
export const CoinAwardCard = ({ coins }: ICoinAwardCardProps): ReactElement => {
  return (
    <Flex
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25), inset -22px -10px 71px rgba(116, 0, 0, 0.25);"
      background="radial-gradient(#418EDD, #2253C9)"
      borderRadius="12px"
      height="105px"
      alignItems="center"
      flexDirection="column"
      justifyContent="space-between"
      padding="6px 0 10px 0"
      position="relative"
      marginBottom="15px"
      width="327px"
    >
      <Box position="absolute" top="12px" left="13px">
        <Coin1 />
      </Box>
      <Box position="absolute" bottom="12px" left="17px">
        <Coin2 />
      </Box>
      <Box position="absolute" right="40px" top="12px">
        <Coin3 />
      </Box>
      <Box position="absolute" right="10px" bottom="5px">
        <Coin4 />
      </Box>
      <Coin5 />
      <Text fontSize="15px" fontWeight="700" color="#FFF" width="80%" textAlign="center">
        ¡GANASTE {coins} MONETAS EN ESTA COMPRA! 🎉
      </Text>
    </Flex>
  );
};
