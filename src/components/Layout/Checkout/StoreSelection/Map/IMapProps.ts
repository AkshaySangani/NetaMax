import { INearestStore } from "dataflows/Stores/INearestStore";
import { ILocation } from "dataflows/Stores/IStoreState";

export default interface IMapProps {
  /**
   * The maps zoom
   * @type {number}
   */
  mapZoom: number;

  /**
   * The maps zoom
   * @type {boolean}
   */
  isZipCode: boolean;

  /**
   * the nearests stores
   * @type {INearestStore[]}
   */
  stores: INearestStore[];

  /**
   * Location coordenates of the map center.
   * @type {ILocation}
   */
  mapCenter: ILocation;

  /**
   * the selected store
   * @type {INearestStore}
   */
  selectedStore?: INearestStore;

  /**
   * handles select store
   * @type {(store: INearestStore) => void}
   */
  handleSelectStore: (store: INearestStore) => void;

  /**
   * When Google maps loads
   * @type {(map: google.maps.Map) => void}
   */
  onLoad: (map: google.maps.Map) => void;

  /**
   * Google maps options
   * @type {google.maps.MapOptions}
   */
  options: google.maps.MapOptions;

  /**
   * User location
   * @type {ILocation}
   */
  userLocation?: ILocation;

  /**
   * direction between user and store
   * @type {google.maps.DirectionsResult}
   */
  directions?: google.maps.DirectionsResult;

  /**
   * Gets corresponding marker image
   * @type {(store: INearestStore) => string}
   */
  getMarkerIconImage: (store: INearestStore) => string;

  /**
   * Distance for the circle when zip code is used
   * @type {number}
   */
  circleDistance: number;

  /**
   * clear the error message
   * @type {() => void}
   */
  handleClearErrorMessage: () => void;

  /**
   * Error message
   * @type {string}
   */
  errorMessage?: string;

  /**
   * If it is loading the stores
   * @type {boolean}
   */
  isLoadingNearestStores: boolean;
}
