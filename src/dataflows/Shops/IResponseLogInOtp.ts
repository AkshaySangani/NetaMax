import { IShopUser } from "./IShopUser";

export interface IResponseLogInOtp {
  /**
   * The token user
   * @type {String}
   *
   * */
  token: string;

  /**
   * The IShop user data
   * @type {IShopUser}
   *
   * */
  store: IShopUser[];
}
