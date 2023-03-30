import React, { ReactElement } from "react";

import { useDispatch } from "react-redux";

import { CarouselSection } from "components/common/Sections/CarouselSection/CarouselSection";
import { CATEGORY_CLICKED, CATEGORY_SCROLLED, TrackerApp } from "constants/amplitudeConstants";
import {
  CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
  CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_TABLET,
  CATEGORY_TITLE,
  MAX_CATEGORIES_PER_SLIDE_DESKTOP,
  MAX_CATEGORIES_PER_SLIDE_MOBILE,
  MAX_CATEGORIES_PER_SLIDE_TABLET,
} from "constants/categoryConstants";
import { selectCategory } from "dataflows/Category/CategorySlice";
import { ICategory } from "dataflows/Category/ICategory";
import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";
import { trackEvent } from "utils/tracker";

import { Box, Container, Img } from "@chakra-ui/react";

import { ICategorySectionContainerProps } from "./ICategorySectionContainerProps";

/**
 * Category section container component.
 * @param {ICategorySectionContainerProps} props The component props.
 * @returns {ReactElement} React element.
 */
export const CategorySectionContainer = (props: ICategorySectionContainerProps): ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { categories } = props;

  /**
   * Action on category click.
   * @param {ICategory} category the category clicked.
   * @returns {void}
   */
  const onCategoryClick = (category: ICategory): void => {
    const categoryPosition = categories?.findIndex((c) => c.id === category.id) || -1;
    if (categories) {
      trackEvent(CATEGORY_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
        category: category.name,
        categoryPosition: categoryPosition,
        position: categories.map((c) => c.id).indexOf(category.id) + 1,
      });
    }
    dispatch(selectCategory(category.id));
    router.push(`/category/${category.id}`);
  };

  /**
   * Action on category click.
   * @param {ICategory} category the category clicked.
   * @returns {void}
   */
  const allCategoriesClick = (): void => {
    router.push("/categories/");
  };

  /**
   * Action on category scroll.
   * @returns {void}
   */
  const onCategorySectionSlide = () => {
    trackEvent(CATEGORY_SCROLLED, [TrackerApp.Amplitude, TrackerApp.Segment]);
  };

  const breakpoints = {
    [screenSizes.xs]: {
      slidesPerView: MAX_CATEGORIES_PER_SLIDE_MOBILE,
      spaceBetween: CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.sm]: {
      slidesPerView: MAX_CATEGORIES_PER_SLIDE_TABLET,
      spaceBetween: CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_TABLET,
    },
    [screenSizes.md]: {
      slidesPerView: MAX_CATEGORIES_PER_SLIDE_DESKTOP,
      spaceBetween: CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
    [screenSizes.lg]: {
      slidesPerView: MAX_CATEGORIES_PER_SLIDE_DESKTOP,
      spaceBetween: CATEGORY_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
  };

  const categoryElements = Array.isArray(categories)
    ? categories.map((category) => {
        return (
          <Box key={category.id}>
            <Img
              onClick={() => onCategoryClick(category)}
              alignContent="center"
              src={category.seoFilename}
              alt={category.name}
              fit="contain"
              htmlWidth="100%"
              cursor="pointer"
            />
          </Box>
        );
      })
    : [];

  return (
    <Container minW="100%">
      <CarouselSection
        title={CATEGORY_TITLE}
        elements={categoryElements}
        breakpoints={breakpoints}
        onClickSection={allCategoriesClick}
        slidesPerGroup={1}
        onSlideChange={onCategorySectionSlide}
      />
    </Container>
  );
};
