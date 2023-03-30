import React from "react";

export interface ISearchInputProps {
  /**
   * The input value.
   * @type {string}
   */
  value?: string;

  /**
   * The onChange event handler.
   * @type {(event?: React.ChangeEvent<HTMLInputElement>) => void}
   */
  onChange: (event?: React.ChangeEvent<HTMLInputElement>) => void;

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
}
