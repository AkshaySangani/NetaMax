import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { secondsToString, secondsToStringHour } from "utils/timeUtils";
import { DiscoveryCard } from "./DiscoveryCard";
import { IDiscoveryCardProps } from "./IDiscoveryCardProps";

describe("Render DiscoveryCard component", () => {
  const commonProps: IDiscoveryCardProps = {
    cardDescription: "Descripción del card",
    loading: false,
    countDown: 0,
    buttonAction: jest.fn(),
  };

  test("DiscoveryCard should render properly when having coins to claim", () => {
    const { container } = render(<DiscoveryCard {...commonProps} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("card-layout-banner").textContent).toMatch("Vuelve todos los días");
    expect(screen.getByTestId("discovery-card-button").textContent).toMatch(
      "¡Quiero mis monetas de HOY!"
    );
  });

  test("DiscoveryCard should render properly when already claimed the coins", () => {
    const commonProps: IDiscoveryCardProps = {
      cardDescription: "Descripción del card",
      loading: false,
      countDown: 10,
      buttonAction: jest.fn(),
    };
    const { container } = render(<DiscoveryCard {...commonProps} coinClaimed />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("card-layout-banner").textContent).toMatch("Vuelve todos los días");
    expect(screen.getByTestId("discovery-card-button").textContent).toMatch(
      `Regresa por más monetas en ${secondsToStringHour(commonProps.countDown)}`
    );
  });

  afterEach(() => {
    cleanup();
  });
});

describe("Test DicoveryCard component functions", () => {
  const commonProps: IDiscoveryCardProps = {
    cardDescription: "Descripción del card",
    loading: false,
    countDown: 0,
    buttonAction: jest.fn(),
  };

  it("executes onProductClick when pressing the product button", () => {
    render(<DiscoveryCard {...commonProps} />);
    fireEvent.click(screen.getByTestId("discovery-card-button"));
    expect(commonProps.buttonAction).toBeCalled();
  });
});
