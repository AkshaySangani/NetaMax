export interface ICustomer {
  /**
   * The customer's id.
   * @type {string}
   */
  id: string;

  /**
   * The customer's username.
   * @type {string}
   **/
  username: string;

  /**
   * The customer's name.
   * @type {string}
   */
  name: string;

  /**
   * The customer's email.
   * @type {string}
   **/
  email: string;

  /**
   * The customer's billing address id.
   * @type {string}
   **/
  billingAddress_Id: string;

  /**
   * The customer's shipping address id.
   * @type {string}
   **/
  shippingAddress_Id: string;

  /**
   * The customer's guid.
   * @type {string}
   */
  customerGuid: string;

  /**
   * is tax exempt flag, true if customer is tax exempt
   * @type {boolean}
   **/
  isTaxExempt: boolean;

  /**
   * The customer's affiliate id.
   * @type {string}
   **/
  affiliateId: string;

  /**
   * The customer's vendor id.
   * @type {string}
   */
  vendorId: string;

  /**
   * indicates if the customer has items in their cart
   * @type {boolean}
   **/
  hasShoppingCartItems: boolean;

  /**
   * the customer's store id
   * @type {string}
   **/
  registeredInStoreId: string;

  /**
   * the user neta wallet
   * @type {string}
   **/
  customerCurrentNetaWallet: string;
  /**
   * indicates if the user is new
   * @type {boolean}
   **/
  isNewUser: boolean;
  /**
   * the user's referral code
   * @type {string}
   **/
  referralCode: string;
  /**
   * the user's zip code
   * @type {string}
   **/
  ZipPostalCode: string;
  /**
   * the user's first name
   * @type {string}
   **/
  firstName?: string;
  /**
   * the user is deleted?
   * @type {boolean}
   **/
  deleted?: boolean;

  /**
   * indicates the store where the user made the last order
   * @type {string}
   **/
  LastOrderCompletedStoreId?: string;

  /**
   * indicates the store where the user has ordered the most
   * @type {string}
   **/
  FavoriteStoreId?: string;
}
