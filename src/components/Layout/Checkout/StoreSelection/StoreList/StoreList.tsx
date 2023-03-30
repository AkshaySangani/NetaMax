import { ReactElement } from "react";

import { FaChevronDown, FaChevronUp } from "react-icons/fa";

import { IconSearch } from "styled/icons/Search";

import { Box, Flex, Input, InputGroup, InputLeftElement, Text } from "@chakra-ui/react";

import { IStoreListProps } from "./IStoreListProps";
import { AbsoluteDiv } from "./StoreList.styled";
import { StoreListItem } from "./StoreListItem/StoreListItem";

/**
 * The StoreList component.
 * @param { IStoreListProps } props the component props.
 * @returns { ReactElement } The StoreList component.
 */
export const StoreList = (props: IStoreListProps): ReactElement => {
  const {
    open,
    handleTopClick,
    address,
    stores,
    searchValue,
    onSearchValueChange,
    handleSelectStore,
    allNearestsAmount,
  } = props;

  return (
    <AbsoluteDiv open={open}>
      <Flex justifyContent="space-between">
        <Text fontWeight="800" fontSize="xl">
          {address}
        </Text>
        <Flex
          alignItems="center"
          color="#3A86FF"
          onClick={handleTopClick}
          mb="7px"
          cursor="pointer"
        >
          <Text decoration="underline">{open ? "Ver menos" : "Ver más"}</Text>
          <Box marginTop="2px" ml="4px">
            {open ? <FaChevronDown /> : <FaChevronUp />}
          </Box>
        </Flex>
      </Flex>
      <Text color="#5f5f5f" fontSize="14px">
        Selecciona una de las {allNearestsAmount} tienditas que están cerca
      </Text>
      <InputGroup marginTop="10px">
        <Input
          placeholder="Nombre de tienda"
          value={searchValue}
          onChange={(e) => {
            onSearchValueChange(e.target.value);
          }}
          size="md"
          bg="white"
          rounded="full"
          _focus={{
            boxShadow: "0 0 1px 2px transparent",
          }}
        />
        <InputLeftElement>
          <IconSearch />
        </InputLeftElement>
      </InputGroup>
      <Box overflow="scroll" marginTop="8px">
        {stores.length > 0 &&
          stores.map((store) => (
            <StoreListItem key={store.id} store={store} handleSelectStore={handleSelectStore} />
          ))}
      </Box>
    </AbsoluteDiv>
  );
};
