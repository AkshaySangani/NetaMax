import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { HistorialMonetas } from "./HistorialMonetas";
import { IHistorialMonetasProps } from "./IHistorialMonetasProps";

describe("Render HistorialMonetas component", () => {
  let mock: IHistorialMonetasProps;

  beforeEach(() => {
    mock = {
      monetasHistory: [
        {
          Id: "XX123",
          MovementType: 1,
          MovementDescription: "Description",
          OrderId: 1851123,
          Amount: 400,
          CreatedOnUtc: new Date("December 17, 1995 13:24:00"),
          coins: 5
        }],
      coins: {
        Id: 123456,
        Username: 'User123',
        customerCurrentNetaWallet: '125',
        createdOnUTC: new Date("December 17, 1995 13:24:00"),
        canAddCoin: 1,
        timeRemaining: '45'
      },
      hasMoreMonetas: false,
      loadNextPage: jest.fn()
    };
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test("HistorialMonetas should be render correctly", () => {
    const { container } = render(<HistorialMonetas {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("HistorialMonetas should be render correctly when  hasMoreMonetas is true", () => {
    const { container, getByText } = render(<HistorialMonetas {...mock} hasMoreMonetas={true} />);
    expect(container).toMatchSnapshot();
  });
});
