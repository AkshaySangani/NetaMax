import { IProductDetail } from "dataflows/MisCompras/IProductDetail";

export interface IOrderReviewModalProps {
  /**
   * The products order.
   * @type {Pick<IProductDetail, "quantity" | "id" | "seoFilename" | "name" | "price">[]}
   */
  productsOrder: Pick<IProductDetail, "quantity" | "id" | "seoFilename" | "name" | "price">[];

  /**
   * The subtotal amount of the order.
   * @type {number}
   */
  orderSubtotalInclTax: number;

  /**
   * indicates if the modal is open.
   * @type {boolean}
   */
  isOpen: boolean;

  /**
   * The close modal function.
   * @type {() => void}
   */
  onClose: () => void;
}
