import React from "react";

import { ILocation } from "dataflows/Stores/IStoreState";

export interface ISearchInputProps {
  /**
   * The input value.
   * @type {string}
   */
  value?: string;

  /**
   * Indicates if the input value is being focused.
   * @type {boolean}
   */
  isFocused?: boolean;

  /**
   * Indicates if the input value is disabled.
   * @type {boolean}
   */
  disabled?: boolean;

  /**
   * The onChange event handler.
   * @type {(event?: React.ChangeEvent<HTMLInputElement>) => void}
   */
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * The onFocus in event handler.
   * @type {(event?: React.FocusEvent<HTMLInputElement>) => void}
   **/
  onFocusIn?: (event?: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * The onFocus out event handler.
   * @type {(event?: React.FocusEvent<HTMLInputElement>) => void}
   **/
  onFocusOut?: (event?: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * Clear input.
   * @type {() => void}
   **/
  clearSearchProducts: () => void;

  /**
   * userLocation
   * @type {ILocation}
   */
  userLocation?: ILocation;
}
