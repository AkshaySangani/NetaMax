import React, { ReactElement } from "react";

import UbicationIcon from "styled/icons/Ubication";

import { Box, Flex, Text } from "@chakra-ui/react";

import { IStoreSelectorProps } from "./IStoreSelectorProps";

/**
 * The store selector component
 * @param {IStoreSelectorProps} props the props for the store selector
 * @returns {ReactElement} the store selector component.
 */
export const StoreSelector = (props: IStoreSelectorProps): ReactElement => {
  const { storeName, hasPadding, ...rest } = props;

  return (
    <Flex alignItems="center" pt={hasPadding ? "5px" : "0px"} justifyContent="flex-start" {...rest}>
      <Box padding="10px">
        <UbicationIcon />
      </Box>
      <Text
        variant="unstyled"
        fontWeight="700"
        color="white"
        fontSize={{ base: "16px", sm: "14px", md: "16px", lg: "18px" }}
      >
        Recoge en: {storeName}
      </Text>
    </Flex>
  );
};
