import React, { ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { selectIsLoggedIn } from "dataflows/Auth/AuthSelectors";
import { selectTotalAmount } from "dataflows/Basket/BasketSelectors";
import { selectIsOpen } from "dataflows/Checkout/CheckoutSelectors";
import { onOpen } from "dataflows/Checkout/CheckoutSlice";
import {
  selectDiscoveryChallenge,
  selectGMVChallenge,
} from "dataflows/GanaDinero/GanaDineroSelectors";

import { DailyMonetasBanner } from "../DailyMonetasBanner/DailyMonetasBanner";
import { GMVBanner } from "../GMVBanner";

/**
 *
 * @returns {ReactElement} the react element to render.
 */
export const GanaDineroBanner = (): ReactElement | null => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const gmvChallenge = useSelector(selectGMVChallenge);
  const discoveryChallenge = useSelector(selectDiscoveryChallenge);
  const totalAmount = useSelector(selectTotalAmount);
  const checkoutOpened = useSelector(selectIsOpen);
  const dispatch = useDispatch();

  /**
   * GMVBanner button action
   * @returns {void}
   */
  const gmvBannerAction = () => {
    dispatch(onOpen({ onlyLoginSteps: false }));
  };

  if (isLoggedIn && gmvChallenge?.isActive && !gmvChallenge?.completed) {
    return (
      <GMVBanner
        coins={gmvChallenge.PriceAmount}
        progressBarValue={totalAmount}
        GMVThreshold={gmvChallenge?.GMVThreshold}
        checkoutOpened={checkoutOpened}
        buttonAction={gmvBannerAction}
      />
    );
  } else if (
    (isLoggedIn && discoveryChallenge?.isActive && !discoveryChallenge?.completed) ||
    !isLoggedIn
  ) {
    return (
      <DailyMonetasBanner
        isLoggedIn={isLoggedIn}
        challengeDescription={discoveryChallenge?.CardDescription}
      />
    );
  } else {
    return null;
  }
};
