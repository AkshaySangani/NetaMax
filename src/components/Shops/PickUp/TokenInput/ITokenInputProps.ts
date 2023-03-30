import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";
import { Control, DeepMap, FieldError, FieldValues } from "react-hook-form";

export interface ITokenInputProps {
  /**
   * on close action.
   * @type {() => void}
   */
  onClose: () => void;

  /**
   * Errors for the form fields.
   * @type {DeepMap<ILogInStepFormValues, FieldError>}
   */
  errors: DeepMap<Partial<IVerificationCodeFormValues>, FieldError | undefined>;

  /**
   * The form control for the token value.
   * @type {Control<IVerificationCodeFormValues, object>}
   */
  control: Control<IVerificationCodeFormValues, FieldValues>;

  /**
   * handles the redirection
   * @type {() => void}
   **/
  handleRedirect: () => void;

  /**
   * handles the next step
   * @type {() => void}
   **/
  handleNextStep: () => void;

  /**
   * handles the reSendOtpCode
   * @type {() => void}
   **/
  reSendOtpCode: () => void;

  /**
   * if it is loading
   * @type {boolean}
   **/
  isLoading: boolean;

  /**
   * if it is disabled
   * @type {boolean}
   **/
  isDisabled: boolean;

  /**
   * Indicates if the Token input Count.
   * @type {boolean}
   */
  isDisable: boolean;

  /**
   * Indicates if the Token input Count.
   * @type {boolean}
   */
  notRegisterNumber: boolean;

  /**
   * Token input Count.
   * @type {number}
   */
  countdown: number;

  /**
   * If it is shop owner
   * @type {boolean}
   */
  isShopOwner?: boolean;
}
