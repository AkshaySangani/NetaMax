import { IShopUser } from "dataflows/Shops/IShopUser";

export interface IShopsMenuProps {
  /**
   * The current shop
   * @type {IShopUser}
   */
  currentShop?: IShopUser;

  /**
   * Handles logout action
   * @type {() => void}
   **/
  logout: () => void;
}
