import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  DAILY_REWARD_BUTTON_CLICKED,
  DAILY_REWARD_INGRESAR_DATOS_BUTTON_CLICKED,
  MONETAS_CATEGORY_BUTTON_CLICKED,
  MONETAS_SKU_BUTTON_CLICKED,
  TrackerApp,
} from "constants/amplitudeConstants";
import { CATEGORY_NAME, DISCOVERY_ID, GMV_ID, SKU_NAME } from "constants/ganaDineroContstans";
import { STACK_COINS } from "constants/historialMonetasConstants";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { IGanaDineroContainerProps } from "containers/GanaDinero/IGanaDineroContainerProps";
import { selectTotalAmount } from "dataflows/Basket/BasketSelectors";
import { clearCoins, saveCoins } from "dataflows/GanaDinero/GanaDineroSlice";
import { addCoins } from "dataflows/GanaDinero/GanaDineroThunks";
import { IChallenge } from "dataflows/GanaDinero/IChallenge";
import { useRouter } from "next/router";
import ArrowIcon from "styled/icons/GanaDinero/ArrowIcon";
import { IconGirl } from "styled/icons/IconGirl";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";
import { getProgressBasedOnBasketTotal } from "utils/numberUtils";
import { trackEvent } from "utils/tracker";

import { Container, Flex, Link } from "@chakra-ui/layout";
import { useMediaQuery, Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";

import { DiscoveryCard } from "./DiscoveryCard/DiscoveryCard";
import { GMVCard } from "./GMVCard/GMVCard";
import { IBalanceCardStyle } from "./IGanaDineroStyles";
import { SKUCard } from "./SKUCard";

/**
 * The Gana Dinero section container.
 * @param { IGanaDineroContainerProps } props The container props
 * @returns { ReactElement } The GanaDinero Section container.
 */
export const GanaDinero = (props: IGanaDineroContainerProps): ReactElement => {
  const {
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
  } = props;
  const router = useRouter();
  const userAmountCoins = coins && parseFloat(coins?.customerCurrentNetaWallet);
  const [isMobile] = useMediaQuery(`(min-width: ${screenSizes.xs + 1}px)`);

  let skuChallenges: IChallenge[] | null | undefined = null;
  let categoryChallenges: IChallenge[] | null | undefined = null;

  // Filter to get the SKUChallenge and category challenge
  if (availableChallenges) {
    skuChallenges = availableChallenges.filter(
      (challenge) => challenge.PrizeCategoryName === SKU_NAME
    );
    categoryChallenges = availableChallenges.filter(
      (challenge) => challenge.PrizeCategoryName === CATEGORY_NAME
    );
  }

  //TODO: Refactor this, we should not use selectors from components.
  const totalAmount = useSelector(selectTotalAmount);

  const GMVChallengeInfo =
    statusChallenges && statusChallenges.filter((challenge) => challenge.PrizeType === GMV_ID);

  //TODO: move this logic to the selector.
  const GMVChallengeInfoWithoutLogin =
    availableChallenges &&
    availableChallenges.filter((challenge) => challenge.PrizeType === GMV_ID);

  const DiscoveryChallengeInfoWithoutLogin =
    availableChallenges &&
    availableChallenges.find((challenge) => challenge.PrizeType === DISCOVERY_ID);

  //TODO: Refactor this, we should not dispatch redux actions from components.
  const dispatch = useDispatch();

  useEffect(() => {
    if (user && coinsBeforeLogin) {
      dispatch(addCoins());
      dispatch(clearCoins());
    }
  }, [user]);

  // Default style for Gana Dinero Amount Card.
  let balanceCardStyle: IBalanceCardStyle = {
    cardBackground: "white",
    boxShadow: "none",
    cardTextColor: "",
    amountCoinText: "",
  };

  const hadCoinsInNetaWallet = coins && parseFloat(coins?.customerCurrentNetaWallet) > 0;

  //TODO: Refactor this, could we use here a simple if-else condition?
  switch (!!hadCoinsInNetaWallet) {
    case false:
      balanceCardStyle = {
        ...balanceCardStyle,
        cardBackground:
          "linear-gradient(180deg, rgba(173, 173, 173, 0.25), rgba(123, 123, 123, 0.25), rgba(87, 87, 87, 0.25))",
        boxShadow: "0px 1px 7px rgba(180, 180, 180, 0.25)",
        cardTextColor: "#777777",
        amountCoinText: "$0 pesos 😔",
      };
      break;
    case true:
      balanceCardStyle = {
        ...balanceCardStyle,
        cardBackground: "linear-gradient(180deg, #FFBB36 0%, #EC9C00 100%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25), inset -22px -10px 71px rgba(116, 0, 0, 0.25)",
        cardTextColor: "#610C00",
        amountCoinText: `${formatMoney(Number(userAmountCoins), CURRENCY_NAME)} pesos 🥳`,
      };
      break;
  }

  /**
   * User is not register yet but won coins.
   * @returns {ReactElement} container with button to allow register/login
   */
  const WonCoinsGoToLoginContainer = (): ReactElement => {
    return (
      <Container maxW="container.xl">
        <Box pt="40px">
          <Box h="100%" display="flex" textAlign="center" justifyContent="center">
            <Box flexDirection="column" alignItems="center" p="10px 20px">
              <Box display="flex" textAlign="center" justifyContent="center">
                <IconGirl />
              </Box>
              <Text fontSize="19px" fontWeight="500" lineHeight="28px" color="#4D4D4D">
                Ingresa tus datos para continuar
              </Text>
              <Box p="20px 0">
                <Button
                  onClick={() => {
                    trackEvent(DAILY_REWARD_INGRESAR_DATOS_BUTTON_CLICKED, [
                      TrackerApp.Amplitude,
                      TrackerApp.Segment,
                    ]);
                    onOpenLoginFlow();
                  }}
                  borderRadius="16px"
                  h="56px"
                  w="90%"
                  colorScheme="netaBlue"
                >
                  <Text fontSize="18px">Ingresar datos</Text>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    );
  };

  /**
   * User can play the game
   * @returns {ReactElement} container with a game
   */
  const GanaDineroGameContainer = (): ReactElement => {
    return (
      <Container maxW="container.xl">
        <Box pt="20px">
          <Box
            background={balanceCardStyle.cardBackground}
            h="162px"
            boxShadow={balanceCardStyle.boxShadow}
            borderTopEndRadius="12px"
            borderTopStartRadius="12px"
            display="flex"
            alignItems="center"
          >
            <Box
              flexDirection="column"
              alignItems="center"
              p="10px 20px 10px"
              color={balanceCardStyle.cardTextColor}
            >
              <Box fontWeight="700" fontSize="17px">
                Tu saldo a favor es:
              </Box>

              <Box fontWeight="700" fontSize={isMobile ? "28px" : "22px"}>
                {balanceCardStyle.amountCoinText}
              </Box>

              <Box fontWeight="500" fontSize="15px">
                Este saldo lo podrás usar cuando realices una compra{" "}
              </Box>
            </Box>
          </Box>
          <Box
            background="#b76512"
            opacity={40}
            h="60px"
            boxShadow={balanceCardStyle.boxShadow}
            borderBottomEndRadius="12px"
            borderBottomStartRadius="12px"
            display="flex"
            alignItems="center"
          >
            <Flex flexDirection="row" alignItems="center">
              <Flex p="8px 0">
                <Image w="100%" src={STACK_COINS} />
              </Flex>
              <Link
                onClick={() => router.push("gana-dinero/historial-monetas")}
                textDecoration="none"
              >
                <Flex flexDirection="row" alignItems="center">
                  <Text fontSize="17px" color="#FFFFFF" fontWeight="700">
                    Historial de movimientos
                  </Text>
                  <Flex p={2}>
                    <ArrowIcon />
                  </Flex>
                </Flex>
              </Link>
            </Flex>
          </Box>
          <Box color="#000" fontWeight="700" fontSize="19px" textAlign="center" marginTop="12px">
            Retos para ganar monetas todos los días 🎉
          </Box>
          <Box
            color="#499453"
            fontWeight="700"
            fontSize="19px"
            textAlign="center"
            marginTop="12px"
            marginBottom="13px"
          >
            (3 monetas = 3 pesos)
          </Box>
          <SimpleGrid columns={[1, 1, 2]} gap={6} justifyItems="center">
            {DiscoveryChallengeInfoWithoutLogin?.isActive ? (
              <DiscoveryCard
                cardDescription={DiscoveryChallengeInfoWithoutLogin.CardDescription}
                coinClaimed={DiscoveryChallengeInfoWithoutLogin.completed}
                countDown={countDown}
                loading={isCoinsLoading}
                buttonAction={() => {
                  if (user) {
                    dispatch(addCoins());
                  } else {
                    dispatch(saveCoins());
                  }
                  trackEvent(DAILY_REWARD_BUTTON_CLICKED, [
                    TrackerApp.Amplitude,
                    TrackerApp.Segment,
                  ]);
                }}
              />
            ) : null}
            {GMVChallengeInfoWithoutLogin &&
              GMVChallengeInfoWithoutLogin.map((challenge, index) => {
                const info = GMVChallengeInfo[index];
                if (challenge.isActive) {
                  return (
                    <GMVCard
                      cardDescription={challenge.CardDescription}
                      title={`Te regalamos $${challenge.PriceAmount}`}
                      priceAmount={challenge.PriceAmount}
                      backToHome={backToHome}
                      progressBarValue={getProgressBasedOnBasketTotal(
                        totalAmount,
                        challenge.GMVThreshold
                      )}
                      completed={info?.completed}
                      endChallenge={new Date(challenge?.EndTimeUTC)}
                      GMVThreshold={challenge.GMVThreshold}
                    />
                  );
                } else {
                  return null;
                }
              })}

            {skuChallenges &&
              skuChallenges.map((skuChallenge) => {
                if (skuChallenge.isActive) {
                  const skuItem = basket.find(
                    (basketItem) => basketItem.sku === skuChallenge?.Code
                  );
                  return (
                    <SKUCard
                      title={skuChallenge.CardDescription}
                      requiredItems={skuChallenge.CodeThreshold}
                      awardCoins={skuChallenge.PriceAmount}
                      endDate={new Date(skuChallenge.EndTimeUTC)}
                      progressBarValue={skuItem ? skuItem.quantity : 0}
                      buttonAction={() => {
                        if (skuChallenge) onChallengeAccepted(skuChallenge?.Id);
                        trackEvent(
                          MONETAS_SKU_BUTTON_CLICKED,
                          [TrackerApp.Amplitude, TrackerApp.Segment],
                          { challengeId: skuChallenge.Id }
                        );
                      }}
                      accepted={skuChallenge.isAccepted}
                      completed={skuChallenge.completed}
                      image="/assets/images/sku_placeholder.webp"
                    />
                  );
                } else {
                  return null;
                }
              })}
            {categoryChallenges &&
              categoryChallenges.map((categoryChallenge) => {
                if (categoryChallenge.isActive) {
                  let totalCategoryItems = 0;
                  basket.forEach((basketItem) => {
                    if (basketItem.categoryId === parseInt(categoryChallenge?.Code)) {
                      totalCategoryItems = totalCategoryItems + basketItem.quantity;
                    }
                  });

                  return (
                    <SKUCard
                      title={categoryChallenge.CardDescription}
                      requiredItems={categoryChallenge.CodeThreshold}
                      awardCoins={categoryChallenge.PriceAmount}
                      endDate={new Date(categoryChallenge.EndTimeUTC)}
                      progressBarValue={totalCategoryItems}
                      buttonAction={() => {
                        if (categoryChallenge) onChallengeAccepted(categoryChallenge?.Id);
                        trackEvent(
                          MONETAS_CATEGORY_BUTTON_CLICKED,
                          [TrackerApp.Amplitude, TrackerApp.Segment],
                          { challengeId: categoryChallenge.Id }
                        );
                        router.push(`category/${categoryChallenge.Code}`);
                      }}
                      accepted={categoryChallenge.isAccepted}
                      completed={categoryChallenge.completed}
                      image="/assets/images/category_placeholder.webp"
                      secondaryColor
                    />
                  );
                } else {
                  return null;
                }
              })}
          </SimpleGrid>
        </Box>
      </Container>
    );
  };

  return !user ? WonCoinsGoToLoginContainer() : GanaDineroGameContainer();
};
