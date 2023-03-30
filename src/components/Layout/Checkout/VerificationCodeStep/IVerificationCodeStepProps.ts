import { Control, DeepMap, FieldError, FieldValues } from "react-hook-form";

import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";

export interface IVerificationCodeStepProps {
  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<IVerificationCodeFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {Control<IVerificationCodeFormValues, object>}
   */
  control: Control<IVerificationCodeFormValues, FieldValues>;

  /**
   * Elapsed time in seconds.
   * @type {number}
   */
  seconds: number;

  /**
   * Indicates if the logIn call is loading.
   * @type {boolean}
   */
  isLoading: boolean;

  /**
   * Resend the verification code.
   * @type {() => void}
   **/
  reSendOtpCode: () => void;

  /**
   * Redirect to the verification phone step
   * @type {() => void}
   **/
  redirectToPhoneNumberStep: () => void;

  /**
   * Phone user number
   * @type {string}
   **/
  userPhone?: string;

  /**
   * change state to verificationCodeField
   * @type {() => void}
   **/
  setVerificationCodeField?: (num: number) => void;
}
