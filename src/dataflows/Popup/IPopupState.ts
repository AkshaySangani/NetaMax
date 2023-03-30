import { IPopup } from "./IPopup";

export interface IPopupState {
  /**
   * The array popups.
   * @type {IPopup[]}
   */
  popupItems: IPopup[];

  /**
   * The array popups.
   * @type {IPopup[]}
   */
  popup?: IPopup;

  /**
   * Indicates if the popups are loading.
   * @type {boolean}
   */
  isLoadingPopup: boolean;

  /**
   * Popup selected
   * @type {IPopup}
   **/
  selectedPopup?: IPopup;

  /**
   * isNewStore popup selected
   * @type {IPopup}
   **/
  selectPopupIsNewStore: number;

  /**
   * shown popup selected
   * @type {boolean}
   **/
  popupShown: boolean;
}
