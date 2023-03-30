import { Control, DeepMap, FieldError, FieldValues, UseFormRegister } from "react-hook-form";

import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";

export interface IPhoneNumberStepProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<Any, FieldError>}
   */
  errors: DeepMap<Partial<IPhoneNumberFormValues>, FieldError | undefined>;

  /**
   * Selector for error Otp
   * @type {string}
   */
  errorOtpMessage?: string;

  /**
   * The form register.
   * @type {UseFormRegister<IPhoneNumberFormValues>}
   */
  register: UseFormRegister<IPhoneNumberFormValues>;

  /**
   * The form control.
   * @type {Control<any, Object>}
   */
  control: Control<IPhoneNumberFormValues, FieldValues>;

  /**
   * Value of the form phone.
   * @type {string}
   */
  valueForm?: string;

  /**
   * Handle next
   * @type {() => void}
   */
  handleNext: () => void;

  /**
   * Phone number used
   * @type {string}
   */
  phoneNumber: string;

  /**
   * Indicates if the otp code is being sent
   * @type {boolean}
   */
  isSendingOtpCode: boolean;
}
