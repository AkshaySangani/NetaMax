import { IBasketItem } from "dataflows/Basket/IBasketItem";

export interface IOrderSplitterProps {
  /**
   * The basket items to display
   * @type {IBasketItem[]}
   */
  basketItems: IBasketItem[];

  /**
   * Redirect to the previuos step
   * @type {() => void}
   */
  loadPreviousStep: () => void;
}
