import { useEffect, useRef, FC, ReactElement } from "react";

import { ISearchBarProps } from "./ISearchBarProps";
import { GlobalStyle, SearchBarContainer } from "./SearchBar.styled";
import { SearchDropDown } from "./SearchDropDown/SearchDropDown";
import { SearchInput } from "./SearchInput/SearchInput";

/**
 * The SearchBar Component
 * @param {ISearchBarProps} props The component props
 * @returns {ReactElement} the searchBar component.
 */
export const SearchBar: FC<ISearchBarProps> = (props: ISearchBarProps): ReactElement => {
  const {
    value,
    products,
    onAddToBasketClick,
    getQtyInBasket,
    onChange,
    onFocusIn,
    onFocusOut,
    onRemoveFromBasketClick,
    isLoadingSearchProduct,
    clearSearchProducts,
    handleSearchProducts,
    emptySearchMessage,
    hasMoreProducts,
  } = props;

  const myRef = useRef<HTMLDivElement>(null);

  /**
   * Handle focusout
   * @param {any} e event
   * @returns {any} void
   */
  const handleClickOutside = (e: MouseEvent) => {
    if (!myRef?.current?.contains(e.target as Node)) {
      onFocusOut && onFocusOut(e as unknown as React.FocusEvent<HTMLInputElement>);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <SearchBarContainer ref={myRef}>
      <GlobalStyle />
      <SearchInput
        value={value}
        onChange={onChange}
        onFocusIn={onFocusIn}
        clearSearchProducts={clearSearchProducts}
      />
      <SearchDropDown
        value={value}
        clearSearchProducts={clearSearchProducts}
        products={products}
        onAddToBasketClick={onAddToBasketClick}
        onRemoveFromBasketClick={onRemoveFromBasketClick}
        getQtyInBasket={getQtyInBasket}
        isLoadingSearchProduct={isLoadingSearchProduct}
        handleSearchProducts={handleSearchProducts}
        emptySearchMessage={emptySearchMessage}
        hasMoreProducts={hasMoreProducts}
      />
    </SearchBarContainer>
  );
};
