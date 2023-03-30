import { render, cleanup } from "@testing-library/react";
import { InfoHeader } from "./InfoHeader";
import mockRouter from "next-router-mock";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render InfoHeader component", () => {
  beforeEach(() => {
    mockRouter.setCurrentUrl("/");
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("InfoHeader should be render correctly", () => {
    const { container } = render(<InfoHeader />);
    expect(container).toMatchSnapshot();
  });
});
