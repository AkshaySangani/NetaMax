import React, { ReactElement, useEffect, useState } from "react";

import { useMediaQuery, Image } from "@chakra-ui/react";

import { useRouter } from "next/router";

import throttle from "lodash.throttle";
import {
  BannerButton,
  BannerContainer,
  BannerText,
  CoinImagesHolder,
  MainContainer,
} from "./DailyMonetasBanner.styled";
import { screenSizes } from "styled/screen";
import { IDailyMonetasBannerProps } from "./IDailyMonetasBannerProps";

/**
 * Daily monetas banner which changes depending on if the user is logged in or not
 * @param {IDailyMonetasBanner} props  the props received which tell us if a user is logged in or not
 * @returns {ReactElement} the react element to render.
 */
export const DailyMonetasBanner = (props: IDailyMonetasBannerProps): ReactElement => {
  const router = useRouter();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isLargerThanSm] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);

  const { isLoggedIn, challengeDescription } = props;
  /**
   * Action on item click.
   * @param {string} item the item clicked.
   * @returns {void}
   */
  const redirectTo = (item: string): void => {
    router.push(item);
  };

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
    <MainContainer
      id="gana-monetas-banner"
      $hasScrolled={hasScrolled}
      $scrollTop={scrollTop}
      sx={{
        position: "sticky",
        top: `${isLargerThanSm ? "117px" : "135px"}`,
      }}
    >
      <BannerContainer $hasScrolled={hasScrolled}>
        {!hasScrolled || isLargerThanSm ? (
          <CoinImagesHolder alignItems="flex-end" width="40px">
            <Image src="/assets/images/banner-monetas/moneda-izquierda-arriba.webp" height="20px" />
            <Image src="/assets/images/banner-monetas/moneda-izquierda-abajo.webp" height="17px" />
          </CoinImagesHolder>
        ) : null}

        <BannerText
          data-testid="daily-monetas-banner-text"
          fontSize={isLargerThanSm ? "18px" : "14px"}
        >
          {isLoggedIn && challengeDescription != undefined
            ? `${challengeDescription}! 😜`
            : "¿Quieres ganar dinero para tus compras? 😜"}
        </BannerText>

        <BannerButton
          onClick={() => redirectTo("./gana-dinero")}
          size={isLargerThanSm ? "sm" : hasScrolled ? "xs" : "md"}
        >
          Checa aquí
        </BannerButton>
        {!hasScrolled || isLargerThanSm ? (
          <CoinImagesHolder alignItems="flex-start" width="35px">
            <Image src="/assets/images/banner-monetas/moneda-derecha-arriba.webp" height="17px" />
            <Image src="/assets/images/banner-monetas/moneda-derecha-abajo.webp" height="15px" />
          </CoinImagesHolder>
        ) : null}
      </BannerContainer>
    </MainContainer>
  );
};
