import { render, screen } from "@testing-library/react";
import { Notification } from "./Notification";
import { INotificationProps } from "./INotificationProps";

describe("Notification Component", () => {
  const mock: INotificationProps = {
    message: "Test Message",
    backgroundColor: "Blue",
  };
  it("Should render Component Notification", () => {
    render(<Notification {...mock} />);
  });

  it("Should render Component Notification with message", () => {
    mock.message = "Prueba Message Notification";
    render(<Notification {...mock} />);
    screen.getByText(/Prueba Message Notification/i);
  });
});
