import { cleanup, render, screen } from "@testing-library/react";
import { PurchaseSummary } from "./PurchaseSummary";
import { IPurchaseSummaryProps } from "./IPurchaseSummaryProps";
import { ICoupon } from "../../../../dataflows/Checkout/ICoupon";
import { FieldError } from "react-hook-form";

describe("PurchaseSummary component test", () => {
  let mockSuccess: IPurchaseSummaryProps;
  let mockReview: IPurchaseSummaryProps;
  const couponCode: FieldError = { type: "a" };
  const mockedErrors = {
    couponCode,
  };
  const mockedCoupon: ICoupon = {
    id: "1",
    name: "My Coupon",
    discountAmount: "10",
    discountPercentage: "0",
  };
  beforeEach(() => {
    mockSuccess = {
      discountAmount: 10,
      totalAmount: 30,
      totalNetPrice: 60,
      walletAmount: 20,
      coupon: [mockedCoupon],
      payWithMonetas: true,
    };
    mockReview = {
      ...mockSuccess,
      handleCouponVisible: jest.fn(),
      errors: mockedErrors,
      register: jest.fn(),
      fetchCode: jest.fn(),
      couponInputVisible: true,
      isCheckingCoupon: false,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("PurchaseSummary should be rendered correctly", () => {
    const { container } = render(<PurchaseSummary {...mockSuccess} />);
    expect(container).toMatchSnapshot();
  });

  test("PurchaseTotalAmount should be in the document for success scenario", () => {
    render(<PurchaseSummary {...mockSuccess} />);
    expect(screen.getByText(`$${mockSuccess.totalAmount}.00`)).toBeInTheDocument();
  });

  test("PurchaseTotalAmount should be in the document for review scenario", () => {
    render(<PurchaseSummary {...mockReview} />);
    expect(screen.getByText(`$${mockReview.totalAmount}.00`)).toBeInTheDocument();
  });

  test("PurchaseTotalAmount should be in the document for review scenario", () => {
    render(<PurchaseSummary {...mockSuccess} />);
    const input = screen.queryByPlaceholderText("Escribe aqui tu cupón");
    expect(input).toBeNull();
  });

  test("PurchaseTotalAmount should be in the document for success scenario", () => {
    render(<PurchaseSummary {...mockSuccess} />);
    expect(screen.getByText(`- $${mockSuccess.walletAmount}.00`)).toBeInTheDocument();
  });
});
