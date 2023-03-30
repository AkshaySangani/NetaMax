import { ICoupon } from "dataflows/Checkout/ICoupon";
import { ReactElement } from "react";

export interface IOrderSuccessContainerProps {
  /**
   * The text for the sharing discount code whatsapp message.
   * @type {string}
   */
  shareDiscountCodeText: string;

  /**
   * the loader component
   * @type {ReactElement}
   **/
  loader: ReactElement;

  /**
   * The partial price of the items in the cart
   * @type {number}
   */
  partialSumSuccess: number;

  /**
   * The coupon sum
   * @type {number}
   */
  couponSumSuccess: number;

  /**
   * The monetas sum
   * @type {number}
   */
  monetasSumSuccess: number;

  /**
   * The total price for items in the cart
   * @type {number}
   */
  totalSumSuccess: number;

  /**
   * Coupon if used
   * @type {ICoupon[]}
   */
  couponSuccess?: ICoupon[];
}
