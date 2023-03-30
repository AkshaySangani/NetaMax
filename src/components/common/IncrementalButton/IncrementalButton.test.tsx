import { render, cleanup, fireEvent } from "@testing-library/react";
import { IncrementalButton } from "./IncrementalButton";
import { IIncrementalButtonProps } from "./IIncrementalButtonProps";

describe("IncrementalButton Component", () => {
  const onAdd = jest.fn();
  const onSubtract = jest.fn();
  let mock: IIncrementalButtonProps;

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

  test("IncrementalButton should be render correctly", () => {
    const { container } = render(<IncrementalButton {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Add button should working properly", () => {
    const { getByLabelText, getByTestId } = render(<IncrementalButton {...mock} />);
    fireEvent.click(getByLabelText("add"));
    expect(getByTestId("counter")).toHaveValue("1");
    expect(onAdd).toBeCalledTimes(1);
  });

  test("Substract button should working properly", () => {
    const { getByLabelText } = render(<IncrementalButton {...mock} />);
    fireEvent.click(getByLabelText("remove"));
    expect(onSubtract).toBeCalledTimes(1);
  });

  test("Render with default props", () => {
    const { getByLabelText, getByTestId } = render(<IncrementalButton {...mock} />);
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
      customHeight: "150px",
      customWidth: "200px",
      customBorderRadius: "200px",
      onSubtract,
      onAdd,
    };
    const { getByLabelText, getByTestId } = render(<IncrementalButton {...mock} />);
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
      customHeight: "150px",
      customWidth: "200px",
      customBorderRadius: "200px",
      onSubtract,
      onAdd,
    };
    const { getByLabelText, getByTestId } = render(<IncrementalButton {...mock} />);
    const input = getByTestId("counter");
    expect(input).toHaveValue("10");
    expect(getByLabelText("add")).toBeDisabled();
  });
});
