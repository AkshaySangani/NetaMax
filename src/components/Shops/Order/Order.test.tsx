import { render, cleanup, fireEvent } from "@testing-library/react";
import { Order } from "./Order";
import { IOrderProps } from "./IOrderProps";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";

jest.mock("next/router", () => require("next-router-mock"));
let mock: IOrderProps;

describe("Order Component", () => {
  const onOrderDetailsClick = jest.fn();
  beforeEach(() => {
    mock = {
      id: "280146",
      orderStatusId: "10",
      shippingStatusId: "10",
      currentETA: "2022-04-29T18:00:00.000Z",
      createdOnUtc: "2022-04-28T16:01:23.000Z",
      orderTotal: "418.0000",
      storeName: "El cacalote ",
      qtyItems: 2,
      customerName: "Jhonatan",
      phoneNumber: "5511194223",
      onOrderDetailsClick,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("Order component should be render correctly", () => {
    const { container } = render(<Order {...mock} />);
    expect(container).toMatchSnapshot();
  });
});

describe("Test Ver detalle button", () => {
  const onOrderDetailsClick = jest.fn();
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
    mock = {
      id: "280146",
      orderStatusId: "10",
      shippingStatusId: "10",
      currentETA: "2022-04-29T18:00:00.000Z",
      createdOnUtc: "2022-04-28T16:01:23.000Z",
      orderTotal: "418.0000",
      storeName: "El cacalote ",
      qtyItems: 2,
      customerName: "Jhonatan",
      phoneNumber: "5511194223",
      onOrderDetailsClick,
    };
  });

  test("Supports `push` method", () => {
    singletonRouter.push("/");
    expect(singletonRouter).toMatchObject({
      asPath: "/",
    });
  });

  test("Works with next/link", () => {
    const { getByTestId } = render(<Order {...mock} />);
    fireEvent.click(getByTestId("Ver detalle"));
    expect(onOrderDetailsClick).toBeCalledTimes(1);
    expect(singletonRouter).toMatchObject({ asPath: `order/${mock.id}` });
  });
});
