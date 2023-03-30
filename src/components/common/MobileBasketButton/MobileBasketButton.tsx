import { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import LeftArrow from "styled/icons/ArrowLeft";
import BasketIcon from "styled/icons/BasketIcon";
import { formatMoney } from "utils/currencyUtils";

import { position, Box, Center, Flex, Text } from "@chakra-ui/react";

import { IMobileBasketButton } from "./IMobileBasketButton";
import {
  BasketButton,
  GoToCHOContainer,
  QuantityBasketContainer,
  SubTotalContainer,
} from "./MobileBasketButton.styled";

/**
 * MobileBasketButton component
 * @param {IMobileBasketButton} props for MobileBasketButton component
 * @returns {ReactElement} the component element
 */
export const MobileBasketButton = (props: IMobileBasketButton): ReactElement => {
  const { onOpen, totalBasketItems, totalBasketPrice } = props;

  return (
    <Box position="fixed" bottom="0" zIndex="1" width="100%" p="14px">
      <BasketButton
        bg="#18AE11"
        height="50px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="39px"
        display="flex"
        alignItems="center"
        onClick={onOpen}
        cursor="pointer"
        data-testid="MobileBasketButton"
      >
        <QuantityBasketContainer>
          <Center padding="6px">
            <Text color="white" fontSize="18px" fontWeight="700">
              {totalBasketItems}
            </Text>
            <Box ml="4px">
              <BasketIcon />
            </Box>
          </Center>
        </QuantityBasketContainer>

        <Flex
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          textAlign="center"
          p="6px"
        >
          <SubTotalContainer>
            <Text color="white" fontSize="14px">
              Sub-Total <b>{formatMoney(totalBasketPrice, CURRENCY_NAME)}</b>
            </Text>
          </SubTotalContainer>

          <GoToCHOContainer>
            <Text color="white" fontSize="16px">
              <b>Realizar pedido</b>
            </Text>
            <Box ml="4px">
              <LeftArrow />
            </Box>
          </GoToCHOContainer>
        </Flex>
      </BasketButton>
    </Box>
  );
};
