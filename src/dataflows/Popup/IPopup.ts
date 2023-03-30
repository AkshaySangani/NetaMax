export interface IPopup {
  /**
   * The unique identifier for the item.
   * @type {string}
   */
  id: string;

  /**
   * The banner text for the banner item.
   * @type {string}
   */
  bannerText: string;

  /**
   * The start date (in utc) for the popup item.
   * @type {string}
   */
  startDateUtc: string;

  /**
   * The end date (in utc) for the popup item.
   * @type {string}
   */
  endDateUtc: string;

  /**
   * The cta for the popup item.
   * @type {string}
   */
  cta: string;

  /**
   * If is a new store item.
   * @type {number}
   */
  isNewStore: number;

  /**
   * The image for the popup item.
   * @type {string}
   */
  seoFilename: string;

  /**
   * The prop for show or not the popup component.
   * @type {number}
   */
  isPromotionPopup: number;
}
