import { ICouponCodeFormValues } from "./CouponCode/ICouponCodeFormValues";
import { INameAndTermConditionsFormValues } from "./NameAndTermConditions/INameAndTermConditionsFormValues";
import { IPhoneNumberFormValues } from "./PhoneNumber/IPhoneNumberFormValues";
import { IPostalCodeFormValues } from "./PostalCode/IPostalCodeFormValues";
import { IVerificationCodeFormValues } from "./VerificationCode/IVerificationCodeFormValue";

export type ICheckoutFormValues = INameAndTermConditionsFormValues &
  IPhoneNumberFormValues &
  IVerificationCodeFormValues &
  IPostalCodeFormValues &
  ICouponCodeFormValues;
