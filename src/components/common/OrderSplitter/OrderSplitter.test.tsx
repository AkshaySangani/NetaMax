import { render, screen } from "@testing-library/react";
import { IOrderSplitterProps } from "./IOrderSplitterProps";
import { OrderSplitter } from "./OrderSplitter";

describe("Order Splitter Component", () => {
  const onLoadPreviousStep = jest.fn();

  const mock: IOrderSplitterProps = {
    basketItems: [
      {
        categoryId: "3",
        deliveryDateDisplayOrder: 1,
        deliveryDateId: 1,
        deliveryDateName: "Test deliveryDateName",
        id: "106",
        manageInventoryMethodId: 1,
        maxQuantity: 15,
        minQuantity: 1,
        name: "Mayonesa McCormick con jugo de limon 390 gr",
        oldPrice: 37.5,
        pictureUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0003399_0.webp",
        price: 32.9,
        quantity: 1,
        sku: "0000000000097",
        stockQuantity: 558,
      },
    ],
    loadPreviousStep: onLoadPreviousStep,
  };

  it("Should render Component OrderSplitter", () => {
    render(<OrderSplitter {...mock} />);
  });

  it("Should render Component OrderSplitter oneDay", () => {
    render(<OrderSplitter {...mock} />);
    screen.getByText(/Test deliveryDateName/i);
  });
});
