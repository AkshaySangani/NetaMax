import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { GMVBanner } from "./GMVBanner";
import { IGMVBannerProps } from "./IGMVBannerProps";

describe("Render GMVBanner component", () => {
  const noProgressProps: IGMVBannerProps = {
    coins: 10,
    progressBarValue: 0,
    GMVThreshold: 100,
    checkoutOpened: false,
    buttonAction: jest.fn(),
  };

  const progressProps: IGMVBannerProps = {
    coins: 10,
    progressBarValue: 50,
    GMVThreshold: 100,
    checkoutOpened: false,
    buttonAction: jest.fn(),
  };

  const completeProps: IGMVBannerProps = {
    coins: 10,
    progressBarValue: 120,
    GMVThreshold: 100,
    checkoutOpened: false,
    buttonAction: jest.fn(),
  };

  test("GMVBanner should render properly with no progress", () => {
    const { container } = render(<GMVBanner {...noProgressProps} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("gmv-banner-text").textContent).toMatch(
      `¡POR COMPRAS MAYORES A $${noProgressProps.GMVThreshold} GANA ${noProgressProps.coins} MONETAS!!`
    );
  });

  test("GMVBanner should render properly with some progress", () => {
    const { container } = render(<GMVBanner {...progressProps} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("gmv-banner-text").textContent).toMatch(
      `TE FALTAN $${(progressProps.GMVThreshold - progressProps.progressBarValue).toFixed(
        2
      )} PARA GANAR ${progressProps.coins} MONETAS`
    );
  });

  test("GMVBanner should render when the challenge is completed", () => {
    const { container } = render(<GMVBanner {...completeProps} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("gmv-banner-complete-text").textContent).toMatch(
      "Gana tus monetas finalizando tu compra"
    );
  });

  it("fires the prop action when clicking the button", () => {
    render(<GMVBanner {...completeProps} />);
    fireEvent.click(screen.getByTestId("gmv-banner-button"));
    expect(completeProps.buttonAction).toBeCalled();
  });

  afterEach(() => {
    cleanup();
  });
});
