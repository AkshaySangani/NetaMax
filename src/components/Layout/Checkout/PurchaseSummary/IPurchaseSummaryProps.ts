import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

import { ICouponCodeFormValues } from "dataflows/Checkout/CouponCode/ICouponCodeFormValues";
import { ICoupon } from "dataflows/Checkout/ICoupon";

export interface IPurchaseSummaryProps {
  /**
   * The total net price of the items in the cart without discount.
   * @type {number}
   */
  totalNetPrice: number;

  /**
   * Errors for the form fields.
   * @type {DeepMap<Partial<ICouponCodeFormValues>, FieldError | undefined>}
   */
  errors?: DeepMap<Partial<ICouponCodeFormValues>, FieldError | undefined>;

  /**
   * The form register.
   * @type {UseFormRegister<ICouponCodeFormValues>}
   */
  register?: UseFormRegister<ICouponCodeFormValues>;

  /**
   * The code coupon fetch
   * @type {() => void}
   */
  fetchCode?: () => void;

  /**
   * The loader coupon fetch
   * @type {boolean}
   */
  isCheckingCoupon?: boolean;

  /**
   * The array of coupons
   * @type {ICoupon[]}
   */
  coupon?: ICoupon[];

  /**
   * Indicates the discount amount applied
   * @type {number}
   */
  discountAmount: number;

  /**
   * Indicates the user's wallet amount
   * @type {number}
   */
  walletAmount: number;

  /**
   * Indicates the total amount substracting discount, wallet and coupons.
   * @type {number}
   */
  totalAmount: number;

  /**
   * If coupon input is visible
   * @type {boolean}
   */
  couponInputVisible?: boolean;

  /**
   * If pays with monetas
   * @type {boolean}
   */
  payWithMonetas: boolean;

  /**
   * Open/closes coupon input
   * @type {() => void}
   */
  handleCouponVisible?: () => void;
}
