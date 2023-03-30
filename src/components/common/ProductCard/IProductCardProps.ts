import { IProduct } from "dataflows/Product/IProduct";

export interface IProductCardProps {
  /**
   * The product to display
   * @type {IProduct}
   */
  product: IProduct;

  /**
   * The quantity of the product on the cart
   * @type {number}
   */
  qtyOnBasket?: number;

  /**
   * On product click action.
   * @type {(product: IProduct) => void}
   */
  onProductClick: (product: IProduct) => void;

  /**
   * Add to cart action
   * @type {(product: IProduct) => void}
   */
  addToCart: (product: IProduct) => void;

  /**
   * Remove from cart action
   * @type {(product: IProduct) => void}
   **/
  removeFromCart: (product: IProduct) => void;
  /**
   * Indicates which card should the component show.
   * @type {boolean}
   */
  productDetail?: boolean;
}
