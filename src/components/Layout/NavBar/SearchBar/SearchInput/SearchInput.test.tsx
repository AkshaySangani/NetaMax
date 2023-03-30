import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { SearchInput } from "./SearchInput";
import { ISearchInputProps } from "./ISearchInputProps";

describe("SearchInput Component", () => {
  let mock: ISearchInputProps;

  beforeEach(() => {
    mock = {
      onFocusIn: jest.fn(),
      onChange: jest.fn(),
      onFocusOut: jest.fn(),
      clearSearchProducts: jest.fn(),
      value: "",
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("SearchInput should be render correctly", () => {
    const { container } = render(<SearchInput {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("clearSearchProducts function should be working properly", () => {
    const { getByTestId } = render(<SearchInput {...mock} />);
    fireEvent.click(getByTestId("clear button"));
    expect(mock.clearSearchProducts).toBeCalled();
  });

  test("value should be present in document", () => {
    render(<SearchInput {...mock} value={"test"} />);
    expect(screen.getByTestId("search-input")).toHaveValue("test");
  });
});
