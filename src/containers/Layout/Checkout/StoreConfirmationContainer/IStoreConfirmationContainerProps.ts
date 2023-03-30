import { Dispatch, MutableRefObject, SetStateAction } from "react";

import { INearestStore } from "dataflows/Stores/INearestStore";

export interface IStoreConfirmationContainerProps {
  /**
   * Selected store
   * @type {INearestStore}
   */
  store: INearestStore;

  /**
   * Confirms the store
   * @type {() => void}
   */
  handleStoreConfirmation: () => void;

  /**
   * Prop description
   * @type {MutableRefObject<google.maps.Map | undefined>}
   */
  mapRef: MutableRefObject<google.maps.Map | undefined>;

  /**
   * Sets directions
   * @type {Dispatch<SetStateAction<google.maps.DirectionsResult | undefined>>}
   */
  setDirections: Dispatch<SetStateAction<google.maps.DirectionsResult | undefined>>;

  /**
   * Google distance in minutes
   * @type {string}
   */
  googleDistance: string;
}
