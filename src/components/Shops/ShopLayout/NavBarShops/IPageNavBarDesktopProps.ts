import { IShopUser } from "dataflows/Shops/IShopUser";

export interface IPageNavBarDesktopProps {
  /**
   * The shop user data
   * @type {IShopUser}
   **/
  shopUser?: IShopUser[];
  /**
   * The WHATSAPP url
   * @type {string}
   **/
  wspUrl: string;
  /**
   * Handles logout action
   * @type {() => void}
   **/
  logout: () => void;
}
