import { render } from "@testing-library/react";
import { OrderCard } from "./OrderCard";

describe("Render OrderCard component", () => {
  it("MisCompras should be render correctly with orders", () => {
    const { container } = render(
      <OrderCard
        date={new Date("December 17, 1995 13:24:00")}
        orderId="207349"
        orderStatusId="10"
        totalAmount={359}
        productImages={["leche.jpg"]}
        totalProducts={10}
        storeName="Tienda Leo QA"
        pickUpToken={123123}
      />
    );
    expect(container).toMatchSnapshot();
  });
});
