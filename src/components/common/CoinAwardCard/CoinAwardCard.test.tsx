import { render, cleanup } from "@testing-library/react";
import { CoinAwardCard } from "./CoinAwardCard";

describe("Render CoinAwardCard component", () => {
  test("CoinAwardCard shows up and render properly", () => {
    const { container } = render(<CoinAwardCard coins={20} />);
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
