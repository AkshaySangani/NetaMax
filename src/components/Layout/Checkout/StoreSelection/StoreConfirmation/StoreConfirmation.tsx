import { ReactElement } from "react";

import IconPersonWalking from "styled/icons/CheckoutFlow/PersonWalking";
import { roundDistance } from "utils/stringUtils";

import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { IStoreConfirmationProps } from "./IStoreConfirmationProps";

/**
 * The StoreConfirmation component.
 * @param { IStoreConfirmationProps } props the component props.
 * @returns { ReactElement } The StoreConfirmation component.
 */
export const StoreConfirmation = (props: IStoreConfirmationProps): ReactElement => {
  const { name, companyAddress } = props.store;
  const { handleChooseAnotherStore, handleStoreConfirmation, googleDistance } = props;

  return (
    <Box
      position="absolute"
      height="35%"
      bottom="0"
      left="0"
      width="100%"
      backgroundColor="white"
      padding={{ base: "16px", md: "30px" }}
    >
      <Text fontSize="16px" fontWeight="700">
        {name}
      </Text>
      <Flex alignItems="center" marginTop="5px" color="#009DB5">
        <IconPersonWalking color="#009DB5" />
        <Text fontSize="14px">Aprox {roundDistance(googleDistance)}</Text>
      </Flex>
      <Text marginTop="5px" fontSize="14px" color="#686868">
        {companyAddress}
      </Text>
      <Flex
        direction="column"
        position="absolute"
        bottom="0"
        left="0"
        width="100%"
        padding={{ base: "16px", md: "30px" }}
      >
        <Button
          marginTop="15px"
          _hover={{ backgroundColor: "none" }}
          _disabled={{ backgroundColor: "netaGray.500" }}
          colorScheme="netaBlue"
          textColor="white"
          width="100%"
          borderRadius="xl"
          fontSize="18px"
          onClick={handleStoreConfirmation}
          height="48px"
        >
          Elegir tienda
        </Button>
        <Flex alignItems="center" justifyContent="center" marginTop="10px">
          <Text
            onClick={handleChooseAnotherStore}
            color="#3870FF"
            fontSize="14px"
            fontWeight="700"
            cursor="pointer"
            decoration="underline"
          >
            Elegir otra tiendita
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
