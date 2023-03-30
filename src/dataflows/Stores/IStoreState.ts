import { INearestStore } from "./INearestStore";
import { IStore } from "./IStore";

export interface IStoreState {
  /**
   * The array of stores
   * @type {IStore}
   **/
  store?: IStore;

  /**
   * Indicates if the products are loading.
   * @type {boolean}
   */
  isLoadingStore: boolean;

  /**
   * Indicates if the nearest stores are loading
   * @type {boolean}
   **/
  isLoadingNearestStores: boolean;

  /**
   * Indicates the nearest stores
   * @type {INearestStore[]}
   **/
  nearestStores: INearestStore[];

  /**
   * The error message
   * @type {string}
   */
  errorMessage?: string;

  /**
   * The error message
   * @type {ILocation}
   */
  userLocation?: ILocation;

  /**
   * selected store in map
   * @type {INearestStore}
   */
  selectedStore?: INearestStore;

  /**
   * Distance for the current locations search
   * @type {number}
   */
  circleDistance: number;
}

export interface ILocation {
  /**
   * Locations latitude
   * @type {number}
   */
  lat: number;

  /**
   * Locations longitude
   * @type {number}
   */
  lng: number;

  /**
   * Address name if possible
   * @type {string}
   */
  addressName?: string;
}
