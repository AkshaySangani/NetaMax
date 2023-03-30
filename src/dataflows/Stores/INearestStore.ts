import { IStore } from "./IStore";
import { ILocation } from "./IStoreState";

export interface INearestStore extends IStore {
  /**
   * The distance in meters to the store
   * @type {string}
   */
  storeDistance: string;

  /**
   *  The distance in minutes to the store
   * @type {string}
   */
  storeDistanceInMinutes: string;

  /**
   * Location coordinates of the store.
   * @type {ILocation}
   */
  location: ILocation;
}
