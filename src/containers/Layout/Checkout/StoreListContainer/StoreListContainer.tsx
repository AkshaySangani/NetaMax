import { useEffect, useState, ReactElement } from "react";

import { useDispatch } from "react-redux";

import { StoreList } from "components/Layout/Checkout/StoreSelection/StoreList/StoreList";
import { CHO_STORES_RESULTS_LISTING_PAGE, TrackerApp } from "constants/amplitudeConstants";
import { INearestStore } from "dataflows/Stores/INearestStore";
import { setSelectedStore } from "dataflows/Stores/IStoreSlice";
import { trackEvent } from "utils/tracker";

import { IStoreListContainerProps } from "./IStoreListContainerProps";
import { useSwipeable } from "react-swipeable";

/**
 * The StoreList container.
 * @param { IStoreListContainerProps } props the container props.
 * @returns { ReactElement } The StoreList container.
 */
export const StoreListContainer = (props: IStoreListContainerProps): ReactElement => {
  const { stores, addressSearched } = props;
  const [open, setOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useDispatch();
  const handlers = useSwipeable({
    onSwipedUp: () => setOpen(true),
    onSwipedDown: () => setOpen(false),
  });

  useEffect(() => {
    trackEvent(CHO_STORES_RESULTS_LISTING_PAGE, [TrackerApp.Amplitude, TrackerApp.Segment]);
  }, []);

  /**
   * changes the top property
   * @returns { void }
   */
  const handleTopClick = (): void => {
    setOpen(!open);
  };

  /**
   * Handles the value change
   * @param {string} value new value
   * @returns { void }
   */
  const onSearchValueChange = (value: string): void => {
    setSearchValue(value);
  };

  /**
   * Handles the selected store from the stores list
   * @param {INearestStore} store selected store
   * @returns { void }
   */
  const handleSelectStore = (store: INearestStore): void => {
    dispatch(setSelectedStore(store));
    setOpen(false);
  };

  return (
    <StoreList
      open={open}
      handleTopClick={handleTopClick}
      address={addressSearched}
      stores={stores.filter((store) =>
        store.name.toLowerCase().includes(searchValue.trim().toLowerCase())
      )}
      allNearestsAmount={stores.length}
      searchValue={searchValue}
      onSearchValueChange={onSearchValueChange}
      handleSelectStore={handleSelectStore}
      swipeHandlers={handlers}
    />
  );
};
