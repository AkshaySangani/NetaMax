export interface ICheckoutOrder {
  /**
   * The customer's id number.
   * @type {number}
   */
  customerId: number;
  /**
   * The store's address id number.
   * @type {number}
   */
  // addressId: number;
  // /**
  //  * The store's id number.
  //  * @type {number}
  //  */
  storeId?: string;
  /**
   * The discount coupon code.
   * @type {string}
   */
  discountCoupon: string;
  /**
   * The array of items in the basket.
   * @type {{id: string, quantity: number}[]}
   */
  basketItems: { id: string; quantity: number }[];
}
