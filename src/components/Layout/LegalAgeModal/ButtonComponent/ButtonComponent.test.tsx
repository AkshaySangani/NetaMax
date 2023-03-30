import { render, fireEvent } from "@testing-library/react";
import { ButtonComponent } from "./ButtonComponent";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render ButtonComponent component", () => {
  it("ButtonComponent should be render correctly", () => {
    const { container } = render(<ButtonComponent label="test" onClick={() => null} />);
    expect(container).toMatchSnapshot();
  });

  it("ButtonComponent should on click, when click in button", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<ButtonComponent label="test" onClick={onClickMock} />);
    fireEvent.click(getByText("test"));
    expect(onClickMock).toBeCalledTimes(1);
  });
});
