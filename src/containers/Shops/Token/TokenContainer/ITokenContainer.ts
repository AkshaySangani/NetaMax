import { Control, DeepMap, FieldError, FieldValues } from "react-hook-form";

import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";

export interface ITokenContainerProps {
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
   * Redirect to the home page
   * @type {() => void}
   **/
  onClose: () => void;

  /**
   * Send the Pick up token
   * @type {() => void}
   **/
  sendOtpCode: () => void;

  /**
   * Redirect to the verification phone step
   * @type {() => void}
   **/
  onVerify?: (number: number) => void;

  /**
   * The callback function to set the isClickingNextStep
   * @type {(isClickingNextStep: boolean) => void}
   **/
  setIsClickingNextStep?: (isClickingNextStep: boolean) => void;

  /**
   * Indicates if the Token call is loading.
   * @type {boolean}
   */
  isLoading?: boolean;

  /**
   * Indicates if the Token input value is 6 chars long.
   * @type {boolean}
   */
  isDisabled?: boolean;

  /**
   * Indicates if the information shown if for the owner or the buyer info.
   * @type {boolean}
   */
  isBuyer?: boolean;

  /**
   * Phone user number
   * @type {string}
   **/
  userPhone?: string;
}
