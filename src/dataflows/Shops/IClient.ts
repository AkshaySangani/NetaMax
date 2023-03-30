export interface IClient {
  /**
   * Client's id
   * @type {string}
   */
  id: string;

  /**
   * Client's username
   * @type {string}
   */
  userName: string;

  /**
   * Client's phone number
   * @type {string}
   */
  phone: string;

  /**
   * Client's customer id
   * @type {string}
   */
  customerId: string;

  /**
   * Client's number of orders
   * @type {number}
   */
  numberOfOrders: number;

  /**
   * Client's days ago from last order
   * @type {number}
   */
  daysAgoLastOrder: number;

  /**
   * The Customer's Store URL
   * @type {String}
   *
   * */
  url: string;
}
