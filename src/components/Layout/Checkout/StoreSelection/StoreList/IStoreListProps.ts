import { INearestStore } from "dataflows/Stores/INearestStore";
import { SwipeableHandlers } from "react-swipeable";

export interface IStoreListProps {
  /**
   * Indicates if it is open
   * @type {boolean}
   */
  open: boolean;

  /**
   * Handles the elevation of the container
   * @type {() => void}
   */
  handleTopClick: () => void;

  /**
   * The User Address
   * @type {string}
   */
  address: string;

  /**
   * Store list
   * @type {INearestStore[]}
   */
  stores: INearestStore[];

  /**
   * Search by name value
   * @type {string}
   */
  searchValue: string;

  /**
   * handles the value search
   * @type {((x: string) => void)}
   */
  onSearchValueChange: (x: string) => void;

  /**
   * handles store selection
   * @type {(store: INearestStore) => void}
   */
  handleSelectStore: (store: INearestStore) => void;

  /**
   * To show the real number in the subtitle
   * @type {number}
   */
  allNearestsAmount: number;

  /**
   * handles swipes
   * @type {SwipeableHandlers}
   */
  swipeHandlers: SwipeableHandlers;
}
