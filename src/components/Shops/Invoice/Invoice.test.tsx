import { render, cleanup, fireEvent } from "@testing-library/react";
import { Invoice } from "./Invoice";
import { IInvoiceProps } from "./IInvoiceProps";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("Invoice component", () => {
  let mock: IInvoiceProps;
  const onInvoiceClick = jest.fn();
  const onViewOrdersClick = jest.fn();

  beforeEach(() => {
    mock = {
      id: "160310116022",
      pdfUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com",
      invoiceDate: "04-18-2022",
      orders: "xxx",
      createdOnUtc: "2022-18-04 06:29:38",
      storeId: "xxx",
      deliveryStatus: "xxxx",
      subTotal: 150.2,
      orderDisccount: 50,
      storeCommisssion: 20,
      trackingUrl: "",
      disableTrackingButton: false,
      onViewOrdersClick,
      onInvoiceClick,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("Invoice should be render correctly", () => {
    const { container } = render(<Invoice {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Invoice should be render correctly with tracking url", () => {
    mock = { ...mock, trackingUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com" };
    const { container } = render(<Invoice {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Rastrear Link should be render properly", () => {
    mock = { ...mock, trackingUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com" };
    const { getByTestId } = render(<Invoice {...mock} />);
    expect(getByTestId("Rastrear link")).toHaveAttribute(
      "href",
      "https://nopcommerce-assets.s3.us-east-2.amazonaws.com"
    );
    expect(getByTestId("Rastrear")).not.toBeDisabled();
  });

  test("Ayuda Link should be render properly", () => {
    const { getByTestId } = render(<Invoice {...mock} />);
    expect(getByTestId("Ayuda link")).toHaveAttribute(
      "href",
      "https://wa.me/525545439866?text=Hablar%20con%20alguien"
    );
  });

  test("Factura Link should be render properly", () => {
    const { getByTestId } = render(<Invoice {...mock} />);
    expect(getByTestId("Factura link")).toHaveAttribute("href", mock.pdfUrl);
    fireEvent.click(getByTestId("Factura button"));
    expect(onInvoiceClick).toBeCalledTimes(1);
  });
});

describe("Test Ver órdenes button", () => {
  let mock: IInvoiceProps;
  const onInvoiceClick = jest.fn();
  const onViewOrdersClick = jest.fn();

  beforeEach(() => {
    mock = {
      id: "160310116022",
      pdfUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com",
      invoiceDate: "04-18-2022",
      orders: "xxx",
      createdOnUtc: "2022-18-04 06:29:38",
      storeId: "xxx",
      deliveryStatus: "xxxx",
      subTotal: 150.2,
      orderDisccount: 50,
      storeCommisssion: 20,
      trackingUrl: "",
      disableTrackingButton: false,
      onInvoiceClick,
      onViewOrdersClick,
    };
  });

  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  test("Supports `push` method", () => {
    singletonRouter.push("/");
    expect(singletonRouter).toMatchObject({
      asPath: "/",
    });
  });

  test("Ver órdenes button should work properly", () => {
    const { getByTestId } = render(<Invoice {...mock} />);
    fireEvent.click(getByTestId("Ver órdenes"));
    expect(onViewOrdersClick).toBeCalledTimes(1);
    expect(singletonRouter).toMatchObject({ asPath: `/invoices/${mock.id}/details` });
  });
});
