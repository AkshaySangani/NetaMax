import { OtpChannel } from "constants/authConstants";

export interface IOtpCodeNotification {
  /**
   * The chat platform used to send the OTP code.
   * @type {OtpChannel}
   **/
  chatPlatform: OtpChannel;

  /**
   * The customer phone number
   * @type {string}
   */
  platformContactId: string;

  /**
   * Name or id of the rule used to send the OTP code.
   * @type {string}
   */
  ruleNameOrId: string;

  /**
   * OTP code params.
   * @type {{  Codigo: string; }}
   */
  params: {
    Nombre: string;
    Codigo: string;
  };
}
