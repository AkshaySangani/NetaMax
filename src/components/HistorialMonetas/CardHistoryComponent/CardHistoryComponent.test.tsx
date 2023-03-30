import { render } from "@testing-library/react";
import CardHistoryComponent from "./CardHistoryComponent";
import { ICardHistoryProps } from "./ICardHistoryProps";

jest.mock("next/router", () => require("next-router-mock"));

describe("Render CardHistory component", () => {
  const defaultProps: ICardHistoryProps = {
    detail: "detail",
    amount: 1,
    date: new Date(),
    movementTypeId: 10,
    orderId: 123,
  };

  it("CardHistoryComponent should be render correctly", () => {
    const { container } = render(<CardHistoryComponent {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  describe("movement Type test", () => {
    const movementTypeIds = [
      [10, "+ $1.00"],
      [20, "- $1.00"],
      [30, "- $1.00"],
    ];

    it.each(movementTypeIds)(
      "CardHistoryComponent should be render correctly, when movementTypeId is %p",
      (typeId, value) => {
        const { getByTestId } = render(
          <CardHistoryComponent {...defaultProps} movementTypeId={parseInt(typeId.toString())} />
        );
        expect(getByTestId("amountTest").textContent).toBe(value);
      }
    );
  });

  describe("date test", () => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;

    const monthAgo = new Date(new Date().setMonth(new Date().getMonth() - 1));

    const dates = [
      [new Date(), "Hace menos de 1 hora"],
      [new Date(new Date().setHours(new Date().getHours() - 1)), "Hace 1 hora"],
      [new Date(new Date().setHours(new Date().getHours() - 3)), "Hace 3 horas"],
      [new Date(new Date().setHours(new Date().getHours() - 25)), "Hace 1 día"],
      [new Date(new Date().setHours(new Date().getHours() - 49)), "Hace 2 días"],
      [monthAgo, monthAgo.toLocaleDateString("es-MX", options)],
    ];

    it.each(dates)(
      "CardHistoryComponent should be render correctly, when movementTypeId is %p",
      (date, value) => {
        const { getByTestId } = render(
          <CardHistoryComponent {...defaultProps} date={date as Date} />
        );
        expect(getByTestId("dateTest").textContent).toBe(value);
      }
    );
  });
});
