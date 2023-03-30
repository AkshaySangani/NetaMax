import { render, screen } from "@testing-library/react";
import { MiCuenta } from "./MiCuenta";

const onOpenLogin = jest.fn();

describe("Render MisCompras component", () => {
  test("MiCuenta should be render correctly", () => {
    const { container } = render(<MiCuenta onOpenLoginFlow={onOpenLogin} />);
    expect(container).toMatchSnapshot();
  });

  test("Eres Nuevo card should be render correctly", () => {
    const { container } = render(<MiCuenta onOpenLoginFlow={onOpenLogin} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("eres-nuevo-card").textContent).toMatch("¡Hola!");
  });

  test("Mis compras card should be render correctly", () => {
    const { container } = render(<MiCuenta onOpenLoginFlow={onOpenLogin} />);
    expect(container).toMatchSnapshot();
    expect(screen.getByTestId("mis-compras-card").textContent).toMatch("Mis compras");
  });
});
