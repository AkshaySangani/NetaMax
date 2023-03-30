export interface INopAuthState {
  /**
   * The JWT token
   * @type {string}
   */
  token?: string;

  /**
   * The refresh token
   * @type {string}
   **/
  refreshToken?: string;

  /**
   * The customer id
   * @type {number}
   **/
  customer_id?: number;

  /**
   * indicates if is loading the get token call
   * @type {boolean}
   **/
  isLoadingToken: boolean;
}
