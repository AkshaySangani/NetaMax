import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { DeliverOrderButton } from "./DeliverOrderButton";
import { IDeliverOrderButtonProps } from "./IDeliverOrderButtonProps";

describe("DeliverOrderButton component", () => {
  let mock: IDeliverOrderButtonProps;
  const onOpen = jest.fn();

  beforeEach(() => {
    mock = {
      onOpen,
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("DeliverOrderButton should be render correctly", () => {
    const { container } = render(<DeliverOrderButton {...mock} />);
    expect(container).toMatchSnapshot();
  });

  test("Entregar pedido button should work properly", () => {
    render(<DeliverOrderButton {...mock} />);
    fireEvent.click(screen.getByText("Entregar pedido"));
    expect(onOpen).toHaveBeenCalled();
  });
});
