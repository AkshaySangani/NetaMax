import { IVerificationCodeStepProps } from "components/Layout/Checkout/VerificationCodeStep/IVerificationCodeStepProps";

export interface IVerificationCodeStepShopsProps extends IVerificationCodeStepProps {
  /**
   * Selector for OTP error message
   * @type {string}
   */
  errorOtpMessage?: string;
}
