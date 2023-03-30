import { render, cleanup } from "@testing-library/react";
import { MisVentas } from "./MisVentas";
import { IMisVentasProps } from "./IMisVentasProps";

describe("MisVentas component", () => {
  let mock: IMisVentasProps;
  const onOrderDetailsClick = jest.fn();
  const onContactarCliente = jest.fn();
  const onClickCompartirLiga = jest.fn();
  const handleOnTrackClick = jest.fn();
  const handleOnInvoiceClick = jest.fn();
  const onClose = jest.fn();
  const onOpen = jest.fn();

  beforeEach(() => {
    mock = {
      orders: [
        {
          customerPickupDateAt: "2022-04-30T18:01:23.000Z",
          onContactarCliente,
          onOrderDetailsClick,
          pickedUpDateAt: "2022-04-30T16:01:23.000Z",
          phoneNumber: "5511194223",
          customerName: "Customer 1",
          qtyItems: 6,
          storeName: "Neta MX",
          orderTotal: "450.0000",
          createdOnUtc: "2022-04-28T16:01:23.000Z",
          currentETA: "2022-04-29T18:00:00.000Z",
          shippingStatusId: "Pending",
          orderStatusId: "Pending",
          orderId: "ORDE23522",
          id: "2801465899",
        },
        {
          customerPickupDateAt: "2022-04-30T18:01:23.000Z",
          onContactarCliente,
          onOrderDetailsClick,
          pickedUpDateAt: "2022-04-30T16:01:23.000Z",
          phoneNumber: "5511194223",
          customerName: "Customer 2",
          qtyItems: 6,
          storeName: "Neta MX",
          orderTotal: "650.0000",
          createdOnUtc: "2022-04-28T16:01:23.000Z",
          currentETA: "2022-04-29T18:00:00.000Z",
          shippingStatusId: "Pending",
          orderStatusId: "Pending",
          orderId: "ORDE23533",
          id: "2801465900",
        },
      ],
      summary: {
        invoiceId: "ID1",
        storeStatus: "OPEN",
        qtyOrders: 150,
        earningsAmount: 2,
        driverAmount: 150,
        qtyProducts: 5,
        invoiceUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/invoice",
        trackUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/track",
        pdfUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com/track",
        isOpenModal: true,
        handleOnTrackClick,
        handleOnInvoiceClick,
        onClose,
        onOpen,
      },
      shopUrl: "https://neta.mx/",
      shopName: "xxx",
      onOrderDetailsClick,
      onContactarCliente,
      onClickCompartirLiga,
      handleOnTrackClick,
      handleOnInvoiceClick,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("MisVentas should be render correctly", () => {
    const { container } = render(<MisVentas {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("MisVentas should be render correctly without any order", () => {
    const { container } = render(<MisVentas {...mock} orders={[]} />);
    expect(container).toMatchSnapshot();
  });

  test("while Store status is CLOSED, component should be render correctly", () => {
    mock.summary.storeStatus = "CLOSED";
    const { container } = render(<MisVentas {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("while qtyOrders is 0, component should be render correctly", () => {
    mock.summary.qtyOrders = 0;
    const { container } = render(<MisVentas {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("while Store status is CLOSED and qtyOrders is 0, component should be render correctly", () => {
    mock.summary.storeStatus = "CLOSED";
    mock.summary.qtyOrders = 0;
    const { container } = render(<MisVentas {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
