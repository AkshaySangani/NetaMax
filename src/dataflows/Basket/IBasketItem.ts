export interface IBasketItem {
  /**
   * The unique identifier for the item.
   * @type {string}
   */
  id: string;

  /**
   * The name of the item.
   * @type {string}
   */
  name: string;

  /**
   * The price of the item.
   * @type {number}
   */
  price: number;

  /**
   * Item old price.
   * @type {number}
   */
  oldPrice: number;

  /**
   * The quantity of the item.
   * @type {number}
   */
  quantity: number;

  /**
   * The maximum quantity of the item.
   * @type {number}
   **/
  maxQuantity: number;

  /**
   * The minimum quantity of the item.
   **/
  minQuantity?: number;

  /**
   * The picture of the item.
   * @type {string}
   */
  pictureUrl: string;

  /**
   * Is a number or code assigned to an item to be able to identify the item.
   * @type {string}
   */
  sku: string;

  /**
   * The category id of the selected item.
   * @type {string | number}
   */
  categoryId: string | number;

  /**
   * The delivery date.
   * @type {number}
   */
  deliveryDateId: number;

  /**
   * The delivery date name.
   * @type {string}
   */
  deliveryDateName: string;

  /**
   * The delivery date display order.
   * @type {number}
   */
  deliveryDateDisplayOrder: number;

  /**
   * Item stock quantity.
   * @type {number}
   */
  stockQuantity: number;
  /**
   * If it is different than 0 we check on stockQuantity,
   * otherwise, we don't.
   * @type {number}
   */
  manageInventoryMethodId: number;
}
