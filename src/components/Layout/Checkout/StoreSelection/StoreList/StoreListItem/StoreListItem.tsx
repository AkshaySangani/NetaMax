import { ReactElement } from "react";

import IconPersonWalking from "styled/icons/CheckoutFlow/PersonWalking";
import { roundDistance } from "utils/stringUtils";

import { Flex, Text } from "@chakra-ui/react";

import { IStoreListItemProps } from "./IStoreListItemProps";
import { StoreBox } from "./StoreListItem.styled";

/**
 * The StoreListItem component.
 * @param { IStoreListItemProps } props the component props.
 * @returns { ReactElement } The StoreListItem component.
 */
export const StoreListItem = (props: IStoreListItemProps): ReactElement => {
  const { store, handleSelectStore } = props;
  const { name, storeDistanceInMinutes, companyAddress } = store;

  return (
    <StoreBox onClick={() => handleSelectStore(store)}>
      <Text fontSize="16px" fontWeight="700">
        {name}
      </Text>
      <Flex alignItems="center">
        <IconPersonWalking color="#009DB5" />
        <Text fontSize="14px" color="#009DB5">
          Aprox {roundDistance(storeDistanceInMinutes)}
        </Text>
      </Flex>
      <Text fontSize="14px" color="#686868">
        {companyAddress}
      </Text>
    </StoreBox>
  );
};
