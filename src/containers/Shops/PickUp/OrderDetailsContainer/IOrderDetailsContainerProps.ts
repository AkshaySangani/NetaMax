import { IPickedUpOrderDetail } from "dataflows/Shops/DeliverOrder/IPickedUpOrderDetail";
import { IShopUser } from "dataflows/Shops/IShopUser";

export interface IOrderDetailsContainerProps {
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

  /**
   * The current shop to track events
   * @type {IShopUser}
   */
  currentShop?: IShopUser;
}
