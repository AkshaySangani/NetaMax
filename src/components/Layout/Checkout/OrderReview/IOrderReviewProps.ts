import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";

import { IBasketItem } from "dataflows/Basket/IBasketItem";
import { ICouponCodeFormValues } from "dataflows/Checkout/CouponCode/ICouponCodeFormValues";
import { ICoupon } from "dataflows/Checkout/ICoupon";
import { IChallenge } from "dataflows/GanaDinero/IChallenge";
import { INearestStore } from "dataflows/Stores/INearestStore";

export interface IOrderReviewProps {
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
   * The  store object
   * @type {INearestStore}
   **/
  selectedStore?: INearestStore;

  /**
   * The  customer name
   * @type {string}
   **/
  customerName: string;

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
   * The code coupon fetch
   * @type {() => void}
   */
  fetchCode: () => void;

  /**
   * The loader coupon fetch
   * @type {boolean}
   */
  isCheckingCoupon: boolean;

  /**
   * The array of coupons
   * @type {ICoupon[]}
   */
  coupon?: ICoupon[];

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
   * Remove coupon code action
   * @type {() => void}
   **/
  removeCoupon: () => void;

  /**
   * Indicates when the order review is loading
   * @type {boolean}
   */
  isLoadingOrderReview: boolean;

  /**
   * Go to FIND_STORE step action
   * @type {() => void}
   **/
  updateStore: () => void;

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
   * Indicates challenge status for each user.
   * @type {number}
   */
  statusChallenges: IChallenge[];

  /**
   * If coupon input is visible
   * @type {boolean}
   */
  couponInputVisible: boolean;

  /**
   * Open/closes coupon input
   * @type {() => void}
   */
  handleCouponVisible: () => void;

  /**
   * If pays with monetas
   * @type {boolean}
   */
  payWithMonetas: boolean;

  /**
   * Handles if pays with monetas
   * @type {() => void}
   */
  handlePayWithMonetas: () => void;

  /**
   * Total monetas amount
   * @type {number}
   */
  totalMonetasAmount: number;

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
}
