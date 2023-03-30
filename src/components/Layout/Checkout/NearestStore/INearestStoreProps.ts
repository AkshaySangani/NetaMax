import { INearestStore } from "dataflows/Stores/INearestStore";
import { IStore } from "dataflows/Stores/IStore";

export interface INearestStoreProps extends INearestStore {
  /**
   * Function to dispatch select nearest store reducer
   *
   * @type {(storeHost: IStore) => void}
   */
  onStoreClick: (storeHost: IStore) => void;
}
