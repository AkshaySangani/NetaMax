import { render, cleanup, screen } from "@testing-library/react";
import { SummaryEmpty } from "./SummaryEmpty";
import { ISummaryEmptyProps } from "./ISummaryEmptyProps";

describe("SummaryEmpty Component", () => {
  let mock: ISummaryEmptyProps;

  beforeEach(() => {
    mock = {
      shopUrl: "https://nopcommerce-assets.s3.us-east-2.amazonaws.com",
      shopName: "Shop.One",
      shortStoreName: "SO",
      hasSummary: true,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("SummaryEmpty should be render correctly with hasSummary flag false", () => {
    mock = { ...mock, hasSummary: false };
    const { container } = render(<SummaryEmpty {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("SummaryEmpty should be render correctly with hasSummary flag", () => {
    const { container } = render(<SummaryEmpty {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("ShortShopName should be present in document", () => {
    render(<SummaryEmpty {...mock} />);
    expect(screen.getByText(`wwww.neta.mx/${mock.shopName?.split(".")[0]}`)).toBeInTheDocument();
  });

  test("Comparte tu liga Link should be render properly", () => {
    render(<SummaryEmpty {...mock} />);
    expect(screen.getByRole("link")).toHaveAttribute("href", mock.shopUrl);
  });
});
