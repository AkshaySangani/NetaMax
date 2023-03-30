import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

import { INameAndTermConditionsFormValues } from "dataflows/Checkout/NameAndTermConditions/INameAndTermConditionsFormValues";

export interface INameAndTermConditionsStepProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<INameAndTermConditionsFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {UseFormRegister<ILogInStepFormValues>}
   */
  register: UseFormRegister<INameAndTermConditionsFormValues>;
}
