import React, { ReactElement } from "react";

import IconCaretRight from "styled/icons/CheckoutFlow/CaretRight";
import IconOrangeStore from "styled/icons/CheckoutFlow/OrangeStore";
import IconPersonWalking from "styled/icons/CheckoutFlow/PersonWalking";
import { roundDistance } from "utils/stringUtils";

import { Box, Flex, Text } from "@chakra-ui/react";

import { INearestStoreProps } from "./INearestStoreProps";

/**
 * The NearestStore component.
 * @param {INearestStoreProps} props the nearest store component props.
 * @returns {ReactElement} the NearestStore component.
 */
export const NearestStore = (props: INearestStoreProps): ReactElement => {
  const {
    id,
    name,
    companyName,
    url,
    companyPhoneNumber,
    companyAddress,
    storeDistance,
    hosts,
    onStoreClick,
  } = props;
  const store = { id, name, companyAddress, url, hosts, companyName, companyPhoneNumber };

  return (
    <Box
      mt="2"
      mb="2"
      backgroundColor="#FEF5EC"
      border="1px solid #FFD4AA"
      borderRadius="14px"
      w="100%"
      data-testid="nearStoreButton"
      cursor="pointer"
      as="button"
      pt="1"
      pb="1"
      onClick={() => onStoreClick(store)}
    >
      <Flex alignItems="center" justifyContent="center">
        <Box pt="18px" mr="14px" ml="10px" h="80px">
          <IconOrangeStore />
        </Box>
        <Box w="80%" textAlign="left">
          <Text fontWeight="700" color="black" fontSize={{ base: "20px", md: "20px", lg: "20px" }}>
            {name}
          </Text>
          <Box mr="10px">
            <Text fontSize={{ base: "13px", md: "16px", lg: "18px" }} color="#464646">
              {companyAddress}
            </Text>
          </Box>
          <Flex mt="6px">
            <IconPersonWalking />
            <Text fontSize={{ base: "13px", md: "12px", lg: "13px" }} color="#464646">
              {roundDistance(storeDistance)}
            </Text>
          </Flex>
        </Box>
        <Box mr="10px">
          <IconCaretRight />
        </Box>
      </Flex>
    </Box>
  );
};
