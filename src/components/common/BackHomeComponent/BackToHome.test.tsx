import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { BackToHome } from "./BackToHome";
import { IBackToHomeProps } from "./BackToHomeProps";
import mockRouter from "next-router-mock";
import singletonRouter from "next/router";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render BackToHome component", () => {
  let mock: IBackToHomeProps;

  beforeEach(() => {
    mock = {
      title: "Volver a la tiendita",
      size: 16,
      weight: 600,
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("BackToHome should be render correctly", () => {
    const { container } = render(<BackToHome />);
    expect(container).toMatchSnapshot();
  });

  test("Show title correctly", () => {
    const { queryByText } = render(<BackToHome {...mock} />);
    expect(queryByText("Volver a la tiendita")).toBeTruthy();
  });
});

describe("Test backToHome function", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  it("Supports `push` method", () => {
    singletonRouter.push("/");
    expect(singletonRouter).toMatchObject({
      asPath: "/",
    });
  });

  it("Works with next/link", () => {
    render(<BackToHome />);
    fireEvent.click(screen.getByText("Volver a la tiendita"));
    expect(singletonRouter).toMatchObject({ asPath: "/" });
  });
});
