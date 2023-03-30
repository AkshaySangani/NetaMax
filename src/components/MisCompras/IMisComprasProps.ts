import { IOrder } from "dataflows/MisCompras/IOrder";

export interface IMisComprasProps {
  /**
   * The customer's orders.
   * @type {IOrder[]}
   */
  orders?: IOrder[];

  /**
   * Indicates if there are more orders to load.
   * @type {boolean}
   */
  hasMoreOrders: boolean;

  /**
   * load the next page of orders
   * @type {() => void}
   **/
  loadNextPage: () => void;
}
