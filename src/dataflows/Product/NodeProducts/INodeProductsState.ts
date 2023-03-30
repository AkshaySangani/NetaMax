import { IPagedData } from "dataflows/IPagedData";

import { IPaginatedProduct } from "../IPaginatedProduct";
import { IProduct } from "../IProduct";

export interface INodeProductState extends IPaginatedProduct {
  /**
   * the home node products
   * @type {Record<string,IPagedData<IProduct>}
   */
  homeNodeProducts: Record<string, IPagedData<IProduct>>;

  /**
   * Indicates if the home node products are loading
   * @type {boolean}
   **/
  isLoadingHomeNodeProducts: boolean;
}
