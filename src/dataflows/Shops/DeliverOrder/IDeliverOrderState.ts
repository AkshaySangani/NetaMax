import { IPickedUpOrderDetail } from "./IPickedUpOrderDetail";

export interface IDeliverOrderState {
  /**
   * Indicates wether the pick up authentication panel is open or not.
   * @type {boolean}
   */
  isOpen: boolean;

  /**
   * Indicates wether the pick up authentication token is being sent to the BE.
   * @type {boolean}
   */
  isLoadingPickUpToken: boolean;

  /**
   * Indicates if the order is being delivered
   * @type {boolean}
   */
  isDeliveringOrder: boolean;

  /**
   * The order details associated to the sent token
   * @type {IPickedUpOrderDetail}
   */
  orderDetail?: IPickedUpOrderDetail;

  /**
   * Indicates if the order was delivered correctly
   * @type {boolean}
   */
  deliverSuccess: boolean;

  /**
   * The token error message
   * @type {string}
   */
  tokenErrorMessage?: string;

  /**
   * The deliver error message
   * @type {string}
   */
  deliverErrorMessage?: string;
}
