import React, { useEffect, useState, ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import throttle from "lodash.throttle";
import IconCoin from "styled/icons/Coin";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";

import { useMediaQuery, Box, Button, Flex, Img } from "@chakra-ui/react";

import {
  BannerText,
  CustomProgressBar,
  MainWrapper,
  ProgressBarShrinked,
} from "./GMVBanner.styled";
import { IGMVBannerProps } from "./IGMVBannerProps";

/**
 * GMVBanner
 * @param {IGMVBannerProps} props component props
 * @returns {ReactElement} the react element to render.
 */
export const GMVBanner = (props: IGMVBannerProps): ReactElement => {
  const { coins, progressBarValue, GMVThreshold, checkoutOpened, buttonAction } = props;
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const totalLeft = GMVThreshold - progressBarValue;
  const completed = progressBarValue >= GMVThreshold;
  const [isLargerThanSm] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);

  const handleScroll = throttle(() => {
    const offset = document.getElementById("header")?.offsetHeight || 0;
    const { scrollTop } = document.documentElement;
    setScrollTop(scrollTop);

    const scrolled = scrollTop >= offset;
    if (hasScrolled !== scrolled) {
      setHasScrolled(scrolled);
    }
  }, 250);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <MainWrapper
      $completed={completed}
      $hasScrolled={hasScrolled}
      $scrollTop={scrollTop}
      sx={{
        position: "sticky",
        top: `${isLargerThanSm ? "119px" : hasScrolled ? "135px" : "10px"}`,
      }}
    >
      <Box
        w={isLargerThanSm ? (completed ? "45%" : "35%") : "100%"}
        alignSelf="center"
        data-testid="gmv-banner-container"
      >
        {completed ? (
          <Flex alignItems="center" justifyContent="space-between">
            <BannerText
              fontSize={hasScrolled ? "13px" : isLargerThanSm ? "20px" : "15px"}
              data-testid="gmv-banner-complete-text"
            >
              Gana tus monetas finalizando tu compra
            </BannerText>
            <Button
              color="netaBlue.500"
              fontWeight="800"
              fontSize={["12px", "17px"]}
              borderRadius="9px"
              bg="#FFF"
              height={!isLargerThanSm && hasScrolled ? "22px" : "42px"}
              padding={!isLargerThanSm && hasScrolled ? "0 12px" : "0 24px"}
              onClick={buttonAction}
              data-testid="gmv-banner-button"
            >
              Finalizar compra
            </Button>
          </Flex>
        ) : (
          <>
            {progressBarValue > 0 ? (
              <BannerText $hasScrolled={hasScrolled} data-testid="gmv-banner-text">
                TE FALTAN {formatMoney(totalLeft, CURRENCY_NAME)} PARA GANAR {coins} MONETAS
              </BannerText>
            ) : (
              <BannerText $hasScrolled={hasScrolled} data-testid="gmv-banner-text">
                ¡POR COMPRAS MAYORES A ${GMVThreshold} GANA {coins} MONETAS!!
              </BannerText>
            )}
            {!checkoutOpened && (
              <>
                {hasScrolled && !isLargerThanSm ? (
                  <Box className="progress-bar" pos="relative" w="100%" mt="20px">
                    <ProgressBarShrinked value={progressBarValue} min={0} max={GMVThreshold} />
                  </Box>
                ) : (
                  <Box className="progress-bar" pos="relative" w="100%" mt="20px">
                    <CustomProgressBar value={progressBarValue} min={0} max={GMVThreshold} />
                    <Img
                      src="/assets/images/icono_gana.png"
                      height="31px"
                      pos="absolute"
                      right="-10px"
                      bottom="-5px"
                    />
                    <Box pos="absolute" right="2px" bottom="-3px">
                      <IconCoin width="25px" height="26px" />
                    </Box>
                  </Box>
                )}
              </>
            )}
          </>
        )}
      </Box>
    </MainWrapper>
  );
};
