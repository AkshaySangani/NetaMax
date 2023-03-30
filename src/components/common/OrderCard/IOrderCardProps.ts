export interface IOrderCardProps {
  /**
   * The store name to be displayed
   * @type {string}
   */
  storeName: string;

  /**
   * The order date to be displayed
   * @type {string}
   **/
  date: Date;

  /**
   * The order total to be displayed
   * @type {number}
   */
  totalAmount: number;

  /**
   * The order preview images
   * @type {string[]}
   **/
  productImages: string[];

  /**
   * The total products to be displayed
   * @type {number}
   */
  totalProducts: number;

  /**
   * The order status tracking id
   * @type {string}
   */
  orderStatusId: string;

  /**
   * The order id
   * @type {string}
   */
  orderId: string;

  /**
   * The pick up token
   * @type {number}
   */
  pickUpToken: number;
}
