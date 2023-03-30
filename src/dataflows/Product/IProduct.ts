export interface IProduct {
  /**
   * The unique identifier for the item.
   * @type {string}
   */
  id: string;

  /**
   * The name identifies the item.
   * @type {string}
   */
  name: string;

  /**
   * Is a number or code assigned to an item to be able to identify the item.
   * @type {string}
   */
  sku: string;

  /**
   * Are the images to the item.
   * @type {string[]}
   */
  images: string[];

  /**
   * Item creation date in UTC format.
   * @type {Date}
   */
  createdOnUtc: Date;

  /**
   * Item creation date in UTC format.
   * @type {Date}
   */
  updatedOnUtc: Date;

  /**
   * Item image path.
   * @type {string}
   */
  seoFilename: string;

  /**
   * Item price.
   * @type {string}
   */
  price: string;

  /**
   * Item old price.
   * @type {string}
   */
  oldPrice: string;
  /**
   * Item order minimum quantity.
   * @type {number}
   */
  orderMinimumQuantity: number;

  /**
   * Item order maximum quantity.
   * @type {number}
   */
  orderMaximumQuantity: number;

  /**
   * Item pictureId.
   * @type {number}
   */
  pictureId?: number;

  /**
   * Item status.
   * @type {string}
   */
  status?: string;

  /**
   * The product category.
   * @type {string}
   */
  categoryId: string;
  /**
   * The product's stock quantity.
   * @type {number}
   */
  stockQuantity: number;
  /**
   * If it is different than 0 we check on stockQuantity,
   * otherwise, we don't.
   * @type {number}
   */
  manageInventoryMethodId: number;
  /**
   * The product description.
   * @type {string}
   */
  fullDescription: string;
  /**
   * The product deliveryDateId.
   * @type {number}
   */
  deliveryDateId: number;
  /**
   * The product deliveryDateDisplayOrder.
   * @type {number}
   */
  deliveryDateDisplayOrder: number;
  /**
   * The product deliveryDateName.
   * @type {string}
   */
  deliveryDateName: string;
}
