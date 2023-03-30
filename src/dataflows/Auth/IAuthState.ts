import { ICustomer } from "./ICustomer";

export interface IAuthState {
  /**
   * The JWT token
   * @type {string}
   */
  accessToken?: string;

  /**
   * The refresh token
   * @type {string}
   **/
  refreshToken?: string;

  /**
   * the device id
   * @type {string}
   */
  deviceId: string;

  /**
   * Flag to indicate the OTP code was sent successfully.
   * @type {boolean}
   */
  isOtpSent: boolean;

  /**
   * The customer
   * @type {ICustomer}
   **/
  customer?: ICustomer;

  /**
   * indicates if is loading the login call
   * @type {boolean}
   **/
  isLoadingLogIn: boolean;

  //TODO: this is a temporary solution to register the customer,
  //      remove once backend is ready
  /**
   * indicates if is loading the register call
   * @type {boolean}
   **/
  isSendingOtpCode: boolean;

  /**
   * indicates if is loading the register zipcode call
   * @type {boolean}
   **/
  isSendingZipCode: boolean;

  /**
   * indicates if is loading the order review screen
   * @type {boolean}
   **/
  //TODO: Rename this property to isLoadingUserInfo
  isLoadingOrderReview: boolean;

  /**
   * The error message
   * @type {string}
   */
  errorMessage?: string;

  /**
   * Success validation otp
   * @type {boolean}
   */
  validateOtpSuccess: boolean | undefined;

  /**
   * Access token for that user can invoke login
   * @type {boolean}
   */
  accessTokenLogin: string | undefined;
}
