import { IBasketItem } from "./IBasketItem";

export interface IBasketState {
  /**
   * The array of items in the basket.
   * @type {IBasketItem[]}
   */
  basketItems: IBasketItem[];
}
