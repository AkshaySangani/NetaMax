import { useState, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { INIT_ZOOM, MAPS_CENTER_INIT, USER_ZOOM } from "constants/mapsConstants";
import { MapContainer } from "containers/Layout/Checkout/MapContainer/MapContainer";
import { SearchAddressBarContainer } from "containers/Layout/Checkout/SearchAddressBarContainer/SearchAddressBarContainer";
import { StoreConfirmationContainer } from "containers/Layout/Checkout/StoreConfirmationContainer/StoreConfirmationContainer";
import { StoreListContainer } from "containers/Layout/Checkout/StoreListContainer/StoreListContainer";
import { resetNearestStores, setUserLocation } from "dataflows/Stores/IStoreSlice";
import {
  selectNearestStores,
  selectSelectedStore,
  selectUserLocation,
} from "dataflows/Stores/StoreSelectors";
import { getNearestStores } from "dataflows/Stores/StoreThunks";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

import { Box } from "@chakra-ui/react";

import { IPlacesContainerProps } from "./IPlacesContainerProps";

/**
 * The PlacesContainer component.
 * @param { IPlacesContainerProps } props the component props.
 * @returns { ReactElement } The PlacesContainer component.
 */
export const PlacesContainer = (props: IPlacesContainerProps): ReactElement => {
  const { handleStoreConfirmation, mapRef, directions, setDirections, isZipCode, setIsZipCode } =
    props;
  const dispatch = useDispatch();
  const [mapZoom, setMapZoom] = useState(INIT_ZOOM);
  const [isAddressSelected, setIsAddressSelected] = useState(false);
  const userLocation = useSelector(selectUserLocation);
  const selectedStore = useSelector(selectSelectedStore);
  const nearestStores = useSelector(selectNearestStores);
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      origin: MAPS_CENTER_INIT,
      componentRestrictions: { country: "mx" },
    },
    debounce: 2000,
  });

  /**
   * Function description
   * @param {string} val value
   * @param {string} showVal value to show
   * @returns { void }
   */
  const handleSelectAddress = async (val: string, showVal: string) => {
    setIsAddressSelected(true);
    dispatch(resetNearestStores());
    setValue(val, false);
    clearSuggestions();

    const results = await getGeocode({ address: val });
    if (results[0]) {
      const { lat, lng } = await getLatLng(results[0]);
      dispatch(setUserLocation({ lat, lng, addressName: showVal }));
      dispatch(getNearestStores({ search: val, lat, lng }));
      mapRef.current?.panTo({ lat, lng });
      setMapZoom(USER_ZOOM);
    }
  };

  /**
   * Gets google distance in minutes
   * @returns { string } google distance in minutes
   */
  const getGoogleDistance = (): string => {
    return `${(directions?.routes[0]?.legs[0]?.duration?.value || 0) / 60}`;
  };

  const searchAddressBarProps = {
    searchValue: value,
    setSearchValue: setValue,
    ready,
    status,
    data,
    clearSuggestions,
    handleSelectAddress,
    setMapZoom,
    setIsZipCode,
    mapRef,
    directions,
    isAddressSelected,
    setIsAddressSelected,
  };

  const mapProps = {
    mapRef,
    mapZoom,
    stores: nearestStores,
    mapCenter: MAPS_CENTER_INIT,
    isZipCode,
    directions,
  };

  return (
    <Box height="83vh">
      <SearchAddressBarContainer {...searchAddressBarProps} />
      <MapContainer {...mapProps} />
      {userLocation && !selectedStore && nearestStores && nearestStores.length > 0 && (
        <StoreListContainer
          stores={nearestStores}
          addressSearched={userLocation.addressName || value}
        />
      )}
      {userLocation && selectedStore && (
        <StoreConfirmationContainer
          store={selectedStore}
          handleStoreConfirmation={handleStoreConfirmation}
          mapRef={mapRef}
          setDirections={setDirections}
          googleDistance={getGoogleDistance()}
        />
      )}
    </Box>
  );
};
