import { IProductDetail } from "./IProductDetail";

export interface IOrderDetail {
  /**
   * The total amount of the order.
   * @type {number}
   */
  orderTotal: number;

  /**
   * The delivery date.
   * @type {string}
   */
  currentETA: string;

  /**
   * The company name.
   * @type {string}
   */
  name: string;

  /**
   * The subtotal without discounts.
   * @type {number}
   */
  orderSubtotalInclTax: number;

  /**
   * The order discount
   * @type {number}
   */
  orderDiscount: number;

  /**
   * The company address
   * @type {string}
   */
  companyAddress: string;

  /**
   * The order id
   * @type {string}
   */
  id: string;

  /**
   * The store phone number
   * @type {string}
   */
  companyPhoneNumber: string;

  /**
   * The products order.
   * @type {IProduct[]}
   */
  productsOrder: IProductDetail[];

  /**
   * The order status id
   * @type {string}
   */
  orderStatusId: string;
}
