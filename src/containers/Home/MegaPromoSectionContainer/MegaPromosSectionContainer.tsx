import React, { ReactElement } from "react";

import { ProductCard } from "components/common/ProductCard";
import { CarouselSection } from "components/common/Sections/CarouselSection/CarouselSection";
import { PROMO_SCROLLED, TrackerApp } from "constants/amplitudeConstants";
import {
  MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_DESKTOP,
  MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_MOBILE,
  MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
  MEGAPROMOS_SECTION_TITLE,
} from "constants/productConstants";
import { useBasket } from "hooks/basketHooks";
import { screenSizes } from "styled/screen";
import { trackEvent } from "utils/tracker";

import { Container } from "@chakra-ui/react";

import { IMegaPromosContainerProps } from "./IMegaPromosContainerProps";

/**
 * Sales section container component.
 * @param {ISalesSectionContainerProps} props - container props.
 * @returns {ReactElement} React element.
 */
export const MegaPromosSectionContainer = (props: IMegaPromosContainerProps): ReactElement => {
  const { megaPromosSectionProducts, onProductClick } = props;
  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();

  const productElements = Array.isArray(megaPromosSectionProducts)
    ? megaPromosSectionProducts.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
            addToCart={(product) =>
              addToBasket(product, {
                position: megaPromosSectionProducts.map((c) => c.id).indexOf(product.id) + 1,
                isPromoOfTheDay: "Si",
              })
            }
            removeFromCart={removeFromBasket}
            qtyOnBasket={getQtyInBasket(product)}
          />
        );
      })
    : [];

  /**
   * Action on promo scroll.
   * @returns {void}
   */
  const onMegaPromoSectionSlide = () => {
    trackEvent(PROMO_SCROLLED, [TrackerApp.Amplitude, TrackerApp.Segment]);
  };

  const breakpoints = {
    [screenSizes.xs]: {
      slidesPerView: MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_MOBILE,
      spaceBetween: MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.sm]: {
      slidesPerView: MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_MOBILE,
      spaceBetween: MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.md]: {
      slidesPerView: MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
    [screenSizes.lg]: {
      slidesPerView: MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
  };

  return (
    <Container minW="100%">
      <CarouselSection
        title={MEGAPROMOS_SECTION_TITLE}
        titleColor="#E54949"
        elements={productElements}
        breakpoints={breakpoints}
        slidesPerGroup={1}
        onSlideChange={onMegaPromoSectionSlide}
      />
    </Container>
  );
};
