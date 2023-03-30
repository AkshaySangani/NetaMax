import { ICoupon } from "dataflows/Checkout/ICoupon";
import { INearestStore } from "dataflows/Stores/INearestStore";

export interface IOrderSuccessProps {
  /**
   * The text for the sharing discount code whatsapp message.
   * @type {string}
   */
  shareDiscountCodeText: string;

  /**
   * The on referral share click handler.
   * @type {() => void}
   */
  onReferralShareButtonClick: () => void;

  /**
   * Shows the CoinAward card
   * @type {boolean}
   */
  showCoinAwardedCard: boolean;

  /**
   * The awarded amount
   * @type {number}
   */
  priceAmount?: number;

  /**
   * Formatted Phone number
   * @type {string}
   */
  formattedPhone: string;

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
   * If pays with monetas
   * @type {boolean}
   */
  payWithMonetas: boolean;

  /**
   * The array of coupons
   * @type {ICoupon[]}
   */
  coupon?: ICoupon[];

  /**
   * Selected store
   * @type {INearestStore}
   */
  selectedStore?: INearestStore;

  /**
   * Customer name
   * @type {string}
   */
  customerName?: string;
}
