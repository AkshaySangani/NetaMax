import { IProduct } from "../IProduct";

export interface IRecommendedProductsState {
  /**
   * Recommended products array
   * @type {IProduct[]}
   */
  recommendedProducts: IProduct[];

  /**
   * Indicates if the recommeded products are loading
   * @type {boolean}
   **/
  isLoading: boolean;
}
