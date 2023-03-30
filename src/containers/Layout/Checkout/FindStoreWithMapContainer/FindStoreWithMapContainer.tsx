import { useEffect, useRef, useState, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { CHO_ENTER_ADDRESS_PAGE, TrackerApp } from "constants/amplitudeConstants";
import { LIBRARIES, MAPS_CENTER_INIT } from "constants/mapsConstants";
import { PlacesContainer } from "containers/Layout/Checkout/PlacesContainer/PlacesContainer";
import { IStore } from "dataflows/Stores/IStore";
import {
  resetNearestStores,
  setStoreAsSelected,
  setUserLocation,
} from "dataflows/Stores/IStoreSlice";
import { selectSelectedStore, selectUserLocation } from "dataflows/Stores/StoreSelectors";
import { getNearestStores } from "dataflows/Stores/StoreThunks";
import { trackEvent } from "utils/tracker";

import { Center } from "@chakra-ui/react";
import { useLoadScript } from "@react-google-maps/api";

import { IFindStoreWithMapContainerProps } from "./IFindStoreWithMapContainerProps";

type DirectionsResult = google.maps.DirectionsResult;

/**
 * The FindStoreWithMap container.
 * @param { IFindStoreWithMapContainerProps } props the container props.
 * @returns { ReactElement } The FindStoreWithMap container.
 */
export const FindStoreWithMapContainer = (props: IFindStoreWithMapContainerProps): ReactElement => {
  const { loadNextStep } = props;
  const [searchValue, setSearchValue] = useState("");
  const selectedStore = useSelector(selectSelectedStore);
  const userLocation = useSelector(selectUserLocation);
  const dispatch = useDispatch();
  const [isZipCode, setIsZipCode] = useState<boolean>(false);
  const [directions, setDirections] = useState<DirectionsResult>();
  const mapRef = useRef<google.maps.Map>();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: LIBRARIES,
    language: "es",
  });

  /**
   * Handles store confirmation
   * @returns { void }
   */
  const handleStoreConfirmation = (): void => {
    dispatch(setStoreAsSelected(selectedStore as IStore));
    loadNextStep();
  };

  useEffect(() => {
    dispatch(
      getNearestStores({
        search: MAPS_CENTER_INIT.description,
        lat: MAPS_CENTER_INIT.lat,
        lng: MAPS_CENTER_INIT.lng,
      })
    );
    dispatch(setUserLocation(undefined));
    trackEvent(CHO_ENTER_ADDRESS_PAGE, [TrackerApp.Amplitude, TrackerApp.Segment]);
    return () => {
      dispatch(resetNearestStores());
    };
  }, []);

  useEffect(() => {
    if (!userLocation || !selectedStore) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: userLocation,
        destination: selectedStore.location,
        travelMode: google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  }, [selectedStore]);

  return (
    <>
      {!isLoaded ? (
        <Center>
          <Loader delay={300} />
        </Center>
      ) : (
        <PlacesContainer
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          handleStoreConfirmation={handleStoreConfirmation}
          mapRef={mapRef}
          directions={directions}
          setDirections={setDirections}
          isZipCode={isZipCode}
          setIsZipCode={setIsZipCode}
        />
      )}
    </>
  );
};
