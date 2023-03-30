import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { GMVCard } from "./GMVCard";
import { IGMVCardProps } from "./IGMVCardProps";

const commonProps: IGMVCardProps = {
  cardDescription: "Recibe 15 en tu primer compra mayor a 200",
  title: "Te regalamos $10",
  progressBarValue: 75,
  GMVThreshold: 200,
  backToHome: jest.fn(),
  priceAmount: 15,
};

const challengeCompletedProps: IGMVCardProps = {
  cardDescription: "Recibe 15 en tu primer compra mayor a 200",
  title: "Te regalamos $10",
  progressBarValue: 200,
  GMVThreshold: 200,
  backToHome: jest.fn(),
  priceAmount: 15,
};

describe("Render GMVCard component", () => {
  test("GMVCard should render properly", () => {
    const { container } = render(<GMVCard {...commonProps} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("card-layout-banner").textContent).toMatch("Te regalamos $10");
    expect(screen.getByTestId("gmv-card-button").textContent).toMatch("¡Ir a comprar!");
  });

  test("GMVCard should render properly when progress bar value is greather than 200", () => {
    const { container } = render(<GMVCard {...challengeCompletedProps} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("card-layout-banner").textContent).toMatch("Te regalamos $10");
    expect(screen.getByTestId("gmv-card-button").textContent).toMatch("¡Ir a comprar!");
  });

  afterEach(() => {
    cleanup();
  });
});

describe("Test GMVCard component functions", () => {
  it("executes backToHome when pressing the button", () => {
    render(<GMVCard {...commonProps} />);
    fireEvent.click(screen.getByTestId("gmv-card-button"));
    expect(commonProps.backToHome).toBeCalled();
  });
});
