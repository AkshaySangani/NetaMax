import React, { useEffect, useState, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { GanaDinero } from "components/GanaDinero/GanaDinero";
import {
  HOME_MONETAS_NOT_LOGGED_BUTTON_CLICKED,
  HOME_NO_MONETAS_BUTTON_CLICKED,
  MONETAS_GMV_BUTTON_CLICKED,
  TrackerApp,
  TAB_GANADINERO_BUTTON_CLICKED,
} from "constants/amplitudeConstants";
import { selectCustomer } from "dataflows/Auth/AuthSelectors";
import { selectBasketItems } from "dataflows/Basket/BasketSelectors";
import { onOpen as onOpenAction } from "dataflows/Checkout/CheckoutSlice";
import {
  selectAvailableChallenges,
  selectGanaDinero,
  selectIsCoinsLoaded,
  selectIsLoadingAddCoins,
  selectIsLoadingGanaDinero,
  selectSaveCoins,
  selectWinnerChallenges,
} from "dataflows/GanaDinero/GanaDineroSelectors";
import {
  acceptChallenge,
  availableChallenges as getChallenges,
  getCoins,
} from "dataflows/GanaDinero/GanaDineroThunks";
import { useRouter } from "next/router";
import { stringToSeconds } from "utils/timeUtils";
import { trackEvent } from "utils/tracker";

import { Container } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";

/**
 * The Gana Dinero section container.
 * @param { IGanaDineroContainerProps } props The container props
 * @returns { ReactElement } The GanaDinero Section container.
 */
export const GanaDineroContainer = (): ReactElement => {
  const user = useSelector(selectCustomer);
  const isLoading = useSelector(selectIsLoadingGanaDinero);
  const dispatch = useDispatch();
  const coins = useSelector(selectGanaDinero);
  const isCoinsLoading = useSelector(selectIsLoadingAddCoins);
  const coinsLoaded = useSelector(selectIsCoinsLoaded);
  const coinsBeforeLogin = useSelector(selectSaveCoins);
  const statusChallenges = useSelector(selectWinnerChallenges);
  const availableChallenges = useSelector(selectAvailableChallenges);
  const [countDown, setCountDown] = useState(stringToSeconds(coins?.timeRemaining ?? "0"));
  const basket = useSelector(selectBasketItems);
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) {
      trackEvent(HOME_NO_MONETAS_BUTTON_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment]);
      trackEvent(HOME_MONETAS_NOT_LOGGED_BUTTON_CLICKED, [
        TrackerApp.Amplitude,
        TrackerApp.Segment,
      ]);
    } else {
      trackEvent(TAB_GANADINERO_BUTTON_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, []);

  useEffect(() => {
    if (coins) {
      dispatch(getChallenges());
      setCountDown(stringToSeconds(coins.timeRemaining));
    }
  }, [coins]);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      }
      if (countDown === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (user !== undefined) {
      dispatch(getCoins());
    }
  }, [user]);

  useEffect(() => {
    if (user !== undefined && coinsLoaded) {
      dispatch(getCoins());
    }
  }, [coinsLoaded]);

  /**
   * handles OnOpen action login.
   * @returns {void}
   */
  const onOpenLoginFlow = () => {
    dispatch(onOpenAction({ onlyLoginSteps: true }));
  };

  /**
   * Back to home function
   * @returns {void} back to home
   **/
  const backToHome = () => {
    trackEvent(MONETAS_GMV_BUTTON_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    router.push("/");
  };

  /**
   * handles the event when accepting a challenge
   * @param {number} challengeId ChallengeId argument
   * @returns {void} back to home
   **/
  const onChallengeAccepted = (challengeId: number): void => {
    if (user?.id) {
      dispatch(
        acceptChallenge({
          userId: user?.id,
          challengeId,
        })
      );
    }
  };

  const ganaDineroProps = {
    user,
    coins,
    countDown,
    isCoinsLoading,
    onOpenLoginFlow,
    coinsBeforeLogin,
    backToHome,
    statusChallenges,
    availableChallenges,
    basket,
    onChallengeAccepted,
  };

  return isLoading ? (
    <Center h="50%" w="100%" position="fixed">
      <Loader />
    </Center>
  ) : (
    <Container maxW="container.xl">
      <GanaDinero {...ganaDineroProps} />
    </Container>
  );
};
