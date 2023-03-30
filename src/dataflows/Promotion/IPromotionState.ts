import { IPromotion } from "./IPromotion";

export interface IPromotionState {
  /**
   * The array of Promotion in the sales section.
   * @type {IPromotion[]}
   */
  promotionItems: IPromotion[];

  /**
   * The selected product.
   * @type {IPromotion}
   */
  selectedPromotion?: IPromotion;

  /**
   * Indicates if the Promotion are loading.
   * @type {boolean}
   */
  isLoadingPromotionSection: boolean;
}
