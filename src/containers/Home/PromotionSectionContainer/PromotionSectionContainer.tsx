import React, { ReactElement } from "react";

import { useDispatch } from "react-redux";

import { CarouselSection } from "components/common/Sections/CarouselSection/CarouselSection";
import { BANNER_CLICKED, BANNER_SCROLLED, TrackerApp } from "constants/amplitudeConstants";
import {
  MAX_PROMOTIONS_PER_SLIDE_DESKTOP,
  MAX_PROMOTIONS_PER_SLIDE_MOBILE,
  MAX_PROMOTIONS_PER_SLIDE_TABLET,
  PROMOTION_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  PROMOTION_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
} from "constants/promotionConstants";
import { IPromotion } from "dataflows/Promotion/IPromotion";
import { selectPromotion } from "dataflows/Promotion/PromotionSlice";
import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";
import { trackEvent } from "utils/tracker";

import { Box, Container, Image, Square } from "@chakra-ui/react";

import { IPromotionSectionContainerProps } from "./IPromotionSectionContainerProps";

/**
 * Promotion section container component.
 * @param {IPromotionSectionContainerProps} props - container props.
 * @returns {ReactElement} React element.
 */
export const PromotionSectionContainer = (props: IPromotionSectionContainerProps): ReactElement => {
  const { promotions } = props;

  const dispatch = useDispatch();
  const router = useRouter();

  /**
   * Action on promotion click.
   * @param {IPromotion} promotion the product clicked.
   * @returns {void}
   */
  const onPromotionClick = (promotion: IPromotion): void => {
    trackEvent(BANNER_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      promoName: promotion.name,
      position: promotions.map((p) => p.id).indexOf(promotion.id) + 1,
    });
    dispatch(selectPromotion(String(promotion)));
    router.push(`promotions/${promotion.id}`);
  };

  const promotionElements = Array.isArray(promotions)
    ? promotions.map((promotion) => {
        return (
          <Box key={promotion.id} maxW="295px" rounded="10px" overflow="hidden">
            <Square
              rounded="md"
              boxShadow="md"
              bg="white"
              borderWidth="1px"
              onClick={() => {
                onPromotionClick(promotion);
              }}
            >
              <Image
                src={promotion.seoFilename}
                draggable="false"
                alt={promotion.name}
                fallbackSrc="/assets/images/noimg.png"
                cursor="pointer"
              />
            </Square>
          </Box>
        );
      })
    : [];

  const breakpoints = {
    [screenSizes.xs]: {
      slidesPerView: MAX_PROMOTIONS_PER_SLIDE_MOBILE,
      spaceBetween: PROMOTION_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.sm]: {
      slidesPerView: MAX_PROMOTIONS_PER_SLIDE_TABLET,
      spaceBetween: PROMOTION_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.md]: {
      slidesPerView: MAX_PROMOTIONS_PER_SLIDE_TABLET,
      spaceBetween: PROMOTION_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
    [screenSizes.lg]: {
      slidesPerView: MAX_PROMOTIONS_PER_SLIDE_DESKTOP,
      spaceBetween: PROMOTION_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
  };

  /**
   * Action on promo scroll.
   * @returns {void}
   */
  const onBannerSectionSlide = () => {
    trackEvent(BANNER_SCROLLED, [TrackerApp.Amplitude, TrackerApp.Segment]);
  };

  return (
    <Container minW="100%">
      <CarouselSection
        title=""
        elements={promotionElements}
        breakpoints={breakpoints}
        slidesPerGroup={1}
        onSlideChange={() => onBannerSectionSlide()}
      />
    </Container>
  );
};
