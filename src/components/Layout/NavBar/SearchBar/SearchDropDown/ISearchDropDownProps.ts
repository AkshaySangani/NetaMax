import { IProduct } from "dataflows/Product/IProduct";

export interface ISearchDropDownProps {
  /**
   * The input value.
   * @type {string}
   */
  value?: string;

  /**
   * The product list.
   * @type {IProduct[]}
   */
  products?: IProduct[];

  /**
   * Indicates if the search products are loading
   * @type {boolean}
   **/
  isLoadingSearchProduct: boolean;

  /**
   * The empty search message
   * @type {string}
   */
  emptySearchMessage: string;

  /**
   * Indicates if the search has more products
   * @type {boolean}
   **/
  hasMoreProducts: boolean;

  /**
   * Clear the search products
   * @type {() => void}
   **/
  clearSearchProducts: () => void;

  /**
   * The add to cart event handler.
   * @type {(product: IProduct) => void}
   */
  onAddToBasketClick: (product: IProduct) => void;

  /**
   * The remove from cart event handler.
   * @type {(product: IProduct) => void}
   */
  onRemoveFromBasketClick: (product: IProduct) => void;

  /**
   * Gets the quantity of the product.
   * @type {(product: IProduct) => number}
   */
  getQtyInBasket: (product: IProduct) => number;

  /**
   * Handles "Ver más" click
   * @type {() => void}
   **/
  handleSearchProducts: () => void;
}
