import { INearestStore } from "dataflows/Stores/INearestStore";
import { IStore } from "dataflows/Stores/IStore";

export interface IDeliverySiteProps {
  /**
   * Allows to change the store selected
   * @type {() => void}
   */
  updateStore?: () => void;

  /**
   * The store selected
   * @type {INearestStore}
   */
  selectedStore?: INearestStore;

  /**
   * Indicates if its called from the order success
   * @type {boolean}
   */
  fromSuccess?: boolean;
}
