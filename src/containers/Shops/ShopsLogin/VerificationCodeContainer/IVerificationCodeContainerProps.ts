import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";

import { IShopsStepContainerProps } from "../IShopsStepContainerProps";

export interface IVerificationCodeContainerProps extends IShopsStepContainerProps {
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
   * Resend the verification code
   * @type {() => void}
   */
  resendOtpCode: () => void;

  /**
   * Redirect to the previous step
   * @type {() => void}
   */
  loadPreviousStep: () => void;

  /**
   * user's phone
   * @type {string}
   */
  userPhone?: string;

  /**
   * OTP code
   * @type {string}
   */
  otpCode?: string;
}
