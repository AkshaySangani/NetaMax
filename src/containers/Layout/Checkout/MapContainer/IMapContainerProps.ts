import { MutableRefObject } from "react";

import { INearestStore } from "dataflows/Stores/INearestStore";
import { ILocation } from "dataflows/Stores/IStoreState";

export interface IMapContainerProps {
  /**
   * Prop description
   * @type {MutableRefObject<google.maps.Map | undefined>}
   */
  mapRef: MutableRefObject<google.maps.Map | undefined>;

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
   * Directions drawed in map
   * @type {google.maps.DirectionsResult}
   */
  directions?: google.maps.DirectionsResult;
}
