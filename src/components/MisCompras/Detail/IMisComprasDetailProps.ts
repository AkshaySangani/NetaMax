import { IOrderDetail } from "dataflows/MisCompras/IOrderDetail";

export interface IMisComprasDetailProps {
  /**
   * The detail of the order.
   * @type {IOrderDetail}
   */
  order: IOrderDetail;
}
