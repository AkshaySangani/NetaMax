import { render, cleanup, screen } from "@testing-library/react";
import { ProfitBanner } from "./ProfitBanner";
import { IProfitBannerProps } from "./IProfitBannerProps";

describe("ProfitBanner Component", () => {
  let mock: IProfitBannerProps;

  beforeEach(() => {
    mock = {
      todaysProfit: 1000,
      url: "https://neta.mx/",
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("ProfitBanner should be render correctly", () => {
    const { container } = render(<ProfitBanner {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Link should be render properly", () => {
    render(<ProfitBanner {...mock} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", mock.url);
  });
});
