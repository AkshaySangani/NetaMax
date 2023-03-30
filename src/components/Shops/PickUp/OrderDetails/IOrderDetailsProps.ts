import { IPickedUpOrderDetail } from "dataflows/Shops/DeliverOrder/IPickedUpOrderDetail";

export interface IOrderDetailsProps {
  /**
   * Redirect to the next step
   * @type {() => void}
   **/
  onVerify: (number: number) => void;

  /**
   * The picked up order detail
   * @type {IPickedUpOrderDetail}
   **/
  orderDetail: IPickedUpOrderDetail | undefined;
}
