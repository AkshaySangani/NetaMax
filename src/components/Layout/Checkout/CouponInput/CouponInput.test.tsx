import { cleanup, render, screen } from "@testing-library/react";
import { ICoupon } from "dataflows/Checkout/ICoupon";
import { CouponInput } from "./CouponInput";
import { ICouponInputProps } from "./ICouponInputProps";

describe("CouponInput component test", () => {
  let mock: ICouponInputProps;
  const couponMock: ICoupon[] = [
    {
      id: "1",
      name: "coupon",
      discountPercentage: "10",
      discountAmount: "10",
    },
  ];
  beforeEach(() => {
    const errors = {
      couponCode: undefined,
    };

    mock = {
      couponInputVisible: true,
      handleCouponVisible: jest.fn(),
      isCheckingCoupon: false,
      fetchCode: jest.fn(),
      errors,
      register: jest.fn(),
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("CouponInput should be rendered correctly", () => {
    const { container } = render(<CouponInput {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("CouponInput not showing in case couponInputVisible is false", () => {
    render(<CouponInput {...{ ...mock, couponInputVisible: false }} />);
    expect(screen.getByText("¿Tienes un cupón?")).toBeInTheDocument();
  });

  test("CouponInput showing input field with placeholder", () => {
    render(<CouponInput {...mock} />);
    expect(screen.getByPlaceholderText("Escribe aqui tu cupón")).toBeInTheDocument();
  });

  test("CouponInput not showing in case couponInputVisible is false", () => {
    render(<CouponInput {...{ ...mock, coupon: couponMock }} />);
    expect(screen.getByText("Quitar cupón")).toBeInTheDocument();
  });
});
