import { render, cleanup } from "@testing-library/react";
import { Checkmark } from "./CheckMark";
import { ICheckMarkProps } from "./ICheckMarkProps";

describe("Checkmark Component", () => {
  let mock: ICheckMarkProps;
  beforeEach(() => {
    mock = {
      size: "xxLarge",
      color: "#eaf7ee",
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("Checkmark should be render correctly", () => {
    const { container } = render(<Checkmark {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Custom size", () => {
    mock = {
      size: "small",
      color: "",
    };
    const { container } = render(<Checkmark {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
