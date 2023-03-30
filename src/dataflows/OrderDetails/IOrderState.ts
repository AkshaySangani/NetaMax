import { IOrderDetails } from "./IOrderDetails";

export interface IOrderState {
  /**
   * The order details object
   * @type {IOrderDetails[]}
   */
  orderDetails: IOrderDetails;

  /**
   * indicates if is loading the orders call
   * @type {boolean}
   **/
  isLoadingOrder: boolean;
}
