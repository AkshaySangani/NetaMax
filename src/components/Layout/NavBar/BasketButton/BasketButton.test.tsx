import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BasketButton } from "./BasketButton";
import { IBasketButtonProps } from "./IBasketButtonProps";

describe("BasketButton component", () => {
  let mock: IBasketButtonProps;
  const onClick = jest.fn();
  // const reference = React.createRef();
  // const ref = { current: { focus: jest.fn() } }

  beforeEach(() => {
    mock = {
      totalItems: 5,
      onClick,
      btnRef: React.createRef(),
    };
  });

  test("BasketButton should be render correctly", () => {
    const { container } = render(<BasketButton {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("totalItems should be present in the document", () => {
    render(<BasketButton {...mock} />);
    expect(screen.getByText(mock.totalItems)).toBeInTheDocument();
  });

  test("onClick should be working properly", () => {
    render(<BasketButton {...mock} />);
    fireEvent.click(screen.getByTestId("basket-button"));
    expect(mock.onClick).toBeCalled();
  });
});
