import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { MonetasEmpty } from "./MonetasEmpty";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render MonetasEmpty component", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("MonetasEmpty should be render correctly", () => {
    const { container } = render(<MonetasEmpty />);
    expect(container).toMatchSnapshot();
  });

  test("¡Comienza a Ganar Hoy! button should be working properly", () => {
    const { getByText } = render(<MonetasEmpty />);
    expect(getByText("Aún no haz recibido monetas")).toBeInTheDocument();
    expect(getByText("¡Comienza a Ganar Hoy!")).toBeInTheDocument();
    fireEvent.click(getByText("¡Comienza a Ganar Hoy!"));
    expect(singletonRouter).toMatchObject({ asPath: "/" });
  });
});
