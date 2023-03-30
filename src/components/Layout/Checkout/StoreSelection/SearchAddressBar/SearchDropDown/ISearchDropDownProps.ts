import { Status } from "use-places-autocomplete";

export interface ISearchDropDownProps {
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
}
