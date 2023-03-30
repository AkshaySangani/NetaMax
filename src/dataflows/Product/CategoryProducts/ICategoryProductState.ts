import { IPagedData } from "dataflows/IPagedData";

import { IPaginatedProduct } from "../IPaginatedProduct";
import { IProduct } from "../IProduct";

export interface ICategoryProductState extends IPaginatedProduct {
  /**
   * the home category products
   * @type {Record<string,IPagedData<IProduct>}
   */
  homeCategoryProducts: Record<string, IPagedData<IProduct>>;

  /**
   * Indicates if the home category products are loading
   * @type {boolean}
   **/
  isLoadingHomeCategoryProducts: boolean;
}
