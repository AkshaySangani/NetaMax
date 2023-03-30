import { render, cleanup, fireEvent } from "@testing-library/react";
import { ShopsMenu } from "./ShopsMenu";
import { IShopsMenuProps } from "./IShopsMenuProps";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("ShopsMenu component", () => {
  let mock: IShopsMenuProps;
  const logout = jest.fn();

  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
    mock = {
      logout,
      currentShop: {
        Id: "16031ABC22NMX",
        Name: "Store 1",
        Url: "https://neta.mx/",
        Hosts: "Host 1",
        CompanyName: "Company 1",
        CompanyAddress: "Company Add.",
        CompanyPhoneNumber: "+140 876 313",
      },
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("Supports `push` method", () => {
    singletonRouter.push("/");
    expect(singletonRouter).toMatchObject({
      asPath: "/",
    });
  });

  test("ShopsMenu should be render correctly", () => {
    const { container } = render(<ShopsMenu {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Inicio Icon button should work properly", () => {
    const { getByTestId } = render(<ShopsMenu {...mock} />);
    fireEvent.click(getByTestId("Inicio"));
    expect(singletonRouter).toMatchObject({ asPath: "/inicio-shop" });
  });

  test("Ventas Icon button should work properly", () => {
    const { getByTestId } = render(<ShopsMenu {...mock} />);
    fireEvent.click(getByTestId("Ventas"));
    expect(singletonRouter).toMatchObject({ asPath: "/invoices" });
  });

  test("Clientes Icon button should work properly", () => {
    const { getByTestId } = render(<ShopsMenu {...mock} />);
    fireEvent.click(getByTestId("Clientes"));
    expect(singletonRouter).toMatchObject({ asPath: "/clients" });
  });

  test("Cuenta Icon button should work properly", () => {
    const { getByTestId } = render(<ShopsMenu {...mock} />);
    fireEvent.click(getByTestId("Cuenta"));
    expect(singletonRouter).toMatchObject({ asPath: "/info" });
  });
});
