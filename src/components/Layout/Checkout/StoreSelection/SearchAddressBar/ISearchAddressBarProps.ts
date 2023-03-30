import { ChangeEvent, Dispatch, SetStateAction } from "react";

import { ILocation } from "dataflows/Stores/IStoreState";
import { Status } from "use-places-autocomplete";

export interface ISearchAddressBarProps {
  /**
   * The search value for the customer address
   * @type {string}
   */
  searchValue: string;

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
   * Status
   * @type {Status}
   */
  status: Status;

  /**
   * Handles the select of a searched address
   * @type {(val: string, showVal: string) => void}
   */
  handleSelectAddress: (val: string, showVal: string) => void;

  /**
   * input value
   * @type {string}
   */
  inputValue: string;

  /**
   * Handles the search
   * @type {(e: ChangeEvent<HTMLInputElement> | undefined) => void}
   */
  handleSearch: (e: ChangeEvent<HTMLInputElement> | undefined) => void;

  /**
   * Clears the search
   * @type {() => void}
   */
  clearSearch: () => void;

  /**
   * Validates if input is focused
   * @type {boolean}
   */
  isInputFocused: boolean;

  /**
   * Sets value of input focused
   * @type {React.Dispatch<React.SetStateAction<boolean>>}
   */
  setIsInputFocused: React.Dispatch<React.SetStateAction<boolean>>;

  /**
   * User location
   * @type {ILocation}
   */
  userLocation?: ILocation;

  /**
   * Indicates if an address was selected
   * @type {boolean}
   */
  isAddressSelected: boolean;
}
