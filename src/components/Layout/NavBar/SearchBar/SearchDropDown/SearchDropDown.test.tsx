import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import { IProduct } from "dataflows/Product/IProduct";
import { ISearchDropDownProps } from "./ISearchDropDownProps";
import { SearchDropDown } from "./SearchDropDown";

describe("SearchDropDown Component renders", () => {
  const clearSearchProducts = jest.fn();
  const onAddToBasketClick = jest.fn();
  const onRemoveFromBasketClick = jest.fn();
  const getQtyInBasket = jest.fn((product: IProduct) =>
    ["2426", "2427"].includes(product.id) ? 0 : 10
  );
  const handleSearchProducts = jest.fn();

  let mock: ISearchDropDownProps;

  beforeEach(() => {
    mock = {
      clearSearchProducts,
      onAddToBasketClick,
      onRemoveFromBasketClick,
      getQtyInBasket,
      handleSearchProducts,
      value: "A mocked search value",
      isLoadingSearchProduct: false,
      emptySearchMessage: "",
      hasMoreProducts: false,
      products: [
        {
          id: "2409",
          name: "Medias Noches 8 pz",
          sku: "DSP0010177",
          createdOnUtc: new Date("2022-02-22T16:20:47.000Z"),
          updatedOnUtc: new Date("2022-02-22T16:20:47.000Z"),
          images: [],
          seoFilename: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002737_0.png",
          price: "31.5000",
          oldPrice: "35.0000",
          orderMinimumQuantity: 1,
          orderMaximumQuantity: 15,
          pictureId: 2737,
          categoryId: "3",
          status: "Discount",
          manageInventoryMethodId: 1,
          stockQuantity: 10,
        },
        {
          id: "2425",
          name: "Pan integral Oroweat 12 granos 680 g",
          sku: "DSP0010181",
          createdOnUtc: new Date("2022-02-22T16:20:47.000Z"),
          updatedOnUtc: new Date("2022-02-22T16:20:47.000Z"),
          images: [],
          seoFilename: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002752_0.png",
          price: "47.5000",
          oldPrice: "57.0000",
          orderMinimumQuantity: 1,
          orderMaximumQuantity: 15,
          pictureId: 2752,
          categoryId: "3",
          status: "Discount",
          manageInventoryMethodId: 0,
          stockQuantity: 14,
        },
        {
          id: "2426",
          name: "Pan Integral Multigrano 680 gr",
          sku: "DSP0010182",
          createdOnUtc: new Date("2022-02-22T16:20:47.000Z"),
          updatedOnUtc: new Date("2022-02-22T16:20:47.000Z"),
          images: [],
          seoFilename: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002753_0.png",
          price: "47.5000",
          oldPrice: "57.0000",
          orderMinimumQuantity: 1,
          orderMaximumQuantity: 15,
          pictureId: 2753,
          categoryId: "3",
          status: "Discount",
          manageInventoryMethodId: 1,
          stockQuantity: 0,
        },
        {
          id: "2427",
          name: "1-2-3 Aceite Vegetal 1 Litro",
          sku: "DSP0010189",
          createdOnUtc: new Date("2022-02-22T16:20:47.000Z"),
          updatedOnUtc: new Date("2022-02-22T16:20:47.000Z"),
          images: [],
          seoFilename: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/0002753_0.png",
          price: "50.5000",
          oldPrice: "57.0000",
          orderMinimumQuantity: 1,
          orderMaximumQuantity: 15,
          pictureId: 2753,
          categoryId: "3",
          status: "Discount",
          manageInventoryMethodId: 0,
          stockQuantity: 0,
        },
      ],
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("SearchDropDown should be render correctly", () => {
    const { container } = render(<SearchDropDown {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("earch more button clicked", () => {
    render(<SearchDropDown {...mock} hasMoreProducts={true} />);
    fireEvent.click(screen.getByTestId("hasMoreProductsButton"));
    expect(mock.handleSearchProducts).toBeCalled();
  });

  test("Search more button should not be in the document", () => {
    render(<SearchDropDown {...mock} />);
    expect(screen.queryByTestId("hasMoreProductsButton")).not.toBeInTheDocument();
  });

  test("Search more button should be in the document", () => {
    render(<SearchDropDown {...mock} hasMoreProducts={true} />);
    expect(screen.getByTestId("hasMoreProductsButton")).toBeInTheDocument();
  });

  test("Add button should be disabled if there is no stock and manageInventoryMethodId is 1", () => {
    render(<SearchDropDown {...mock} />);
    fireEvent.click(screen.getByTestId("add-button-2426"));
    expect(mock.onAddToBasketClick).not.toBeCalled();
  });

  test("Add button should be enabled if there is no stock and manageInventoryMethodId is 0", () => {
    render(<SearchDropDown {...mock} />);
    fireEvent.click(screen.getByTestId("add-button-2427"));
    expect(mock.onAddToBasketClick).toBeCalled();
  });
});

describe("No Result SearchDropDown Component", () => {
  const clearSearchProducts = jest.fn();
  const onAddToBasketClick = jest.fn();
  const onRemoveFromBasketClick = jest.fn();
  const getQtyInBasket = jest.fn(() => 10);
  const handleSearchProducts = jest.fn();

  let mock: ISearchDropDownProps;

  beforeEach(() => {
    mock = {
      clearSearchProducts,
      onAddToBasketClick,
      onRemoveFromBasketClick,
      getQtyInBasket,
      handleSearchProducts,
      value: "This is not an empty search value",
      isLoadingSearchProduct: false,
      emptySearchMessage: "Sorry",
      hasMoreProducts: false,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("SearchDropDown should be render correctly", () => {
    const { container } = render(<SearchDropDown {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Search more button should not be in the document", () => {
    render(<SearchDropDown {...mock} />);
    expect(screen.queryByTestId("hasMoreProductsButton")).not.toBeInTheDocument();
  });
});

describe("Empty SearchDropDown Component", () => {
  const clearSearchProducts = jest.fn();
  const onAddToBasketClick = jest.fn();
  const onRemoveFromBasketClick = jest.fn();
  const getQtyInBasket = jest.fn(() => 10);
  const handleSearchProducts = jest.fn();

  let mock: ISearchDropDownProps;

  beforeEach(() => {
    mock = {
      clearSearchProducts,
      onAddToBasketClick,
      onRemoveFromBasketClick,
      getQtyInBasket,
      handleSearchProducts,
      value: "",
      isLoadingSearchProduct: false,
      emptySearchMessage: "",
      hasMoreProducts: false,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("SearchDropDown should be render correctly", () => {
    const { container } = render(<SearchDropDown {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("SearchDropDown should be render correctly", () => {
    const { container } = render(<SearchDropDown {...mock} value="ab" />);
    expect(container).toMatchSnapshot();
  });

  test("Search more button should not be in the document", () => {
    render(<SearchDropDown {...mock} value="ab" />);
    expect(screen.queryByTestId("hasMoreProductsButton")).not.toBeInTheDocument();
  });
});

describe("Loading SearchDropDown Component", () => {
  const clearSearchProducts = jest.fn();
  const onAddToBasketClick = jest.fn();
  const onRemoveFromBasketClick = jest.fn();
  const getQtyInBasket = jest.fn(() => 10);
  const handleSearchProducts = jest.fn();

  let mock: ISearchDropDownProps;

  beforeEach(() => {
    mock = {
      clearSearchProducts,
      onAddToBasketClick,
      onRemoveFromBasketClick,
      getQtyInBasket,
      handleSearchProducts,
      value: "test value",
      isLoadingSearchProduct: true,
      emptySearchMessage: "",
      hasMoreProducts: false,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("SearchDropDown should be render correctly", () => {
    const { container } = render(<SearchDropDown {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
