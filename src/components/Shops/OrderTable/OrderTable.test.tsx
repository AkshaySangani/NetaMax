import { render, cleanup } from "@testing-library/react";
import { OrderTable } from "./OrderTable";
import { IOrderTableProps } from "./IOrderTableProps";

describe("OrderTable Component", () => {
  let mock: IOrderTableProps;

  beforeEach(() => {
    mock = {
      subtotal: 735.25,
      discount: 20,
      total: 710.25,
      objects: [
        {
          name: "Cigarros Pall Mall Mykonos",
          qty: 1,
          image: "xxx",
          imageFormat: "png",
          price: 53.95,
        },
        {
          name: "Pasta Dental Colgate Triple Accion Original 50 M",
          qty: 2,
          image: "xxx",
          imageFormat: "png",
          price: 13.5,
        },
      ],
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
});
