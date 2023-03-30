import { ReactElement } from "react";

import IconDeliveryBasket from "styled/icons/Shops/PickUp/DeliveryBasket";

import { Box, Center, Flex, Text } from "@chakra-ui/react";

import { DeliverButton } from "./DeliverOrderButton.styled";
import { IDeliverOrderButtonProps } from "./IDeliverOrderButtonProps";

/**
 * The Deliver Order Button
 * @param {IDeliverOrderButtonProps} props for DeliverOrderButton component
 * @returns {ReactElement} The Deliver Order Button
 */
export const DeliverOrderButton = (props: IDeliverOrderButtonProps): ReactElement => {
  const { onOpen } = props;

  return (
    <Box p="16px" bottom="0" left="0" width="100%">
      <DeliverButton
        onClick={onOpen}
        height="48px"
        display="flex"
        alignItems="center"
        cursor="pointer"
      >
        <Center>
          <Flex justifyContent="space-between" alignItems="center" width="100%" textAlign="center">
            <Box mr="19px">
              <IconDeliveryBasket />
            </Box>
            <Text fontWeight="600">Entregar pedido</Text>
          </Flex>
        </Center>
      </DeliverButton>
    </Box>
  );
};
