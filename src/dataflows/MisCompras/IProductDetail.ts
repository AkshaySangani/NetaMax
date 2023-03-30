import { IProduct } from "dataflows/Product/IProduct";

export interface IProductDetail extends IProduct {
  /**
   * The amout of products
   * @type {string}
   */
  quantity: string;
}
