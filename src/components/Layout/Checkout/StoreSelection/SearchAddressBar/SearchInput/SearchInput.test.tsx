import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import LeftArrow from "styled/icons/ArrowLeft";
import { IconSearch } from "styled/icons/Search";
import { ISearchInputProps } from "./ISearchInputProps";
import { SearchInput } from "./SearchInput";

describe("Render StoreConfirmation component", () => {
  let mock: ISearchInputProps;
  const onFocusIn = jest.fn();
  const onFocusOut = jest.fn();
  beforeEach(() => {
    mock = {
      value: "",
      isFocused: false,
      clearSearchProducts: jest.fn(),
      onFocusIn,
      onFocusOut,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("SearchInput should be rendered correctly", () => {
    const { container } = render(<SearchInput {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("On focus in should be called once", () => {
    render(<SearchInput {...mock} />);
    const input: HTMLInputElement = screen.getByPlaceholderText("Dirección, ciudad, código postal");
    fireEvent.focusIn(input);
    expect(onFocusIn).toBeCalledTimes(1);
  });

  test("On focus out should be called once", () => {
    render(<SearchInput {...mock} />);
    const input: HTMLInputElement = screen.getByPlaceholderText("Dirección, ciudad, código postal");
    fireEvent.focusIn(input);
    fireEvent.focusOut(input);
    expect(onFocusOut).toBeCalledTimes(1);
  });

  test("Left arrow should be in the document", () => {
    render(<SearchInput {...{ ...mock, value: "some value", isFocused: true }} />);
    const { container } = render(<LeftArrow />);
    expect(container).toBeInTheDocument();
  });

  test("Icon search should be in the document", () => {
    render(<SearchInput {...mock} />);
    const { container } = render(<IconSearch />);
    expect(container).toBeInTheDocument();
  });
});
