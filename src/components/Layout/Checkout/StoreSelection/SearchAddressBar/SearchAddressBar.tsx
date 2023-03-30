import { ReactElement } from "react";

import { ISearchAddressBarProps } from "./ISearchAddressBarProps";
import { GlobalStyle, SearchBarContainer } from "./SearchAddressBar.styled";
import { SearchDropDown } from "./SearchDropDown/SearchDropDown";
import { SearchInput } from "./SearchInput/SearchInput";

/**
 * The SearchAddressBar component.
 * @param { ISearchAddressBarProps } props the component props.
 * @returns { ReactElement } The SearchAddressBar component.
 */
export const SearchAddressBar = (props: ISearchAddressBarProps): ReactElement => {
  const {
    ready,
    searchValue,
    status,
    data,
    handleSelectAddress,
    inputValue,
    handleSearch,
    clearSearch,
    isInputFocused,
    setIsInputFocused,
    userLocation,
    isAddressSelected,
  } = props;

  return (
    <SearchBarContainer>
      <GlobalStyle />
      <SearchInput
        disabled={!ready}
        value={inputValue}
        onChange={handleSearch}
        clearSearchProducts={clearSearch}
        isFocused={isInputFocused}
        onFocusIn={() => setIsInputFocused(true)}
        onFocusOut={() => setIsInputFocused(false)}
        userLocation={userLocation}
      />
      {searchValue !== "" && !isAddressSelected && (
        <SearchDropDown handleSelectAddress={handleSelectAddress} data={data} status={status} />
      )}
    </SearchBarContainer>
  );
};
