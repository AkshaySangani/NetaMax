import { ICouponCodeFormValues } from "dataflows/Checkout/CouponCode/ICouponCodeFormValues";
import { ICoupon } from "dataflows/Checkout/ICoupon";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

export interface ICouponInputProps {
  /**
   * If the input is visible
   * @type {boolean}
   */
  couponInputVisible: boolean;

  /**
   * Handles the input visibility
   * @type {() => void}
   */
  handleCouponVisible: () => void;

  /**
   * The array of coupons
   * @type {ICoupon[]}
   */
  coupon?: ICoupon[];

  /**
   * Errors for the form fields.
   * @type {DeepMap<Partial<ICouponCodeFormValues>, FieldError | undefined>}
   */
  errors: DeepMap<Partial<ICouponCodeFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {UseFormRegister<ICouponCodeFormValues>}
   */
  register: UseFormRegister<ICouponCodeFormValues>;

  /**
   * The loader coupon fetch
   * @type {boolean}
   */
  isCheckingCoupon: boolean;

  /**
   * The code coupon fetch
   * @type {() => void}
   */
  fetchCode: () => void;
}
