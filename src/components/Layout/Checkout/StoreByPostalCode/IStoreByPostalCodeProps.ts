import { FormState, UseFormRegister } from "react-hook-form";

import { IPostalCodeFormValues } from "dataflows/Checkout/PostalCode/IPostalCodeFormValues";
import { INearestStore } from "dataflows/Stores/INearestStore";
import { IStore } from "dataflows/Stores/IStore";

export interface IStoreByPostalCodeProps {
  /**
   * Form state
   * @type {FormState<IPostalCodeFormValues>}
   */

  formState: FormState<IPostalCodeFormValues>;

  /**
   * The form register.
   * @type {UseFormRegister<IPostalCodeFormValues>}
   */
  register: UseFormRegister<IPostalCodeFormValues>;

  /**
   * Array of nearest stores
   * @type {INearestStore[]}
   */
  stores: INearestStore[];

  /**
   * Indicates if the action of nearest stores is loading
   * @type {boolean}
   **/
  loadingNearestStores: boolean;

  /**
   * Find stores action on button click
   * @type {() => void}
   **/
  onButtonClick: () => void;

  /**
   * Function to dispatch select nearest store reducer
   * @type {(storeHost: IStore) => void}
   **/
  onStoreClick: (storeHost: IStore) => void;

  /**
   * The error message
   * @type {string}
   */
  errorMessageStores?: string;
}
