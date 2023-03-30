export interface IOtpValidationCodeRequest {
  /**
   * The customer phone number
   * @type {string}
   */
  origin: string;

  /**
   * Platform request otp
   * @type {string}
   */
  platform: string;

  /**
   * OTP Code to validate
   * @type {string}
   */
  code: string;
}
