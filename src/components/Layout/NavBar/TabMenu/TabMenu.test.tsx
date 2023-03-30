import { render, screen, fireEvent } from "@testing-library/react";
import { TabMenu } from "./TabMenu";
import { ITabMenuProps } from "./ITabMenuProps";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("TabMenu component", () => {
  let mock: ITabMenuProps;

  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
    mock = {
      isNavBarCollapsed: false,
      netaWalletBalance: "355.25",
    };
  });

  test("TabMenu should be render correctly", () => {
    const { container } = render(<TabMenu {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("TabMenu should be render correctly with collapse", () => {
    mock = { ...mock, isNavBarCollapsed: true };
    const { container } = render(<TabMenu {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Tiendita tab should be working properly", () => {
    const { container, getByTestId } = render(<TabMenu {...mock} />);
    fireEvent.click(getByTestId("Tiendita tab"));
    expect(singletonRouter).toMatchObject({ asPath: "/" });
    expect(container).toMatchSnapshot();
  });

  test("Gana dinero tab should be working properly", () => {
    const { container, getByTestId } = render(<TabMenu {...mock} />);
    fireEvent.click(getByTestId("Gana dinero tab"));
    expect(singletonRouter).toMatchObject({ asPath: "/gana-dinero" });
    expect(container).toMatchSnapshot();
  });

  test("Mi cuenta tab should be working properly", () => {
    const { container, getByTestId } = render(<TabMenu {...mock} />);
    fireEvent.click(getByTestId("Mi cuenta tab"));
    expect(singletonRouter).toMatchObject({ asPath: "/mi-cuenta" });
    expect(container).toMatchSnapshot();
  });

  test("En grupo tab should be working properly", () => {
    const { container, getByTestId } = render(<TabMenu {...mock} />);
    fireEvent.click(getByTestId("Gana dinero tab"));
    expect(singletonRouter).toMatchObject({ asPath: "/gana-dinero" });
    expect(container).toMatchSnapshot();
  });

  test("netaWalletBalance should be present in document", () => {
    render(<TabMenu {...mock} />);
    expect(screen.getByTestId("netaWalletBalance").textContent).toMatch("Tu dinero: $355.25");
  });

  test("netaWalletBalance should be not present in document", () => {
    mock = { ...mock, netaWalletBalance: "0" };
    const { container } = render(<TabMenu {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
