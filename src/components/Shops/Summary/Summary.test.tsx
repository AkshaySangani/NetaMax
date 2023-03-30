import { render, cleanup } from "@testing-library/react";
import { Summary } from "./Summary";
import { ISummaryProps } from "./ISummaryProps";

describe("Summary Component", () => {
  let mock: ISummaryProps;

  beforeEach(() => {
    mock = {
      storeStatus: "open",
      qtyOrders: 150,
      earningsAmount: 2,
      driverAmount: 150,
      qtyProducts: 5,
      invoiceUrl: "",
      trackUrl: "",
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("Summary should be render correctly", () => {
    const { container } = render(<Summary {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Factura link should be render properly", () => {
    const { getByTestId, container } = render(
      <Summary {...mock} invoiceUrl={"https://neta.mx/"} />
    );
    expect(container).toMatchSnapshot();
    expect(getByTestId("Factura btn")).not.toBeDisabled();
  });

  test("Rastrear link should be render properly", () => {
    const { getByTestId, container } = render(<Summary {...mock} trackUrl={"order?16078"} />);
    expect(container).toMatchSnapshot();
    expect(getByTestId("Rastrear link")).toHaveAttribute("href", "order?16078");
    expect(getByTestId("Rastrear btn")).not.toBeDisabled();
  });
});
