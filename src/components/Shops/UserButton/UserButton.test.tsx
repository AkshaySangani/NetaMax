import { render } from "@testing-library/react";
import { UserButton } from "./UserButton";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render UserButton component", () => {
  test("UserButton should be render correctly", () => {
    const { container } = render(<UserButton />);
    expect(container).toMatchSnapshot();
  });
});
