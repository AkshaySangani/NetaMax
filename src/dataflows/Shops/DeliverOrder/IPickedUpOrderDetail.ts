import { ICustomer } from "dataflows/Auth/ICustomer";

import { IItem } from "../IItem";

export interface IPickedUpOrderDetail {
  /**
   * Indicates wether the pick up authentication token is active.
   * @type {string | undefined}
   */
  name: string | undefined;

  /**
   * The order total amount.
   * @type {number}
   */
  orderTotal: number;

  /**
   * The order subtotal amount.
   * @type {number}
   */
  orderSubtotalInclTax: number;

  /**
   * The order discount amount.
   * @type {number}
   */
  orderDiscount: number;

  /**
   * The order products amount.
   * @type {number}
   */
  productsAmount: number | undefined;

  /**
   * The order details associated to the sent token.
   * @type {boolean}
   */
  productsOrder: IItem[];

  /**
   * The information related to the customer.
   * @type {ICustomer}
   */
  customer?: ICustomer;
}
