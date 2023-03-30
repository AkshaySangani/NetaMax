export interface IMobileBasketButton {
  /**
   * The total basket price
   * @type {number}
   */
  totalBasketPrice: number;

  /**
   * Total basket items
   * @type {number}
   */
  totalBasketItems: number;

  /**
   * The onOpen function to show the CHO flow
   * @type {() => void}
   */
  onOpen: () => void;
}
