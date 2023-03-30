import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";

import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IPhoneNumberContainerProps extends ICheckoutStepContainerProps {
  /**
   * The phone number form values
   * @type {IPhoneNumberFormValues}
   **/
  phoneNumberFormValues?: IPhoneNumberFormValues;

  /**
   * Send the OTP code
   * @type {() => void}
   **/
  sendOtpCode: (phone: string) => void;
}
