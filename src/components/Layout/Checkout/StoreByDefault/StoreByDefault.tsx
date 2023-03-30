import React, { ReactElement } from "react";

import IconStoreDefault from "styled/icons/CheckoutFlow/StoreDefault";

import { Box, Text } from "@chakra-ui/react";

import { IStoreByDefaultProps } from "./IStoreByDefaultProps";

/**
 * The StoreByDefault component
 * @param {IStoreByDefaultProps} props the component props
 * @returns {ReactElement}  the component.
 */
export const StoreByDefault = (props: IStoreByDefaultProps): ReactElement => {
  const { store } = props;

  return (
    <Box align="center" mt="20%">
      <Text mt="15px" fontSize="2xl" fontWeight="600">
        ¿Quieres recoger en esta tiendita?
      </Text>
      <Box mt="15px">
        <IconStoreDefault />
      </Box>
      <Text mt="15px" data-testid="storeName" fontSize="lg" fontWeight="600">
        {store?.name}
      </Text>
      <Text mt="5px" data-testid="storeAddress" fontSize="md">
        {store?.companyAddress}
      </Text>
    </Box>
  );
};
