import { IPostalCodeFormValues } from "dataflows/Checkout/PostalCode/IPostalCodeFormValues";

import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IPostalCodeContainerProps extends ICheckoutStepContainerProps {
  /**
   *  The postal code form values
   * @type {IPostalCodeFormValues}
   * */
  postalCodeFormValues?: IPostalCodeFormValues;

  /**
   * sending zip code to DB function
   * @type {Function} send zip code callback
   */
  sendZipCode: (zipcode: string) => void;
}
