import { render, cleanup } from "@testing-library/react";
import { SearchBar } from "./SearchBar";
import { ISearchBarProps } from "./ISearchBarProps";

describe("Render SearchBar component", () => {
  let mock: ISearchBarProps;

  beforeEach(() => {
    mock = {
      value: "Search",
      products: [],
      onAddToBasketClick: jest.fn(),
      getQtyInBasket: jest.fn(),
      onChange: jest.fn(),
      onFocusIn: jest.fn(),
      onFocusOut: jest.fn(),
      onRemoveFromBasketClick: jest.fn(),
      isLoadingSearchProduct: false,
      clearSearchProducts: jest.fn(),
      handleSearchProducts: jest.fn(),
      emptySearchMessage: "Empty search message",
      hasMoreProducts: false,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("SearchBar should be render correctly", () => {
    const { container } = render(<SearchBar {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
