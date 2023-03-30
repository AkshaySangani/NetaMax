import { ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { StoreConfirmation } from "components/Layout/Checkout/StoreSelection/StoreConfirmation/StoreConfirmation";
import { setSelectedStore } from "dataflows/Stores/IStoreSlice";
import { selectUserLocation } from "dataflows/Stores/StoreSelectors";

import { IStoreConfirmationContainerProps } from "./IStoreConfirmationContainerProps";

/**
 * The StoreConfirmation container.
 * @param { IStoreConfirmationContainerProps } props the container props.
 * @returns { ReactElement } The StoreConfirmation container.
 */
export const StoreConfirmationContainer = (
  props: IStoreConfirmationContainerProps
): ReactElement => {
  const { store, handleStoreConfirmation, mapRef, setDirections, googleDistance } = props;
  const dispatch = useDispatch();
  const userLocation = useSelector(selectUserLocation);

  /**
   * Clears the store selected
   * @returns { void }
   */
  const handleChooseAnotherStore = (): void => {
    dispatch(setSelectedStore(undefined));
    userLocation && mapRef.current?.panTo({ lat: userLocation.lat, lng: userLocation.lng });
    setDirections(undefined);
  };

  return (
    <StoreConfirmation
      store={store}
      handleChooseAnotherStore={handleChooseAnotherStore}
      handleStoreConfirmation={handleStoreConfirmation}
      googleDistance={googleDistance}
    />
  );
};
