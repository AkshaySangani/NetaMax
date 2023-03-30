import { IProduct } from "../IProduct";

export interface ISelectedProductState {
  /**
   * The selected product.
   * @type {IProduct}
   */
  product?: IProduct;

  /**
   * Is loading the product.
   * @type {boolean}
   **/
  isLoading: boolean;
}
