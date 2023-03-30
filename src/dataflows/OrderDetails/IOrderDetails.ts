import { IOrderItem } from "./IOrderItem";

export interface IOrderDetails {
  /**
   * The order items array
   * @type {IOrderItem[]}
   */
  items: IOrderItem[];

  /**
   * The order's total
   * @type {number}
   */
  order_total: number;

  /**
   * The order's subtotal excluding tax
   * @type {number}
   */
  order_subtotal_excl_tax: number;

  /**
   * The order's discount
   * @type {number}
   */
  order_discount: number;
}
