import { IOrderStatusProps } from "./IOrderStatus";
import { render, screen } from "@testing-library/react";
import { OrderStatus } from "./OrderStatus";

describe("Render OrderStatus component", () => {
  let mock: IOrderStatusProps;
  beforeEach(() => {
    mock = {
      status: "20",
    };
  });

  it("Render should component Orderstatus", () => {
    render(<OrderStatus {...mock} />);
  });

  it("Render should component Orderstatus Title PENDING", () => {
    mock.status = "10";
    render(<OrderStatus {...mock} />);
    screen.getByText(/Estamos alistando tu pedido:/);
  });

  it("Render should component Orderstatus Title PROCESSING", () => {
    mock.status = "20";
    render(<OrderStatus {...mock} />);
    screen.getByText(/Pedido en camino a tu tiendita:/);
  });

  it("Render should component Orderstatus Title COMPLETE", () => {
    mock.status = "30";
    render(<OrderStatus {...mock} />);
    screen.getByText(/Pedido entregado a la tiendita:/);
  });

  it("Render should component Orderstatus CANCELLED", () => {
    mock.status = "40";
    render(<OrderStatus {...mock} />);
    screen.getByText(/Pedido cancelado/);
  });

  it("Render should component Orderstatus REPROGRAMMED", () => {
    mock.status = "50";
    render(<OrderStatus {...mock} />);
    screen.getByText(/Pedido reprogramado/);
  });
});
