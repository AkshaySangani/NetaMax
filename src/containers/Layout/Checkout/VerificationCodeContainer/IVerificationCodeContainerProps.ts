import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";

import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IVerificationCodeContainerProps extends ICheckoutStepContainerProps {
  /**
   * The verification code form values
   * @type {IVerificationCodeFormValues}
   **/
  verificationCodeFormValues?: IVerificationCodeFormValues;

  /**
   * Indicates if the user is authenticated
   * @type {boolean}
   **/
  isUserAuthenticated: boolean;

  /**
   * The countdown timer
   * @type {number}
   */
  countDown: number;

  /**
   * Callback to set the countdown timer
   * @type {(countDown: number) => void}
   */
  setCountDown: (countDown: number) => void;

  /**
   * The login error message
   * @type {string}
   **/
  loginErrorMessage?: string;

  /**
   * Indicates if the user is logging in
   * @type {boolean}
   **/
  isLoadingLogIn: boolean;

  /**
   * Resets the opt contdown timer
   * @type {() => void}
   **/
  resetCountDown: () => void;

  /**
   * Redirect to the previuos step
   * @type {() => void}
   */
  loadPreviousStep: () => void;

  /**
   * Phone user
   * @type {string}
   */
  userPhone?: string;

  /**
   *  user name
   * @type {string}
   */
  name?: string;

  /**
   * Validate otp code
   * @type {() => void}
   */
  validateOtpCode: (phone: string, code: string) => void;

  /**
   * Send the OTP code
   * @type {() => void}
   **/
  sendOtpCode: (phone: string) => void;

  /**
   * Actions to be performed on the user authentication with accessToken
   * @type {() => void}
   */
  authenticateUserAccessToken: (accessToken?: string) => void;
}
