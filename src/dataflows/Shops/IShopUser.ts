// This interface has uppercase attributes because backend sends it that way.
export interface IShopUser {
  /**
   * The shop id
   * @type {String}
   * */
  Id: string;

  /**
   * The store's company name
   * @type {String}
   * */
  CompanyName: string;

  /**
   * The Owner's Store Name
   * @type {String}
   * */
  Name: string;

  /**
   * The Store's company address
   * @type {String}
   * */
  CompanyAddress: string;
  /**
   * The Store's company url
   * @type {String}
   * */
  Url: string;

  /**
   * The Store's phone number
   * @type {String}
   * */
  CompanyPhoneNumber: string;

  /**
   * The Store's host
   * @type {String}
   * */
  Hosts: string;
}
