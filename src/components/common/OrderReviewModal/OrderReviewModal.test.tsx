import { render, cleanup } from "@testing-library/react";
import { OrderReviewModal } from "./OrderReviewModal";
import { IOrderReviewModalProps } from "./IOrderReviewModalProps";

describe("OrderReviewModal component", () => {
  let mock: IOrderReviewModalProps;

  beforeEach(() => {
    mock = {
      productsOrder: [
        {
          name: "Cigarros Pall Mall Mykonos",
          id: "460",
          quantity: "1",
          price: "75",
          seoFilename: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002615_0.jpeg",
        },
        {
          name: "Pasta Dental Colgate Triple Accion Original 50 M",
          id: "467",
          quantity: "1",
          price: "75",
          seoFilename: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002629_0.jpeg",
        },
      ],
      orderSubtotalInclTax: 150.78,
      isOpen: false,
      onClose: jest.fn(),
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("OrderReviewModal should be render correctly", () => {
    const { container } = render(<OrderReviewModal {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
