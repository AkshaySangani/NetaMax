import { IPaginatedMetadata } from "dataflows/IPagedData";

import { IProduct } from "../IProduct";

export interface ISearchState {
  /**
   * The array of products shown in the searchbar.
   * @type {IProduct[]}
   **/
  products: IProduct[];

  /**
   * The products that are visualized in the searchbar.
   * @type {IProduct[]}
   */
  searchBarProducts: IProduct[];

  /**
   * Indicates if there are more product to show in the searchbar.
   * @type {boolean}
   **/
  hasMoreProducts: boolean;

  /**
   * The message to show in the searchbar in case of empty search.
   * @type {string}
   **/
  emptySearchMessage: string;

  /**
   * Object of metadata pagination
   * @type {IPaginatedMetadata}
   **/
  metadata: IPaginatedMetadata;

  /**
   * Indicates if the products are loading.
   * @type {boolean}
   **/
  isLoading: boolean;

  /**
   * Indicates if the searchbar is loading.
   * @type {boolean}
   */
  isLoadingSearchBarProducts: boolean;
}
