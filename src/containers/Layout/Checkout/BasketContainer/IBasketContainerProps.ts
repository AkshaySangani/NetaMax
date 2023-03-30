import { IBasketItem } from "dataflows/Basket/IBasketItem";

import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IBasketContainerProps extends ICheckoutStepContainerProps {
  /**
   * The basket items
   * @type {IBasketItem[]}
   **/
  basketItems: IBasketItem[];

  /**
   * Action to add an item to the basket
   * @type {(item: IBasketItem) => void}
   **/
  onAddToBasket: (productId: string) => void;

  /**
   * Action to remove an item from the basket
   * @type {(productId: string) => void}
   */
  onRemoveFromBasket: (productId: string) => void;
}
