import { ReactElement } from "react";

import { Loader } from "components/common/Loader/Loader";
import { CLOSE_OPTIONS } from "constants/mapsConstants";

import { Alert, AlertIcon, AlertTitle, CloseButton, Container, Flex } from "@chakra-ui/react";
import { Circle, DirectionsRenderer, GoogleMap, Marker } from "@react-google-maps/api";

import IMapProps from "./IMapProps";

/**
 * The Map component.
 * @param {IMapProps} props the IMapProps
 * @returns { ReactElement } The Map component.
 */
export const Map = (props: IMapProps): ReactElement => {
  const {
    mapZoom,
    stores,
    mapCenter,
    isZipCode,
    handleSelectStore,
    onLoad,
    userLocation,
    directions,
    getMarkerIconImage,
    options,
    selectedStore,
    circleDistance,
    handleClearErrorMessage,
    errorMessage,
    isLoadingNearestStores,
  } = props;

  return (
    <Container
      position="absolute"
      left="0"
      padding="0px"
      width="100%"
      top={userLocation ? "146px" : "216px"}
      height={`calc(100% - ${userLocation ? "146px" : "216px"})`}
    >
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: `${userLocation && stores.length ? "calc(69% - 70px)" : "100%"}`,
        }}
        zoom={mapZoom}
        center={mapCenter}
        options={options}
        onLoad={onLoad}
      >
        {selectedStore && userLocation && directions && (
          <DirectionsRenderer
            directions={directions}
            options={{
              polylineOptions: {
                zIndex: 50,
                strokeColor: "#1976D2",
                strokeWeight: 0,
                icons: [
                  {
                    icon: {
                      path: google.maps.SymbolPath.CIRCLE,
                      fillOpacity: 1,
                      scale: 3,
                    },
                    offset: "0",
                    repeat: "15px",
                  },
                ],
              },
              suppressMarkers: true,
            }}
          />
        )}
        {userLocation && (
          <Marker icon="/assets/images/icons/userLocation.png" position={userLocation} />
        )}
        {!userLocation &&
          stores.length &&
          stores.map((store) => (
            <Marker
              key={store.location.lat + store.location.lng}
              position={store.location}
              icon={getMarkerIconImage(store)}
            />
          ))}
        {userLocation &&
          stores.map((store) => (
            <Marker
              key={store.location.lat + store.location.lng}
              position={store.location}
              icon={getMarkerIconImage(store)}
              onClick={() => handleSelectStore(store)}
            />
          ))}
        {userLocation && isZipCode && (
          <Circle center={userLocation} radius={circleDistance} options={CLOSE_OPTIONS} />
        )}
        <Alert
          maxHeight="60px"
          maxWidth="482px"
          status="error"
          rounded="lg"
          hidden={errorMessage === undefined}
          position="absolute"
          bottom="0"
          width="calc(100% - 40px)"
          left="-20px"
          margin="50px 40px"
        >
          <AlertIcon />
          <AlertTitle mr={2}>{errorMessage}</AlertTitle>
          <CloseButton
            position="absolute"
            right="8px"
            top="8px"
            onClick={handleClearErrorMessage}
          />
        </Alert>
        {isLoadingNearestStores && (
          <Flex
            position="absolute"
            bottom="10"
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Loader delay={300} />
          </Flex>
        )}
      </GoogleMap>
    </Container>
  );
};
