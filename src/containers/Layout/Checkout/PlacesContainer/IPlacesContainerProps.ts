import { Dispatch, MutableRefObject, SetStateAction } from "react";

export interface IPlacesContainerProps {
  /**
   * The search value for the customer address
   * @type {string}
   */
  searchValue: string;

  /**
   * Indicates if its searching a zip code
   * @type {boolean}
   */
  isZipCode: boolean;

  /**
   * Sets directions
   * @type {Dispatch<SetStateAction<boolean>>}
   */
  setIsZipCode: Dispatch<SetStateAction<boolean>>;

  /**
   * The set state for the search value of the customer
   * @type {Dispatch<SetStateAction<string>>}
   */
  setSearchValue: Dispatch<SetStateAction<string>>;

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
   * Directions drawed in map
   * @type {google.maps.DirectionsResult}
   */
  directions?: google.maps.DirectionsResult;

  /**
   * Sets directions
   * @type {Dispatch<SetStateAction<google.maps.DirectionsResult | undefined>>}
   */
  setDirections: Dispatch<SetStateAction<google.maps.DirectionsResult | undefined>>;
}
