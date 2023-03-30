import { render, cleanup, screen } from "@testing-library/react";
import { OrderDetail } from "./OrderDetail";
import { IItem } from "dataflows/Shops/IItem";

describe("OrderDetail component", () => {
  let mock: IItem;

  beforeEach(() => {
    mock = {
      imageFormat: "image format",
      image: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0003878_0.webp",
      name: "Lampara de Uñas Uv-Led Sun Secado Rapido 54w",
      price: 149.0,
      imageFormat: "image format",
      qty: 1,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("OrderDetail should be render correctly", () => {
    const { container } = render(<OrderDetail {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Image should be render properly", () => {
    render(<OrderDetail {...mock} />);
    expect(screen.getByRole("img")).toHaveAttribute("src", mock.image);
  });

  test("Name should be render properly", () => {
    render(<OrderDetail {...mock} />);
    expect(screen.getByText(mock.name)).toBeInTheDocument();
  });
});
