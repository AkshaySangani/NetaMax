import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

import { IPostalCodeFormValues } from "dataflows/Checkout/PostalCode/IPostalCodeFormValues";

export interface IPostalCodeStepProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<IPostalCodeFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {UseFormRegister<ILogInStepFormValues>}
   */
  register: UseFormRegister<IPostalCodeFormValues>;
}
