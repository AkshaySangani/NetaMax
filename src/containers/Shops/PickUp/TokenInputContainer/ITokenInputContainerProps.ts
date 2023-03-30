import { Control, DeepMap, FieldError, FieldValues } from "react-hook-form";

import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";
import { IShopUser } from "dataflows/Shops/IShopUser";

export interface ITokenInputContainerProps {
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
   * Closes the pick up token container panel
   * @type {() => void}
   **/
  onClose: () => void;

  /**
   * Send the Pick up token
   * @type {() => void}
   **/
  sendOtpCode: () => void;

  /**
   * Send the onResendOtp
   * @type {() => void}
   **/
  onResendOtp: () => void;
  /**
   * The callback function to set the isClickingNextStep
   * @type {(isClickingNextStep: boolean) => void}
   **/
  setIsClickingNextStep?: (isClickingNextStep: boolean) => void;

  /**
   * Indicates if the Token call is loading.
   * @type {boolean}
   */
  isLoading: boolean;

  /**
   * Indicates if the Token input value is 6 chars long.
   * @type {boolean}
   */
  isDisabled: boolean;

  /**
   * Indicates if the Token input value is 6 chars long.
   * @type {boolean}
   */
  isDisable: boolean;

  /**
   * Indicates if the Token input Count.
   * @type {boolean}
   */
  notRegisterNumber: boolean;

  /**
   * Indicates if the Token input value is 6 chars long.
   * @type {number}
   */
  countdown: number;

  /**
   * The last invoice id to redirect when no token is available
   * @type {string}
   */
  lastInvoiceId?: string;

  /**
   * The current shop to track events
   * @type {IShopUser}
   */
  currentShop?: IShopUser;

  /**
   * If it is shop owner
   * @type {boolean}
   */
  isShopOwner?: boolean;
}
