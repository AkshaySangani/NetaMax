import { OrderStatus } from "constants/checkoutConstants";
import { IBasketItem } from "dataflows/Basket/IBasketItem";
import { ICouponCodeFormValues } from "dataflows/Checkout/CouponCode/ICouponCodeFormValues";
import { ICoupon } from "dataflows/Checkout/ICoupon";

import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IOrderReviewContainerProps extends ICheckoutStepContainerProps {
  /**
   * The total net price of the items in the cart without discount.
   * @type {number}
   */
  totalNetPrice: number;
  /**
   * code from a coupon to get a discount
   * @type {string}
   */
  discountCoupon?: string;

  /**
   * Placing order function
   * @type {Function} place order callback
   */
  placeOrder: () => void;

  /**
   * The  customer name
   * @type {string}
   **/
  customerName: string;

  /**
   *  The coupon code form value
   * @type {ICouponCodeFormValues}
   * */
  couponCodeFormValues?: ICouponCodeFormValues;

  /**
   * The total discount price
   * @type {number}
   **/
  totalDiscountPrice: number;

  /**
   * The netaWallet amount
   * @type {string}
   **/
  customerCurrentNetaWallet: string;

  /**
   * The order status
   * @type {OrderStatus}
   **/
  orderStatus: OrderStatus;

  /**
   * Go to FIND_STORE step action
   * @type {() => void}
   **/
  updateStore: () => void;

  /**
   * The basket items
   * @type {IBasketItem[]}
   **/
  basketItems: IBasketItem[];

  /**
   * Redirect to the previuos step
   * @type {() => void}
   */
  loadPreviousStep: () => void;

  /**
   * Sets partial sum
   * @type {(val: number) => void}
   */
  setPartialSumSuccess: (val: number) => void;

  /**
   * Sets coupon sum
   * @type {(val: number) => void}
   */
  setCouponSumSuccess: (val: number) => void;

  /**
   * Sets monetas sum
   * @type {(val: number) => void}
   */
  setMonetasSumSuccess: (val: number) => void;

  /**
   * Sets total sum
   * @type {(val: number) => void}
   */
  setTotalSumSuccess: (val: number) => void;

  /**
   * setting coupon success
   * @type {(val: ICoupon[]) => void}
   */
  setCouponSuccess: (val: ICoupon[]) => void;
}
