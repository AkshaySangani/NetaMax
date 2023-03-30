import { render, cleanup } from "@testing-library/react";
import { ProductGrid } from "./ProductGrid";
import { IProductGridProps } from "./IProductGridProps";

describe("ProductGrid component", () => {
  let mock: IProductGridProps;

  beforeEach(() => {
    mock = {
      products: [
        {
          id: "xxxxx",
          name: "Testing product",
          sku: "xxxxx",
          images: [],
          createdOnUtc: new Date(),
          updatedOnUtc: new Date(),
          seoFilename: "xxxxx",
          price: "4.04",
          oldPrice: "4.04",
          orderMinimumQuantity: 1,
          orderMaximumQuantity: 2,
          categoryId: "xxxxx",
          stockQuantity: 10,
          manageInventoryMethodId: 1,
          fullDescription: "Testing Description",
        },
        {
          id: "xxxxx111",
          name: "Testing product1",
          sku: "xxxxx111",
          images: [],
          createdOnUtc: new Date(),
          updatedOnUtc: new Date(),
          seoFilename: "xxxxx1",
          price: "5.04",
          oldPrice: "5.04",
          orderMinimumQuantity: 3,
          orderMaximumQuantity: 4,
          categoryId: "xxxxx1",
          stockQuantity: 11,
          manageInventoryMethodId: 2,
          fullDescription: "Testing Description1",
        },
      ],
      onProductClick: jest.fn(),
      addToCart: jest.fn(),
      removeFromCart: jest.fn(),
      getQtyOnCart: jest.fn(),
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("ProductGrid should be render correctly", () => {
    const { container } = render(<ProductGrid {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("number of rendered elements match with the length of the testElements array", () => {
    const { queryAllByTestId } = render(<ProductGrid {...mock} />);
    expect(queryAllByTestId("product-container")).toHaveLength(mock.products.length);
  });
});
