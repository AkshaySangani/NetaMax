import { Control, DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";

import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";

export interface IPhoneNumberStepProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<IPhoneNumberFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {UseFormRegister<ILogInStepFormValues>}
   */
  register: UseFormRegister<IPhoneNumberFormValues>;

  /**
   * The form control.
   * @type {Control<IPhoneNumberFormValues}
   */
  control: Control<IPhoneNumberFormValues, FieldValues>;
}
