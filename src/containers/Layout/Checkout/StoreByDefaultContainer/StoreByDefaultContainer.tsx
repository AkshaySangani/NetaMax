import React, { useEffect, ReactElement } from "react";

import { useSelector } from "react-redux";

import { StoreByDefault } from "components/Layout/Checkout/StoreByDefault/StoreByDefault";
import { selectStore } from "dataflows/Stores/StoreSelectors";
import { useIsMounted } from "hooks/useIsMounted";

import { IStoreByDefaultContainerProps } from "./IStoreByDefaultContainerProps";

/**
 * The VerificationCodeContainer component.
 * @param {IStoreByDefaultContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const StoreByDefaultContainer = (props: IStoreByDefaultContainerProps): ReactElement => {
  const { isClickingNextButton, setIsClickingNextButton, loadNextStep } = props;
  const isMounted = useIsMounted();
  const store = useSelector(selectStore);

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      setIsClickingNextButton && setIsClickingNextButton(false);
      loadNextStep && loadNextStep();
    }
  }, [isClickingNextButton]);

  return <StoreByDefault store={store} />;
};
