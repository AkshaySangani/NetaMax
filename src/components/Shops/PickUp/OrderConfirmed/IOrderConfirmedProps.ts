import { IPickedUpOrderDetail } from "dataflows/Shops/DeliverOrder/IPickedUpOrderDetail";
import { IShopUser } from "dataflows/Shops/IShopUser";

export interface IOrderConfirmedProps {
  /**
   * On close panel action
   * @type {() => void}
   **/
  handleClose: () => void;

  /**
   * On copy action
   * @type {() => void}
   **/
  handleCopy: () => void;

  /**
   * The button text
   * @type {string}
   **/
  copyText: string;

  /**
   * The picked up order detail
   * @type {IPickedUpOrderDetail}
   **/
  orderDetail: IPickedUpOrderDetail | undefined;

  /**
   * The current shop selected
   * @type {IPickedUpOrderDetail}
   **/
  currentShop: IShopUser | undefined;
}
