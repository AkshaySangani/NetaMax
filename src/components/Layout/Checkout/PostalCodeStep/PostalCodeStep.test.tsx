import { cleanup, render } from "@testing-library/react";
import { PostalCodeStep } from "./PostalCodeStep";
import { IPostalCodeStepProps } from "./IPostalCodeStepProps";
import { FieldError } from "react-hook-form";

describe("PostalCodeStep component", () => {
  let mock: IPostalCodeStepProps;

  const postalCode: FieldError = { type: "a" };
  const mockedErrors = {
    postalCode,
  };

  beforeEach(() => {
    mock = {
      errors: mockedErrors,
      register: jest.fn(),
    };
  });

  afterEach(() => {
    cleanup();
  });

  test("PostalCodeStep should be rendered correctly", () => {
    const { container, getByText } = render(<PostalCodeStep {...mock} />);
    expect(container).toMatchSnapshot();
    expect(
      getByText(
        "Con tu código postal podemos recomendarte las mejores promociones a tus tiendas de confianza."
      )
    ).toBeInTheDocument();
    expect(getByText("Ingresa tus datos para continuar")).toBeInTheDocument();
    expect(getByText("Código postal")).toBeInTheDocument();
  });
});
