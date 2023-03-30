import { render, cleanup } from "@testing-library/react";
import { PromoBanner } from "./PromoBanner";
import { IPromoBanner } from "./IPromoBanner";

describe("PromoBanner Component", () => {
  let mock: IPromoBanner;

  beforeEach(() => {
    mock = {
      bannerText: "Promo banner",
      bannerPlainText: "A demo banner",
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("PromoBanner should be render correctly", () => {
    const { container } = render(<PromoBanner {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("PromoBanner should be render correctly without plaintext", () => {
    mock = {
      bannerText: "Promo banner",
    };
    const { container } = render(<PromoBanner {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
