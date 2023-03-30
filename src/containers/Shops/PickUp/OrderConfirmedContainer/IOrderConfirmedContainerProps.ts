import { IPickedUpOrderDetail } from "dataflows/Shops/DeliverOrder/IPickedUpOrderDetail";
import { IShopUser } from "dataflows/Shops/IShopUser";

export interface IOrderConfirmedContainerProps {
  /**
   * Close the Pick-up panel
   * @type {() => void}
   **/
  onClose: () => void;

  /**
   * Redirect to the verification phone step
   * @type {() => void}
   **/
  onVerify: (number: number) => void;

  /**
   * The picked up order detail
   * @type {IPickedUpOrderDetail}
   **/
  orderDetail: IPickedUpOrderDetail | undefined;

  /**
   * Validates if we got to this page from the token flow or not
   * @type {boolean}
   **/
  withToken: boolean;

  /**
   * The current shop to track events
   * @type {IShopUser}
   */
  currentShop?: IShopUser;
}
