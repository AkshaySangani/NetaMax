import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";

import { IShopsStepContainerProps } from "../IShopsStepContainerProps";

export interface IPhoneNumberContainerProps extends IShopsStepContainerProps {
  /**
   * The phone number form values
   * @type {IPhoneNumberFormValues}
   **/
  phoneNumberFormValues?: IPhoneNumberFormValues;

  /**
   * Actions to be performed on the user registration
   * @type {() => void}
   **/
  sendOtpCode?: (phone: string) => void;

  /**
   * The reset countDown function
   * @type {() => void}
   */
  resetCountDown?: () => void;
}
