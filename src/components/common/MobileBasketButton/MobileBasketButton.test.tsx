import { render, cleanup, fireEvent } from "@testing-library/react";
import { MobileBasketButton } from "./MobileBasketButton";
import { IMobileBasketButton } from "./IMobileBasketButton";

describe("MobileBasketButton component", () => {
  let mock: IMobileBasketButton;

  beforeEach(() => {
    mock = {
      totalBasketPrice: 150,
      totalBasketItems: 3,
      onOpen: jest.fn(),
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("MobileBasketButton should be render correctly", () => {
    const { container, getByTestId } = render(<MobileBasketButton {...mock} />);
    expect(container).toMatchSnapshot();
    fireEvent.click(getByTestId("MobileBasketButton"));
    expect(mock.onOpen).toBeCalledTimes(1);
  });
});
