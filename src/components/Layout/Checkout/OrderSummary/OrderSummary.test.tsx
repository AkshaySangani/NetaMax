import { render, cleanup } from "@testing-library/react";
import { OrderSummary } from "./OrderSummary";
import { IOrderSummaryProps } from "./IOrderSummaryProps";

describe("OrderSummary Component", () => {
  let mock: IOrderSummaryProps;

  beforeEach(() => {
    mock = {
      totalDiscountPrice: 50,
      totalNetPrice: 1000,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("OrderSummary should be render correctly", () => {
    const { container } = render(<OrderSummary {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Total price should be 0 if the totalNetPrice is 0", () => {
    mock = {
      totalDiscountPrice: 50,
      totalNetPrice: 0,
    };
    const { container } = render(<OrderSummary {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
