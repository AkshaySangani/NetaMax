import { cleanup, render, screen } from "@testing-library/react";
import { IOrderReviewSectionProps } from "./IOrderReviewSectionProps";
import { OrderReviewSection } from "./OrderReviewSection";

describe("OrderReviewSection test component", () => {
  let mock: IOrderReviewSectionProps;
  beforeEach(() => {
    mock = {
      title: "Section One",
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("OrderReviewSection should be render correctly", () => {
    const { container } = render(<OrderReviewSection {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("OrderReviewSection title is on page", () => {
    render(<OrderReviewSection {...mock} />);
    expect(screen.getByText("Section One")).toBeInTheDocument();
  });
});
