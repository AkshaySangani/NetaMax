import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "./ProductCard";
import { IProductCardProps } from "./IProductCardProps";
import {
  PRODUCT_DISCOUNT,
  PRODUCT_MEGA_PROMO,
  PRODUCT_UNAVAILABLE,
  ADD_TO_CART_BUTTON_TEXT_UNAVAILABLE,
} from "constants/productConstants";

describe("Render ProductCard Component", () => {
  const props: IProductCardProps = {
    product: {
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
      deliveryDateId: 1,
      deliveryDateName: "Llega en un día",
      deliveryDateDisplayOrder: 1,
    },
    onProductClick: jest.fn(),
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
  };

  const deliveryDateTwo: IProductCardProps = {
    ...props,
    product: {
      ...props.product,
      deliveryDateId: 2,
      deliveryDateName: "Testing with DeliveryID 2",
    },
  };

  const deliveryDateThree: IProductCardProps = {
    ...props,
    product: {
      ...props.product,
      deliveryDateId: 3,
      deliveryDateName: "Testing with DeliveryID 3",
    },
  };

  const detailProps: IProductCardProps = {
    ...props,
    productDetail: true,
    qtyOnBasket: 2,
  };

  const megaPromoNoStock: IProductCardProps = {
    ...props,
    product: {
      ...props.product,
      status: PRODUCT_MEGA_PROMO,
      stockQuantity: 0,
    },
  };

  const megaPromoStock: IProductCardProps = {
    ...props,
    product: {
      ...props.product,
      status: PRODUCT_MEGA_PROMO,
      stockQuantity: 12,
    },
  };

  const discount: IProductCardProps = {
    ...props,
    product: {
      ...props.product,
      status: PRODUCT_DISCOUNT,
      stockQuantity: 2,
      price: "4.00",
      oldPrice: "10.00",
    },
    qtyOnBasket: 3,
  };

  const discountWithDetail: IProductCardProps = {
    ...props,
    product: {
      ...props.product,
      status: PRODUCT_DISCOUNT,
      stockQuantity: 2,
      price: "4.00",
      oldPrice: "10.00",
      images: ["https://picsum.photos/200"],
    },
    qtyOnBasket: 3,
    productDetail: true,
  };

  const productUnavailable: IProductCardProps = {
    ...props,
    product: {
      ...props.product,
      status: PRODUCT_UNAVAILABLE,
    },
  };

  const productNoStock: IProductCardProps = {
    ...props,
    product: {
      ...props.product,
      status: PRODUCT_UNAVAILABLE,
      stockQuantity: 0,
      manageInventoryMethodId: 1,
    },
  };

  test("ProductCard component should render propely without product detail", () => {
    const { container } = render(<ProductCard {...props} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("discount-box").childElementCount).toBe(1);
  });

  test("ProductCard component should render properly with product detail", () => {
    const { container } = render(<ProductCard {...detailProps} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("product-detail-container")).toBeTruthy();
  });

  test("ProductCard component (Mega Promo without Stock) should render properly", () => {
    const { container } = render(<ProductCard {...megaPromoNoStock} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("sku-badge")).toBeTruthy();
    expect(screen.getByTestId("product-tag").textContent).toMatch("MEGA PROMO");
  });

  test("ProductCard component (Mega Promo with detail and no stock) should render properly", () => {
    const { container } = render(<ProductCard {...megaPromoNoStock} productDetail />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("sku-badge-detail")).toBeTruthy();
    expect(screen.getByTestId("product-tag-discount").textContent).toMatch("MEGA PROMO");
  });

  test("ProductCard component (Mega Promo with detail and basket) should render properly", () => {
    const { container } = render(
      <ProductCard {...megaPromoNoStock} productDetail qtyOnBasket={3} />
    );
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("sku-badge-detail")).toBeTruthy();
    expect(screen.getByTestId("product-tag-discount").textContent).toMatch("MEGA PROMO");
  });

  test("ProductCard component (Mega Promo with detail and basket) should render properly", () => {
    const { container } = render(<ProductCard {...megaPromoNoStock} productDetail />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("sku-badge-detail")).toBeTruthy();
    expect(screen.getByTestId("product-tag-discount").textContent).toMatch("MEGA PROMO");
  });

  test("ProductCard component (Mega Promo with stock) should render properly", () => {
    const { container } = render(<ProductCard {...megaPromoStock} productDetail qtyOnBasket={3} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("sku-badge-detail")).toBeTruthy();
    expect(screen.getByTestId("product-tag-discount").textContent).toMatch("MEGA PROMO");
  });

  test("ProductCard component (discount) should render properly", () => {
    const { container } = render(<ProductCard {...discount} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("product-tag").textContent).toMatch("NETAHORRO");
    expect(screen.getByTestId("discount-box").childElementCount).toBe(2);
    expect(screen.getByTestId("sku-badge").childElementCount).toBe(1);
    expect(screen.getByTestId("discount-badge")).toBeTruthy();
    expect(screen.getByTestId("discount-badge-text").textContent).toMatch("60%");
  });

  test("ProductCard component (discount with Details) should render properly", () => {
    const { container } = render(<ProductCard {...discountWithDetail} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("product-detail-container")).toBeTruthy();
    expect(screen.getByTestId("sku-badge-detail")).toBeTruthy();
    expect(screen.getByTestId("discount-badge")).toBeTruthy();
  });

  test("ProductCard component (unavailabe with Details) should render properly", () => {
    const { container } = render(<ProductCard {...productUnavailable} productDetail />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("product-detail-container")).toBeTruthy();
    expect(screen.getByTestId("product-tag-discount").textContent).toMatch(
      "PRODUCTO NO DISPONIBLE POR EL MOMENTO"
    );
  });

  test("ProductCard component (unavailabe) should render properly", () => {
    const { container } = render(<ProductCard {...productUnavailable} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("product-container")).toBeTruthy();
    expect(screen.getByTestId("product-tag").textContent).toMatch("");
  });

  test("ProductCard component (unavailabe with no stock) should render properly", () => {
    const { container } = render(<ProductCard {...productNoStock} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("product-container")).toBeTruthy();
    expect(screen.getByTestId("product-tag").textContent).toMatch("");
    expect(screen.getByTestId("add-to-card-button").textContent).toMatch(
      ADD_TO_CART_BUTTON_TEXT_UNAVAILABLE
    );
  });

  test("ProductCard component (field deliveryDate)", () => {
    render(<ProductCard {...deliveryDateTwo} />);
    screen.getByText(/Testing with DeliveryID 2/i);
  });

  test("ProductCard component (field deliveryDate)", () => {
    render(<ProductCard {...deliveryDateThree} />);
    screen.getByText(/Testing with DeliveryID 3/i);
  });

  afterEach(() => {
    cleanup();
  });
});

describe("Test ProductCard Component", () => {
  const commonProps: IProductCardProps = {
    product: {
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
      fullDescription: "Testing description",
      deliveryDateId: 1,
      deliveryDateName: "Llega en un día",
      deliveryDateDisplayOrder: 1,
    },
    onProductClick: jest.fn(),
    addToCart: jest.fn(),
    removeFromCart: jest.fn(),
  };

  const noHandleStock: IProductCardProps = {
    ...commonProps,
    product: {
      ...commonProps.product,
      manageInventoryMethodId: 0,
      stockQuantity: 0,
    },
  };

  const inventoryIdHandle: IProductCardProps = {
    ...commonProps,
    product: {
      ...commonProps.product,
      manageInventoryMethodId: 4,
      stockQuantity: 0,
    },
  };

  const noInventoryMethodHandle: IProductCardProps = {
    ...commonProps,
    product: {
      ...commonProps.product,
      manageInventoryMethodId: 0,
    },
  };

  it("executes onProductClick when pressing the product button", () => {
    render(<ProductCard {...commonProps} />);
    fireEvent.click(screen.getByTestId("product-button"));
    expect(commonProps.onProductClick).toBeCalled();
  });

  it("excute addToCard when there's no stock", () => {
    render(<ProductCard {...noHandleStock} />);
    fireEvent.click(screen.getByTestId("add-to-card-button"));
    expect(commonProps.addToCart).toBeCalled();
  });

  it("tries to excute addToCard when there's no stock but has an manageInventoryMethodId", () => {
    render(<ProductCard {...inventoryIdHandle} />);
    fireEvent.click(screen.getByTestId("add-to-card-button"));
    expect(commonProps.addToCart).not.toBeCalled();
  });

  it("excutes addToCard when there is no  manageInventoryMethodId", () => {
    render(<ProductCard {...noInventoryMethodHandle} />);
    fireEvent.click(screen.getByTestId("add-to-card-button"));
    expect(commonProps.addToCart).toBeCalled();
  });
});
