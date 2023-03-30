import { render, cleanup } from "@testing-library/react";

import { SKUCard } from "./SKUCard";
import { ISKUCardProps } from "./ISKUCardProps";
import { SKU_NAME } from "constants/ganaDineroContstans";
import { Provider } from "react-redux";
import { store } from "state/store";

describe("Render SKUCard component", () => {
  const commonProps: ISKUCardProps = {
    title: "Test product title",
    requiredItems: 5,
    endDate: new Date(2022, 4, 28),
    progressBarValue: 0,
    buttonAction: jest.fn(),
    awardCoins: 10,
    type: SKU_NAME,
  };

  // TODO: ADD ADDITIONAL TEST CASES WHEN THE COMPONENT RECEIVE DATA FROM TEH ENDPOINT AND HAVE ADDITIONAL STATES
  test("SKUCard should render properly when having coins to claim", () => {
    const { container } = render(
      <Provider store={store}>
        <SKUCard {...commonProps} />
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });

  afterEach(() => {
    cleanup();
  });
});
