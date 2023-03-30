import { IItem } from "dataflows/Shops/IItem";

export interface IOrderTableProps {
  /**
   * The Subtotal Order
   * @type {Number}
   *
   * */
  subtotal: number;

  /**
   * The Discount Order
   * @type {Number}
   *
   * */
  discount: number;

  /**
   * The total Order
   * @type {Number}
   *
   * */
  total: number;

  /**
   * The order's item array
   * @type {IItem}
   *
   * */
  objects: IItem[];
}
