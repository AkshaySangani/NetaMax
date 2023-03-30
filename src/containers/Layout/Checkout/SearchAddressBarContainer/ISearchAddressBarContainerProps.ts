import { Dispatch, MutableRefObject, SetStateAction } from "react";

import { ClearSuggestions, SetValue, Status } from "use-places-autocomplete";

export interface ISearchAddressBarContainerProps {
  /**
   * The search value for the customer address
   * @type {string}
   */
  searchValue: string;

  /**
   * The set state for the search value of the customer
   * @type {SetValue}
   */
  setSearchValue: SetValue;

  /**
   * Is the input ready to be used
   * @type {boolean}
   */
  ready: boolean;

  /**
   * List of recommended addresses
   * @type {google.maps.places.AutocompletePrediction[]}
   */
  data: google.maps.places.AutocompletePrediction[];

  /**
   * List of recommended addresses
   * @type {ClearSuggestions}
   */
  clearSuggestions: ClearSuggestions;

  /**
   * Current status
   * @type {Status}
   */
  status: Status;

  /**
   * Handles the select of a searched address
   * @type {(val: string, showVal: string) => void}
   */
  handleSelectAddress: (val: string, showVal: string) => void;

  /**
   * Sets the map zoom
   * @type {Dispatch<SetStateAction<number>>}
   */
  setMapZoom: Dispatch<SetStateAction<number>>;

  /**
   * Sets if its a zip code
   * @type {Dispatch<SetStateAction<boolean>>}
   */
  setIsZipCode: Dispatch<SetStateAction<boolean>>;

  /**
   * Prop description
   * @type {MutableRefObject<google.maps.Map | undefined>}
   */
  mapRef: MutableRefObject<google.maps.Map | undefined>;

  /**
   * Indicates if an address was selected
   * @type {boolean}
   */
  isAddressSelected: boolean;

  /**
   * Sets if an address was selected
   * @type {Dispatch<SetStateAction<boolean>>}
   */
  setIsAddressSelected: Dispatch<SetStateAction<boolean>>;
}
