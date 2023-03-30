import { useCallback, useMemo, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import IMapProps from "components/Layout/Checkout/StoreSelection/Map/IMapProps";
import { Map } from "components/Layout/Checkout/StoreSelection/Map/Map";
import { INearestStore } from "dataflows/Stores/INearestStore";
import { clearErrorMessage, setSelectedStore } from "dataflows/Stores/IStoreSlice";
import {
  selectCircleDistance,
  selectErrorMessage,
  selectLoadingNearestStores,
  selectSelectedStore,
  selectUserLocation,
} from "dataflows/Stores/StoreSelectors";

import { IMapContainerProps } from "./IMapContainerProps";

type MapOptions = google.maps.MapOptions;

/**
 * The MapContainer component.
 * @param {IMapContainerProps} props The props.
 * @returns {ReactElement} The React element.
 **/
export const MapContainer = (props: IMapContainerProps): ReactElement => {
  const { mapRef, mapZoom, stores, mapCenter, isZipCode, directions } = props;
  const selectedStore = useSelector(selectSelectedStore);
  const userLocation = useSelector(selectUserLocation);
  const circleDistance = useSelector(selectCircleDistance);
  const errorMessage = useSelector(selectErrorMessage);
  const isLoadingNearestStores = useSelector(selectLoadingNearestStores);

  const dispatch = useDispatch();
  const options = useMemo<MapOptions>(
    () => ({
      disableDefaultUI: true,
      mapId: "7c781eb6e2790efa",
      clickableIcons: false,
    }),
    []
  );
  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  /**
   * Selects the store
   * @param { INearestStore } store the selected store
   * @returns { void }
   */
  const handleSelectStore = (store: INearestStore): void => {
    dispatch(setSelectedStore(store));
  };

  /**
   * Returns the right url of the marker image depending on the selected store
   * @param {INearestStore} store current store
   * @returns { string } the marker icon url
   */
  const getMarkerIconImage = (store: INearestStore) => {
    if (!selectedStore) return "assets/images/icons/storeLocation.png";

    return selectedStore === store
      ? "assets/images/icons/storeLocationSelected.png"
      : "assets/images/icons/storeLocationNotSelected.png";
  };

  /**
   * clears the error message
   * @returns { void }
   */
  const handleClearErrorMessage = (): void => {
    dispatch(clearErrorMessage());
  };

  const mapCenterMemo = useMemo(() => {
    return userLocation ? { lat: userLocation.lat, lng: userLocation.lng } : mapCenter;
  }, [userLocation]);

  const mapProps: IMapProps = {
    selectedStore,
    handleSelectStore,
    onLoad,
    options,
    userLocation,
    directions,
    getMarkerIconImage,
    isZipCode,
    mapZoom,
    stores,
    mapCenter: mapCenterMemo,
    circleDistance,
    errorMessage,
    handleClearErrorMessage,
    isLoadingNearestStores,
  };

  return <Map {...mapProps} />;
};
