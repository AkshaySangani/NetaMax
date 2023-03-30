import { INearestStore } from "dataflows/Stores/INearestStore";

export interface IStoreListItemProps {
  /**
   * The store
   * @type {INearestStore}
   */
  store: INearestStore;

  /**
   * handles store selection
   * @type {(store: INearestStore) => void}
   */
  handleSelectStore: (store: INearestStore) => void;
}
