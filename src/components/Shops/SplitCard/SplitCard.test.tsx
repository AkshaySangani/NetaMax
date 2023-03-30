import { render, cleanup } from "@testing-library/react";
import { SplitCard } from "./SplitCard";
import { ISplitCardProps } from "./ISplitCard";
import IconDetailOrder from "styled/icons/Shops/Order/OrderNumber";
import IconDetailTelephone from "styled/icons/Shops/Order/Telephone";
import IconDetailUser from "styled/icons/Shops/Order/User";

describe("SplitCard Component", () => {
  let mock: ISplitCardProps;

  beforeEach(() => {
    mock = {
      firstTitle: "Nombre cliente: ",
      firstSubtitle: "Order 1",
      secondTitle: "Teléfono: ",
      secondSubtitle: "123456789",
      thirdTitle: "Número de orden: ",
      thirdSubtitle: "ANMX123",
      firstIcon: <IconDetailUser />,
      secondIcon: <IconDetailTelephone />,
      thirdIcon: <IconDetailOrder />,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("SplitCard should be render correctly", () => {
    const { container } = render(<SplitCard {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
