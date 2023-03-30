import { render, cleanup } from "@testing-library/react";
import { OrderTable } from "./OrderTable";
import { IOrderTableProps } from "./IOrderTable";

describe("OrderTable Component", () => {
  let mock: IOrderTableProps;

  beforeEach(() => {
    mock = {
      items: [
        {
          name: "Cigarros Pall Mall Mykonos",
          product_id: 460,
          quantity: 1,
          unit_price_incl_tax: 53.95,
        },
        {
          name: "Pasta Dental Colgate Triple Accion Original 50 M",
          product_id: 79,
          quantity: 2,
          unit_price_incl_tax: 13.5,
        },
      ],
      order_discount: 10,
      order_subtotal_excl_tax: 745.25,
      order_total: 735.25,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("OrderTable should be render correctly", () => {
    const { container } = render(<OrderTable {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Image should be render correctly if it's present in items array", () => {
    mock = {
      items: [
        {
          name: "Cigarros Pall Mall Mykonos",
          product_id: 460,
          quantity: 1,
          unit_price_incl_tax: 53.95,
          image: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002615_0.jpeg",
        },
        {
          name: "Pasta Dental Colgate Triple Accion Original 50 M",
          product_id: 79,
          quantity: 2,
          unit_price_incl_tax: 13.5,
          image: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002629_0.jpeg",
        },
      ],
      order_discount: 10,
      order_subtotal_excl_tax: 745.25,
      order_total: 735.25,
    };
    const { container } = render(<OrderTable {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
