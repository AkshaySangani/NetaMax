import { IShopUser } from "dataflows/Shops/IShopUser";

export interface INavBarShopsProps {
  /**
   * The shop user data
   * @type {IShopUser}
   **/
  shopUser?: IShopUser[];
  /**
   * Handles logout action
   * @type {() => void}
   **/
  logout: () => void;
}
