import { IProduct } from "./IProduct";

export interface IPaginatedProduct {
  /**
   * The array of products in the low price offers section.
   * @type {IProduct[]}
   **/
  products: IProduct[];

  /**
   * The items per page low price offers.
   * @type {number}
   **/
  productsPerPage: number;

  /**
   * The pager to low price offers.
   * @type {number}
   **/
  currentPage: number;

  /**
   * The total number of product pages.
   * @type {number}
   */
  totalPages: number;

  /**
   * Is loading the products.
   * @type {boolean}
   **/
  isLoading: boolean;
}
