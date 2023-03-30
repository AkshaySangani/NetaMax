import { render, screen } from "@testing-library/react";
import { Toast } from "./Toast";
import { IToastProps } from "./IToastProps";

describe("Toast Component", () => {
  const mock: IToastProps = {
    message: "Test Message",
    backgroundColor: "Blue",
  };
  it("Should render Component Toast", () => {
    render(<Toast {...mock} />);
  });

  it("Should render Component Toast with message", () => {
    mock.message = "Prueba Message Toast";
    render(<Toast {...mock} />);
    screen.getByText(/Prueba Message Toast/i);
  });
});
