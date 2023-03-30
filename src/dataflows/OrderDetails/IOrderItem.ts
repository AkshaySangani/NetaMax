export interface IOrderItem {
  /**
   * The Item's name
   * @type {String}
   *
   * */
  name: string;
  /**
   * The Item's id
   * @type {String}
   *
   * */
  product_id?: number;
  /**
   * The Item's quantity bought
   * @type {String}
   *
   * */
  quantity: number;
  /**
   * The Item's image
   * @type {String}
   *
   * */
  image?: string;
  /**
   * The Items's unit price including taxes
   * @type {Number}
   *
   * */
  unit_price_incl_tax: number;
}
