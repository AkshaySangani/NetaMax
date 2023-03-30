export interface ISummaryEmptyProps {
  /**
   * The Url Link
   * @type {String}
   * */
  shopUrl: string;
  /**
   * The shopName
   * @type {String}
   * */
  shopName: string | undefined;
  /**
   * The shortStoreName
   * @type {String}
   * */
  shortStoreName: string | undefined;
  /**
   * The hasSummary
   * @type {Boolean}
   * */
  hasSummary: boolean | undefined;

  /**
   * The add event to share ligue
   * @type {() => void}
   **/
  onClickCompartirLiga: () => void;
}
