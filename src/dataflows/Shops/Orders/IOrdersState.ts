import { IItem } from "../IItem";
import { IOrderShops } from "../IOrderShops";

export interface IOrdersState {
  /**
   * Current Orders List
   * @type {IOrderShops}
   */
  orders: IOrderShops[];

  /**
   * Is Loading Orders
   * @type {Boolean}
   */
  isLoadingOrders: boolean;

  /**
   * Order Items List
   * @type {IItem}
   */
  orderItems: IItem[];

  /**
   * Is Loading Order Items
   * @type {IProfitProps}
   */
  isLoadingOrderItems: boolean;
}
