import { render, cleanup } from "@testing-library/react";
import { InfoMessageBox } from "./InfoMessageBox";
import { IInfoMessageBoxProps } from "./IInfoMessageBoxProps";

describe("InfoMessageBox Component", () => {
  let mock: IInfoMessageBoxProps;

  beforeEach(() => {
    mock = {
      message: "Testing Message",
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("InfoMessageBox should be render correctly", () => {
    const { container } = render(<InfoMessageBox {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Show message correctly", () => {
    const { getByText } = render(<InfoMessageBox {...mock} />);
    expect(getByText(/Testing Message/i).textContent).toBe(mock.message);
  });
});
