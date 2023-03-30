import { render, cleanup, screen } from "@testing-library/react";
import { MisComprasDetail } from "./MisComprasDetail";
import { IMisComprasDetailProps } from "./IMisComprasDetailProps";

describe("MisComprasDetail Component", () => {
  let mock: IMisComprasDetailProps;

  beforeEach(() => {
    mock = {
      order: {
        id: "1",
        orderStatusId: "1",
        currentETA: "2022-03-23T18:00:00.000Z",
        productsOrder: [],
        orderTotal: 20,
        orderSubtotalInclTax: 250,
        orderDiscount: 40,
        companyAddress: "xxx xxxx xxxxx",
        companyPhoneNumber: "1234567890",
        name: "Test",
      },
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("MisComprasDetail should be render correctly", () => {
    const { container } = render(<MisComprasDetail {...mock} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Detalle del pedido")).toBeInTheDocument();
    expect(screen.getByText(mock.order.name)).toBeInTheDocument();
    expect(screen.getByText(mock.order.companyAddress)).toBeInTheDocument();
    expect(screen.getByText("Tu pedido se entregará en:")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      `https://api.whatsapp.com/send?phone=52${mock.order.companyPhoneNumber}&text=¡Hola!%20Tengo%20una%20consulta,%20mi%20numero%20de%20orden%20es:%20${mock.order.id}`
    );
  });

  test("MisComprasDetail should be render correctly with status PROCESSING", () => {
    mock.order.orderStatusId = "30";
    const { container } = render(<MisComprasDetail {...mock} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Tu pedido se entregó en:")).toBeInTheDocument();
  });

  test("MisComprasDetail should be render correctly with status PROCESSING", () => {
    mock.order.orderStatusId = "40";
    const { container } = render(<MisComprasDetail {...mock} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Tu pedido fue cancelado")).toBeInTheDocument();
  });

  test("MisComprasDetail should be render correctly with status REPROGRAMMED", () => {
    mock.order.orderStatusId = "50";
    const { container } = render(<MisComprasDetail {...mock} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText("Tu pedido fue reprogramado")).toBeInTheDocument();
  });

  test("Descuentos should not be present in DOM if orderDiscount will be 0", () => {
    mock.order.orderDiscount = 0;
    const { container } = render(<MisComprasDetail {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("MisComprasDetail should be render correctly with productOrder array", () => {
    mock.order.productsOrder = [
      {
        id: "xxxxx",
        name: "Testing product",
        sku: "xxxxx",
        quantity: "5",
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
        quantity: "5",
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
    ];
    const { container } = render(<MisComprasDetail {...mock} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByText(`${mock.order.productsOrder.length} productos`)).toBeInTheDocument();
  });
});
