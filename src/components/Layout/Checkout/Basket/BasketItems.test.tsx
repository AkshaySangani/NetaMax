import { render, cleanup } from "@testing-library/react";
import { BasketItems } from "./BasketItems";
import { ThemeProvider } from "@chakra-ui/react";
import { IBasketItemsProps } from "./IBasketItemsProps";
import theme from "utils/theme";

describe("BasketItems Component", () => {
  const onAddToBasket = jest.fn();
  const onRemoveFromBasket = jest.fn();

  let mock: IBasketItemsProps;

  beforeEach(() => {
    mock = {
      onAddToBasket,
      onRemoveFromBasket,
      basketItems: [
        {
          id: "831",
          name: "Leche Alpura deslactosada 1L",
          price: 20.3,
          oldPrice: 25,
          pictureUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0000946_0.png",
          minQuantity: 1,
          maxQuantity: 15,
          sku: "LYR0110005",
          categoryId: "70",
          quantity: 4,
          stockQuantity: 4,
          manageInventoryMethodId: 1,
          deliveryDateId: 1,
          deliveryDateName: "Llega en un dia",
          deliveryDateDisplayOrder: 1,
        },
        {
          id: "874",
          name: "Lomo de atun Dolores aleta amarilla en agua 133 gr",
          price: 15.4,
          oldPrice: 17.5,
          pictureUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0000965_0.png",
          minQuantity: 1,
          maxQuantity: 15,
          sku: "CAB0140037",
          categoryId: "73",
          quantity: 15,
          stockQuantity: 842,
          manageInventoryMethodId: 1,
          deliveryDateId: 1,
          deliveryDateName: "Llega en un dia",
          deliveryDateDisplayOrder: 1,
        },
        {
          id: "2123",
          name: "Nutri Leche Deslactosada 1 Lt",
          price: 19.2,
          oldPrice: 21.7,
          pictureUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002732_0.png",
          minQuantity: 1,
          maxQuantity: 15,
          sku: "LYR0110027",
          categoryId: "70",
          quantity: 10,
          stockQuantity: 5,
          manageInventoryMethodId: 0,
          deliveryDateId: 1,
          deliveryDateName: "Llega en un dia",
          deliveryDateDisplayOrder: 1,
        },
      ],
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("Basket should be render correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <BasketItems {...mock} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});

describe("Empty BasketItems Component", () => {
  const onAddToBasket = jest.fn();
  const onRemoveFromBasket = jest.fn();

  let mock: IBasketItemsProps;

  beforeEach(() => {
    mock = {
      onAddToBasket,
      onRemoveFromBasket,
      basketItems: [],
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("Basket should be render correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <BasketItems {...mock} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });
});
