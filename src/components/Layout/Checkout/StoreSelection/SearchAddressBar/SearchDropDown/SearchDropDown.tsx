import { ReactElement } from "react";

import { Loader } from "components/common/Loader";
import { AddressCirclePin } from "styled/icons/CheckoutFlow/findStoreWithMap/AddressCirlcePin";
import { ChevronRight } from "styled/icons/CheckoutFlow/findStoreWithMap/ChevronRight";

import { Box, Center, Flex, Text, VStack } from "@chakra-ui/react";

import { ISearchDropDownProps } from "./ISearchDropDownProps";
import { PLACES_STATUS_OK, PLACES_STATUS_ZERO_RESULTS } from "constants/checkoutConstants";

/**
 * The SearchDropDown component.
 * @param { ISearchDropDownProps } props the component props.
 * @returns { ReactElement } The SearchDropDown component.
 */
export const SearchDropDown = (props: ISearchDropDownProps): ReactElement => {
  const { data, status, handleSelectAddress } = props;

  return (
    <VStack width="100%" zIndex="10" backgroundColor="white" paddingX="16px">
      {status === PLACES_STATUS_OK ? (
        data.map((address, i) => (
          <Flex
            onClick={() =>
              handleSelectAddress(address.description, address.structured_formatting.main_text)
            }
            marginTop="0px"
            borderBottom="1px solid rgba(0, 0, 0, .03)"
            paddingY="16px"
            width="100%"
            key={`${address.description}-${i}`}
            justifyContent="space-between"
            alignItems="center"
            cursor="pointer"
          >
            <Flex alignItems="center">
              <AddressCirclePin />
              <Flex marginLeft="8px" direction="column">
                <Flex>
                  <Text fontWeight="600" isTruncated maxWidth="280px">
                    {address.structured_formatting.main_text}
                  </Text>
                </Flex>
                <Text opacity="0.7" isTruncated maxWidth="280px">
                  {address.structured_formatting.secondary_text}
                </Text>
              </Flex>
            </Flex>
            <ChevronRight />
          </Flex>
        ))
      ) : status === PLACES_STATUS_ZERO_RESULTS ? (
        <Box textAlign="center" paddingY="16px">
          <Text fontWeight="600">No se encontraron resultados para la dirección ingresada</Text>
        </Box>
      ) : (
        <Center height="150px">
          <Loader size="md" delay={300} />
        </Center>
      )}
    </VStack>
  );
};
