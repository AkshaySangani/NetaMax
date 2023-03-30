import { ReactElement } from "react";

import { IconSearch } from "styled/icons/Search";
import XIcon from "styled/icons/XIcon";
import { LeftArrow } from "styled/icons/CheckoutFlow/findStoreWithMap/LeftArrow";

import {
  Box,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";

import { ISearchInputProps } from "./ISearchInputProps";

/**
 * The SearchInput component.
 * @param { ISearchInputProps } props the component props.
 * @returns { ReactElement } The SearchInput component.
 */
export const SearchInput = (props: ISearchInputProps): ReactElement => {
  const {
    onFocusIn,
    isFocused,
    onFocusOut,
    clearSearchProducts,
    onChange,
    value,
    disabled,
    userLocation,
  } = props;

  return (
    <>
      {!userLocation && (
        <Box paddingX="16px" marginTop="10px" backgroundColor="white" height="70px" zIndex="50">
          <Text fontWeight="800" fontSize="15px" color="#353535">
            Localiza tu ubicación
          </Text>
          <Text fontWeight="400" color="#7e7e7e" marginTop="3px" fontSize="15px">
            Escribe tu dirección o código postal para encontrar las tienditas cercanas a tu
            ubicación
          </Text>
        </Box>
      )}
      <Flex
        position="sticky"
        alignItems="center"
        top="-10px"
        width="100%"
        height="70px"
        backgroundColor="white"
        zIndex={50}
        paddingX="16px"
      >
        <InputGroup>
          <InputRightElement cursor="pointer" onClick={() => clearSearchProducts()}>
            {value !== "" && <XIcon width="14px" height="14px" fill="#3A3A3A" />}
          </InputRightElement>
          <Input
            disabled={disabled}
            placeholder="Dirección, ciudad, código postal"
            value={value}
            onChange={onChange}
            onFocus={onFocusIn}
            onBlur={onFocusOut}
            bg="white"
            rounded="full"
            _focus={{
              boxShadow: "0 0 1px 2px transparent",
            }}
          />
          <InputLeftElement cursor="pointer" onClick={() => clearSearchProducts()}>
            {isFocused || value !== "" ? <LeftArrow /> : <IconSearch />}
          </InputLeftElement>
        </InputGroup>
      </Flex>
    </>
  );
};
