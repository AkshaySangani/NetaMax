import { render, cleanup, fireEvent } from "@testing-library/react";
import { IncrementalBasketButton } from "./IncrementalBasketButton";
import { IIncrementalBasketButtonProps } from "./IIncrementalBasketButtonProps";

describe("BasketButton Component", () => {
  const onAdd = jest.fn();
  const onSubtract = jest.fn();
  let mock: IIncrementalBasketButtonProps;

  beforeEach(() => {
    mock = {
      min: 1,
      max: 10,
      defaultValue: 1,
      width: 115,
      customHeight: "150px",
      customWidth: "200px",
      customBorderRadius: "200px",
      onSubtract,
      onAdd,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("IncrementalBasketButton should be render correctly", () => {
    const { container } = render(<IncrementalBasketButton {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Add button should working properly", () => {
    const { getByTestId } = render(<IncrementalBasketButton {...mock} />);
    fireEvent.click(getByTestId("incremental-basket-button-add"));
    expect(getByTestId("counter")).toHaveValue("1");
    expect(onAdd).toBeCalledTimes(1);
  });

  test("Substract button should working properly", () => {
    const { getByLabelText } = render(<IncrementalBasketButton {...mock} />);
    fireEvent.click(getByLabelText("remove"));
    expect(onSubtract).toBeCalledTimes(1);
  });

  test("Render with default props", () => {
    const { getByLabelText, getByTestId } = render(<IncrementalBasketButton {...mock} />);
    const input = getByTestId("counter");
    expect(input).toHaveValue("1");
    expect(getByLabelText("add")).not.toBeDisabled();
  });

  test("Current value should calculate properly", () => {
    mock = {
      min: 1,
      max: 10,
      defaultValue: 9,
      width: 115,
      customHeight: "34px",
      customWidth: "133px",
      customBorderRadius: "24px",
      onSubtract,
      onAdd,
    };
    const { getByLabelText, getByTestId } = render(<IncrementalBasketButton {...mock} />);
    const input = getByTestId("counter");
    expect(input).toHaveValue("9");
    expect(getByLabelText("add")).not.toBeDisabled();
  });

  test("Add button should be disabled if the value exceed the max value.", () => {
    mock = {
      min: 1,
      max: 10,
      defaultValue: 10,
      width: 115,
      customHeight: "34px",
      customWidth: "133px",
      customBorderRadius: "24px",
      onSubtract,
      onAdd,
    };
    const { getByLabelText, getByTestId } = render(<IncrementalBasketButton {...mock} />);
    const input = getByTestId("counter");
    expect(input).toHaveValue("10");
    expect(getByLabelText("add")).toBeDisabled();
  });
});
