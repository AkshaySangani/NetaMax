export interface ICategory {
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
   * Item image identifier.
   * @type {string}
   */
  seoFilename: string;

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
}
