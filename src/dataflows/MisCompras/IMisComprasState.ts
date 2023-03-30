import { IPagedData } from "dataflows/IPagedData";

import { IOrder } from "./IOrder";
import { IOrderDetail } from "./IOrderDetail";

export interface IMisComprasState {
  /**
   * Flag that indicates if the order is loading.
   * @type {boolean}
   */
  isLoadingOrders: boolean;

  /**
   * User's orders.
   * @type {IOrder[]}
   */
  orders: IPagedData<IOrder>;

  /**
   * Flag that indicates if the order is loading.
   * @type {boolean}
   */
  isLoadingGetOrderByOrderId: boolean;

  /**
   * User's order.
   * @type {IOrderDetail}
   */
  order?: IOrderDetail;
}
