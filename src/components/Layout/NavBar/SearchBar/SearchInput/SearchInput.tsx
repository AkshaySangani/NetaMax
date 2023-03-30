import { useRef } from "react";

import { IconSearch } from "styled/icons/Search";
import XIcon from "styled/icons/XIcon";

import { Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";

import { ISearchInputProps } from "./ISearchInputProps";
import { StyledInputContainer } from "./SearchInput.styled";

/**
 * The SearchInput Component.
 * @param {ISearchInputProps} props the component props.
 * @returns {ReactElement} the searchInput component.
 */
export const SearchInput = (props: ISearchInputProps): React.ReactElement => {
  const { value, onChange, onFocusIn, clearSearchProducts } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <StyledInputContainer>
      <InputGroup>
        <InputRightElement
          data-testid="clear button"
          cursor="poiner"
          onClick={() => clearSearchProducts()}
        >
          <XIcon width="14px" height="14px" fill="#3A3A3A" />
        </InputRightElement>
        <Input
          placeholder="Qué antojo tienes hoy?"
          value={value}
          onChange={onChange}
          data-testid="search-input"
          onFocus={onFocusIn}
          ref={inputRef}
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
    </StyledInputContainer>
  );
};
