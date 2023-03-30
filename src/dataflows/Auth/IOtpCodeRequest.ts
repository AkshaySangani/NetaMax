export interface IOtpCodeRequest {
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
   * DeviceId request otp
   * @type {string}
   */
  deviceId: string;
}
