import { render, cleanup, screen } from "@testing-library/react";
import { DailyMonetasBanner } from "./DailyMonetasBanner";
import { IDailyMonetasBannerProps } from "./IDailyMonetasBannerProps";

describe("Render DailyMonetasBanner component", () => {
  const notLoggedInProps: IDailyMonetasBannerProps = {
    isLoggedIn: false,
    challengeDescription: undefined,
  };

  const loggedInProps: IDailyMonetasBannerProps = {
    isLoggedIn: true,
    challengeDescription: "Ven diario y junta 3 monetas ",
  };

  test("DailyMonetasBanner should render properly when a user is not logged in", () => {
    const { container } = render(<DailyMonetasBanner {...notLoggedInProps} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("daily-monetas-banner-text").textContent).toMatch(
      "¿Quieres ganar dinero para tus compras? 😜"
    );
  });

  test("DailyMonetasBanner should render properly when a user is logged in", () => {
    const { container } = render(<DailyMonetasBanner {...loggedInProps} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("daily-monetas-banner-text").textContent).toMatch(
      `${loggedInProps.challengeDescription}`
    );
  });

  afterEach(() => {
    cleanup();
  });
});
