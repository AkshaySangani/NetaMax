import React, { useEffect, ReactElement } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { StoreByPostalCode } from "components/Layout/Checkout/StoreByPostalCode/StoreByPostalCode";
import { SEARCH_ZIPCODE, STORE_SELECTED_CLICKED, TrackerApp } from "constants/amplitudeConstants";
import { IPostalCodeFormValues } from "dataflows/Checkout/PostalCode/IPostalCodeFormValues";
import { PostalCodeValidationSchema } from "dataflows/Checkout/PostalCode/PostalCodeValidationSchema";
import { IStore } from "dataflows/Stores/IStore";
import { resetNearestStores, setStoreAsSelected } from "dataflows/Stores/IStoreSlice";
import {
  selectErrorMessage,
  selectLoadingNearestStores,
  selectNearestStores,
} from "dataflows/Stores/StoreSelectors";
import { getNearestStores } from "dataflows/Stores/StoreThunks";
import { useIsMounted } from "hooks/useIsMounted";
import { trackEvent } from "utils/tracker";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IFindStoreContainerProps } from "./IFindStoreContainerProps";
import { MAPS_CENTER_INIT } from "constants/mapsConstants";

/**
 * The FindStoreContainer component.
 * @param {IFindStoreContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const FindStoreContainer = (props: IFindStoreContainerProps): ReactElement => {
  const { isClickingNextButton, setIsClickingNextButton, loadNextStep } = props;
  const isMounted = useIsMounted();
  const dispatch = useDispatch();
  const nearestStores = useSelector(selectNearestStores);
  const loadingNearestStores = useSelector(selectLoadingNearestStores);
  const errorMessageStores = useSelector(selectErrorMessage);

  // StoreByPostalCode useForm
  const { register, formState, getValues } = useForm<IPostalCodeFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(PostalCodeValidationSchema),
  });

  /**
   * Action on store click
   * @param {string} store The store object for setting new store as selected
   * @returns {void}
   */
  const onStoreClick = (store: IStore): void => {
    trackEvent(STORE_SELECTED_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storeID: store.id,
      storeName: store.name,
    });

    dispatch(setStoreAsSelected(store));
    loadNextStep && loadNextStep();
  };

  /**
   * Action on button click
   * @returns {void}
   */
  const onButtonClick = (): void => {
    if (nearestStores.length > 0) dispatch(resetNearestStores());
    const { postalCode } = getValues();
    dispatch(
      getNearestStores({ search: postalCode, lat: MAPS_CENTER_INIT.lat, lng: MAPS_CENTER_INIT.lng })
    );
  };

  useEffect(() => {
    const { postalCode } = getValues();
    if (postalCode && !loadingNearestStores) {
      trackEvent(SEARCH_ZIPCODE, [TrackerApp.Amplitude, TrackerApp.Segment], {
        searchedPostalCode: postalCode,
        isSuccessful: nearestStores.length > 0 ? "Si" : "No",
      });
    }
  }, [loadingNearestStores]);

  useEffect(() => {
    resetNearestStores && dispatch(resetNearestStores());
    if (isMounted && isClickingNextButton) {
      setIsClickingNextButton && setIsClickingNextButton(false);
      loadNextStep && loadNextStep();
    }
  }, [isClickingNextButton]);

  return (
    <>
      {/* TODO: Update this with switch render steps component
        <FindStoreStep /> */}
      <StoreByPostalCode
        formState={formState}
        register={register}
        stores={nearestStores}
        loadingNearestStores={loadingNearestStores}
        onButtonClick={onButtonClick}
        onStoreClick={onStoreClick}
        errorMessageStores={errorMessageStores}
      />
    </>
  );
};
