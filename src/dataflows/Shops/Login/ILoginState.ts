import { ShopsLoginWizardSteps } from "constants/shopsConstants";

import { IShopUser } from "../IShopUser";

export interface ILoginState {
  /**
   * The current step in the shops login process.
   * @type {ShopsLoginWizardSteps}
   */
  currentStep: ShopsLoginWizardSteps;

  /**
   * Verification phone countdown timer.
   * @type {number}
   */
  countDown: number;

  /**
   * Indicates if otp code is loading
   * @type {Boolean}
   */
  isSendingOtpCode: boolean;

  /**
   * OTP Code Error Message
   * @type {String}
   */
  otpCodeError: string;

  /**
   * Indicates if login in is loading
   * @type {boolean}
   */
  isLoadingLogIn: boolean;

  /**
   * Indicates if user is authenticated
   * @type {boolean}
   */
  isAuth: boolean;

  /**
   * Shop user token auth
   * @type {String}
   */
  token?: string;

  /**
   * Property with data shop
   * @type {IShopUser}
   */
  shopUser?: IShopUser[];

  /**
   * Indicates if the otp drawer is open
   * @type {boolean}
   */
  isOtpDrawerOpen: boolean;
}
