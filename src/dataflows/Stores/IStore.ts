import { ILocation } from "./IStoreState";

export interface IStore {
  /**
   * The unique identifier for the item.
   * @type {string}
   */
  id: string;

  /**
   * The name identifies the item.
   * @type {string}
   */
  name: string;

  /**
   * Is a url to the store
   * @type {string}
   */
  url: string;

  /**
   * Is a host to the store
   * @type {string}
   */
  hosts: string;

  /**
   * Company name.
   * @type {string}
   */
  companyName: string;

  /**
   * Company name.
   * @type {string}
   */
  companyAddress: string;

  /**
   * Company phone number.
   * @type {string}
   */
  companyPhoneNumber: string;
}

export interface IResponse {
  stores: IStoreResponse[];
  distance: number;
}

export interface IStoreResponse {
  /**
   * The stores id
   * @type {string}
   */
  id: string;

  /**
   * The stores name
   * @type {string}
   */
  name: string;

  /**
   * The stores url
   * @type {string}
   */
  url: string;

  /**
   * The stores hosts
   * @type {string}
   */
  hosts: string;

  /**
   * The stores company name
   * @type {string}
   */
  companyName: string;

  /**
   * The stores company address
   * @type {string}
   */
  companyAddress: string;

  /**
   * The stores company phone number
   * @type {string}
   */
  companyPhoneNumber: string;

  /**
   * The stores distance in meters
   * @type {string}
   */
  storeDistance: string;

  /**
   * The stores distance in minutes
   * @type {string}
   */
  storeDistanceInMinutes: string;

  /**
   * The stores latitud
   * @type {string}
   */
  latitud: string;

  /**
   * The stores longitud
   * @type {string}
   */
  longitud: string;

  /**
   * Location coordinates of the store.
   * @type {ILocation}
   */
  location?: ILocation;
}
