import { INearestStore } from "dataflows/Stores/INearestStore";

export interface IStoreListContainerProps {
  /**
   * The stores
   * @type {INearestStore[]}
   */
  stores: INearestStore[];

  /**
   * Address to show on title
   * @type {string}
   */
  addressSearched: string;
}
