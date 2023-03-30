import { cleanup, render, screen } from "@testing-library/react";
import { MisCompras } from "./MisCompras";

const loadNextPage = jest.fn();

describe("Render MisCompras component", () => {
  it("MisCompras should be render correctly with no orders and a tutorial video", () => {
    const { container } = render(
      <MisCompras hasMoreOrders={false} loadNextPage={loadNextPage} orders={[]} />
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("tutorial-message").textContent).toMatch("No tienes compras aún :(");
    expect(screen.getByTestId("redirect-button")).toBeTruthy();
    expect(screen.getByTestId("redirect-button").textContent).toMatch("Ir a comprar");
  });

  it("MisCompras should be render correctly with orders", () => {
    const { container } = render(
      <MisCompras
        hasMoreOrders={false}
        loadNextPage={loadNextPage}
        orders={[
          {
            id: "1",
            orderStatusId: "1",
            shippingStatusId: "1",
            currentETA: "2022-03-23T18:00:00.000Z",
            orderTotal: "20",
            storeName: "Abarrotes",
            pickUpToken: 123123,
            productOrders: {
              total: 1,
              products: [
                {
                  id: "1",
                  name: "Leche",
                  seoFilename: "leche.jpg",
                },
              ],
            },
          },
          {
            id: "2",
            orderStatusId: "2",
            shippingStatusId: "2",
            currentETA: "2022-03-24T18:00:00.000Z",
            orderTotal: "20",
            storeName: "Abarrotes Tienda leo",
            pickUpToken: 123123,
            productOrders: {
              total: 1,
              products: [
                {
                  id: "2",
                  name: "Coca",
                  seoFilename: "leche.jpg",
                },
              ],
            },
          },
        ]}
      />
    );
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
