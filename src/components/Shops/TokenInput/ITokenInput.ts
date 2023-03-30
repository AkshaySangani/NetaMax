import { Control, DeepMap, FieldError, FieldValues } from "react-hook-form";

import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";

export interface ITokenInputProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<IVerificationCodeFormValues>, FieldError | undefined>;

  /**
   * The form token.
   * @type {Control<IVerificationCodeFormValues, object>}
   */
  control: Control<IVerificationCodeFormValues, FieldValues>;

  /**
   * Indicates if the Token Input is disabled.
   * @type {boolean}
   */
  isDisabled: boolean;

  /**
   * Indicates the amount of fields present in the Token Input.
   * @type {number}
   */
  fieldsAmount: number;
}
