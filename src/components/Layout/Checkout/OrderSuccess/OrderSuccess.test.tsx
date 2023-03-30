import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import { OrderSuccess } from "./OrderSuccess";
import { IOrderSuccessProps } from "./IOrderSuccessProps";
import { ASSISTANCE_PHONE_NUMBER } from "constants/checkoutConstants";

describe("OrderSuccess Component", () => {
  const onReferralShareButtonClick = jest.fn();
  let mock: IOrderSuccessProps;

  beforeEach(() => {
    mock = {
      shareDiscountCodeText: "COUPENCODE",
      onReferralShareButtonClick,
      showCoinAwardedCard: true,
      formattedPhone: "1111111111",
      partialSumSuccess: 60,
      couponSumSuccess: 10,
      monetasSumSuccess: 20,
      totalSumSuccess: 30,
      payWithMonetas: true,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("OrderSuccess should be render correctly", () => {
    const { container } = render(<OrderSuccess {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Invitar amigos button working properly", () => {
    const { getByText } = render(<OrderSuccess {...mock} />);
    fireEvent.click(getByText("Invitar amigos"));
    expect(onReferralShareButtonClick).toBeCalledTimes(1);
  });

  test("Link should be render properly", () => {
    render(<OrderSuccess {...mock} />);
    expect(screen.getByText("Necesito ayuda con mi pedido").closest("a")).toHaveAttribute(
      "href",
      `https://wa.me/${ASSISTANCE_PHONE_NUMBER}`
    );
  });
});
