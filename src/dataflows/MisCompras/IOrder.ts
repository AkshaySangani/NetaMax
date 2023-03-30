import { IProduct } from "dataflows/Product/IProduct";

export interface IOrder {
  /**
   * The order id
   * @type {string}
   */
  id: string;

  /**
   * The order status id
   * @type {string}
   */
  orderStatusId: string;

  /**
   * The sipping status id
   * @type {string}
   */
  shippingStatusId: string;

  /**
   * the current estimated time of arrival
   * @type {string}
   **/
  currentETA: string;

  /**
   * The total amount of the order
   * @type {string}
   **/
  //TODO: Backend should pass this as number.
  orderTotal: string;

  /**
   * The store name where the order was placed
   * @type {string}
   **/
  storeName: string;

  /**
   * The pick up token
   * @type {number}
   */
  pickUpToken: number;

  /**
   * The products included in the order
   * @type {{total: number, products: Pick<IProduct, "id" | "name" | "seoFilename">[]}}
   **/
  productOrders: {
    /**
     * The total number of products in the order
     * @type {number}
     */
    //TODO: Why we do need this? is it not the same that products.length?
    total: number;

    /**
     * The products included in the order
     * @type {Pick<IProduct, "id" | "name" | "seoFilename">[]}
     **/
    products: Pick<IProduct, "id" | "name" | "seoFilename">[];
  };
}
