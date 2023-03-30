import { render, cleanup, fireEvent } from "@testing-library/react";
import { MinifiedTabMenu } from "./MinifiedTabMenu";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render MinifiedTabMenu component", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("MinifiedTabMenu should be render correctly", () => {
    const { container } = render(<MinifiedTabMenu />);
    expect(container).toMatchSnapshot();
  });

  test("Tiendita tab should be working properly", () => {
    const { container, getByTestId } = render(<MinifiedTabMenu />);
    fireEvent.click(getByTestId("Tiendita tab"));
    expect(singletonRouter).toMatchObject({ asPath: "/" });
    expect(container).toMatchSnapshot();
  });

  test("Mi cuenta tab should be working properly", () => {
    const { container, getByTestId } = render(<MinifiedTabMenu />);
    fireEvent.click(getByTestId("Mi cuenta tab"));
    expect(singletonRouter).toMatchObject({ asPath: "/mi-cuenta" });
    expect(container).toMatchSnapshot();
  });

  test("Gana dinero tab should be working properly", () => {
    const { container, getByTestId } = render(<MinifiedTabMenu />);
    fireEvent.click(getByTestId("Gana dinero tab"));
    expect(singletonRouter).toMatchObject({ asPath: "/gana-dinero" });
    expect(container).toMatchSnapshot();
  });

  test("Gana dinero tab should be working properly with router", () => {
    singletonRouter.push("/gana-dinero");
    const { container } = render(<MinifiedTabMenu />);
    expect(container).toMatchSnapshot();
  });

  test("Mi cuenta tab should be working properly with router", () => {
    singletonRouter.push("/mi-cuenta");
    const { container } = render(<MinifiedTabMenu />);
    expect(container).toMatchSnapshot();
  });
});
