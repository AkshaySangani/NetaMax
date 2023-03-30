import { IProduct } from "dataflows/Product/IProduct";

export interface ISectionContainerProps {
  /**
   * Action for product click.
   * @type {(product: IProduct) => void}
   */
  onProductClick: (product: IProduct) => void;
}
