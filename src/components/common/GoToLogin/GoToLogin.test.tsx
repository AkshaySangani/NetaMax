import { render, screen } from "@testing-library/react";
import { GoToLogin } from "./GoToLogin";
import { IGoToLoginProps } from "./IGoToLoginProps";

describe("Render GoToLogin component", () => {
  const onOpenLogin = jest.fn();
  let mock: IGoToLoginProps;

  beforeEach(() => {
    mock = {
      onOpenLogin,
    };
  });

  it("GoToLogin should be render correctly", () => {
    const { container } = render(<GoToLogin {...mock} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("invitation-message").textContent).toMatch(
      "Ingresa tus datos para continuar"
    );
    expect(screen.getByTestId("invitation-detail-message").textContent).toMatch(
      "Te invitamos a ingresar tus datos para ver tus compras"
    );
    expect(screen.getByTestId("redirect-button")).toBeTruthy();
    expect(screen.getByTestId("redirect-button").textContent).toMatch("Ingresar datos");
  });
});
