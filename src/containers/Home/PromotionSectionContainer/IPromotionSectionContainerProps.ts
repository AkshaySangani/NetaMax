import { IPromotion } from "dataflows/Promotion/IPromotion";

export interface IPromotionSectionContainerProps {
  /**
   * The promotions to display
   * @type {IPromotion[]}
   **/
  promotions: IPromotion[];
}
