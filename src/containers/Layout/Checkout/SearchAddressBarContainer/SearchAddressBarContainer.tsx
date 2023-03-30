import React, { useState, ChangeEvent, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { ISearchAddressBarProps } from "components/Layout/Checkout/StoreSelection/SearchAddressBar/ISearchAddressBarProps";
import { SearchAddressBar } from "components/Layout/Checkout/StoreSelection/SearchAddressBar/SearchAddressBar";
import { INIT_ZOOM, MAPS_CENTER_INIT } from "constants/mapsConstants";
import { clearErrorMessage, setSelectedStore, setUserLocation } from "dataflows/Stores/IStoreSlice";
import { selectUserLocation } from "dataflows/Stores/StoreSelectors";
import { getNearestStores } from "dataflows/Stores/StoreThunks";

import { ISearchAddressBarContainerProps } from "./ISearchAddressBarContainerProps";

/**
 * The SearchAddressBar container.
 * @param { ISearchAddressBarContainerProps } props the container props.
 * @returns { ReactElement } The SearchAddressBar Container.
 */
export const SearchAddressBarContainer = (props: ISearchAddressBarContainerProps): ReactElement => {
  const {
    ready,
    searchValue,
    setSearchValue,
    status,
    data,
    clearSuggestions,
    handleSelectAddress,
    setMapZoom,
    setIsZipCode,
    mapRef,
    isAddressSelected,
    setIsAddressSelected,
  } = props;
  const dispatch = useDispatch();
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const userLocation = useSelector(selectUserLocation);

  /**
   * Clear the search
   * @returns { void }
   */
  const clearSearch = (): void => {
    // Empty the use places recommendations
    clearSuggestions();

    // Reset the input and search values
    setInputValue("");
    setSearchValue("");

    // Reset the user location and the selected store
    dispatch(setUserLocation(undefined));
    dispatch(setSelectedStore(undefined));

    // Reset to the initial zoom and pan to the initial position
    setMapZoom(INIT_ZOOM);
    setIsZipCode(false);
    mapRef.current?.panTo(MAPS_CENTER_INIT);
    dispatch(
      getNearestStores({
        search: MAPS_CENTER_INIT.description,
        lat: MAPS_CENTER_INIT.lat,
        lng: MAPS_CENTER_INIT.lng,
      })
    );

    // Clear any error message and
    dispatch(clearErrorMessage());

    // Reset the selected arrow to show the recommendations on the dropdown component
    setIsAddressSelected(false);
  };

  /**
   * Handle the search to distinguish between address and zip code
   * @param {ChangeEvent<HTMLInputElement> | undefined} e The input event
   * @returns { void }
   */
  const handleSearch = (e: ChangeEvent<HTMLInputElement> | undefined): void => {
    dispatch(setSelectedStore(undefined));
    let newSearchValue = e?.target.value.replace(",MX", "");
    setInputValue(e?.target.value || "");
    if (newSearchValue && /^[0-9]+$/.test(newSearchValue)) {
      setIsZipCode(true);
      newSearchValue += ",MX";
    } else {
      setIsZipCode(false);
    }

    setIsAddressSelected(false);
    clearSuggestions();
    setSearchValue(newSearchValue || "");
  };

  const searchAddressBarProps: ISearchAddressBarProps = {
    ready,
    inputValue,
    handleSearch,
    clearSearch,
    isInputFocused,
    setIsInputFocused,
    handleSelectAddress,
    data,
    status,
    searchValue,
    userLocation,
    isAddressSelected,
  };

  return <SearchAddressBar {...searchAddressBarProps} />;
};
