import { INearestStore } from "dataflows/Stores/INearestStore";

export interface IStoreConfirmationProps {
  /**
   * Selected store
   * @type {INearestStore}
   */
  store: INearestStore;

  /**
   * Clears the store selected
   * @type {() => void}
   */
  handleChooseAnotherStore: () => void;

  /**
   * Confirms the store
   * @type {() => void}
   */
  handleStoreConfirmation: () => void;

  /**
   * Google distance in minutes
   * @type {string}
   */
  googleDistance: string;
}
