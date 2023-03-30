import { CheckoutWizardSteps, OrderStatus } from "constants/checkoutConstants";

import { ICoupon } from "./ICoupon";

export interface ICheckoutState {
  /**
   * The current step in the checkout process.
   * @type {CheckoutWizardSteps}
   */
  currentStep: CheckoutWizardSteps;

  /**
   * Indicates whether the checkout panel is open.
   * @type {boolean}
   **/
  isOpen: boolean;

  /**
   * Indicates whether the order is being placed.
   * @type {boolean}
   **/
  isPlacingOrder: boolean;

  /**
   * The error message to display in case of the order not being placed.
   * @type {string}
   **/
  placeOrderErrorMessage?: string;

  /**
   * Indicates whether the coupon is being verified.
   * @type {boolean}
   **/
  isCheckingCoupon: boolean;

  /**
   * Indicates the coupon code.
   * @type {ICoupon[]}
   **/
  coupon?: ICoupon[];

  /**
   * Indicates the order status.
   * @type {OrderStatus}
   **/
  orderStatus: OrderStatus;

  /**
   * Verification phone countdown timer.
   * @type {number}
   */
  countDown: number;

  /**
   * Coupon error message.
   * @type {string}
   */
  couponErrorMessage?: string;

  /**
   * Indicates if the user wants to use his monetas in this purchase
   * @type {boolean}
   */
  payWithMonetas: boolean;

  /** Indicates whether the checkout panel is open for login steps.
   * @type {boolean}
   */
  onlyLoginSteps: boolean;
}
