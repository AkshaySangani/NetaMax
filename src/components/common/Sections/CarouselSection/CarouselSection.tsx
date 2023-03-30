/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState, ReactElement } from "react";

import SliderLeftArrowIcon from "styled/icons/SliderLeftArrow";
import SliderLeftArrowStrongIcon from "styled/icons/SliderLeftArrowStrongIcon";
import SliderRightArrowIcon from "styled/icons/SliderRightArrow";
import SliderRightArrowStrongIcon from "styled/icons/SliderRightArrowStrongIcon";
import { screenSizes } from "styled/screen";
import { A11y, Controller, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SwiperSlide } from "swiper/react";

import { useMediaQuery, Box, Text } from "@chakra-ui/react";

import {
  CustomButton,
  CustomSwiper,
  SliderLeftArrowContentResponsive,
  SliderRightArrowContentResponsive,
  SwiperButtons,
} from "./CarouselSection.styled";
import { ICarouselSectionProps } from "./ICarouselSectionProps";

/**
 * This is a wrapper around the swiper library.
 * It is used to display a carousel of items.
 * @param {ICarouselSectionProps} props The properties of the component.
 * @returns {ReactElement} The rendered component.
 */
export const CarouselSection = (props: ICarouselSectionProps): ReactElement => {
  const {
    title,
    titleColor,
    elements,
    breakpoints,
    onClickSection,
    slidesPerGroup,
    onSlideChange,
  } = props;

  const [swiper, setSwiper]: any = useState(0);
  const [showMobileArrow, setShowMobileArrow]: any = useState(false);
  const prevRef: React.MutableRefObject<any> = useRef();
  const nextRef: React.MutableRefObject<any> = useRef();
  const prevMobileRef: React.MutableRefObject<any> = useRef();
  const nextMobileRef: React.MutableRefObject<any> = useRef();
  const sectionCarousel: React.MutableRefObject<any> = useRef();
  const screenHeight = window.innerHeight;
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.sm}px)`);

  useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = isDesktop ? prevRef?.current : prevMobileRef?.current;
      swiper.params.navigation.nextEl = isDesktop ? nextRef?.current : nextMobileRef?.current;
      swiper.navigation.init();
      swiper.navigation.update();
      swiper.on("slideChange", onSlideChange);
    }
  }, [swiper, isDesktop]);

  useEffect(() => {
    /**
     * Handle the position of carousel in to the screen.
     * @returns {void} calc the position of carousel.
     */
    const handlePositionCarousel = (): void => {
      const elementBoundingClient = sectionCarousel.current.getBoundingClientRect();

      if (
        elementBoundingClient.top < screenHeight / 2 &&
        elementBoundingClient.bottom > screenHeight / 2
      ) {
        setShowMobileArrow(true);
      } else {
        setShowMobileArrow(false);
      }
    };

    handlePositionCarousel();

    window.addEventListener("scroll", handlePositionCarousel);

    return () => {
      window.removeEventListener("scroll", handlePositionCarousel);
    };
  }, []);

  /**
   * Handle the press in arrow mobile of carousel.
   * @param {React.MouseEvent<HTMLElement>} event the event element.
   * @returns {void} calc the position of carousel.
   */
  const handlePressMobileArrow = (event: React.MouseEvent<HTMLElement>): void => {
    const element = event.currentTarget as HTMLInputElement;
    element.classList.add("active");
    setTimeout(() => {
      element.classList.remove("active");
    }, 300);
  };

  return (
    <Box pt={7} ref={sectionCarousel}>
      <Box display="flex">
        {title && (
          <Box pb={5} display="flex" alignItems="center">
            <Text fontSize="xl" fontWeight="700" textColor={titleColor}>
              {title}
            </Text>
            {onClickSection && (
              <Text
                ml="10px"
                color="#F25523"
                fontSize="16px"
                fontWeight="500"
                cursor="pointer"
                onClick={onClickSection}
              >
                Ver todos
              </Text>
            )}
          </Box>
        )}
        <SwiperButtons>
          <CustomButton className="swiper-button" ref={prevRef}>
            <SliderLeftArrowIcon />
          </CustomButton>
          <CustomButton className="swiper-button" ref={nextRef}>
            <SliderRightArrowIcon />
          </CustomButton>
        </SwiperButtons>
      </Box>
      <Box position="relative">
        <CustomSwiper
          slidesPerView="auto"
          spaceBetween={3}
          breakpoints={breakpoints}
          slidesPerGroup={slidesPerGroup}
          pagination={
            elements.length <= 6
              ? {
                  clickable: true,
                }
              : false
          }
          navigation={{
            prevEl: isDesktop ? prevRef?.current : prevMobileRef?.current,
            nextEl: isDesktop ? nextRef?.current : nextMobileRef?.current,
          }}
          modules={[Pagination, Navigation, Scrollbar, A11y, Controller]}
          className="mySwiper"
          onSwiper={setSwiper}
          rewind={true}
        >
          {elements.map((element, index) => (
            <SwiperSlide key={index}>{element}</SwiperSlide>
          ))}
        </CustomSwiper>
        <SliderLeftArrowContentResponsive
          ref={prevMobileRef}
          className={`${showMobileArrow ? "" : "hidden"}`}
          onClick={handlePressMobileArrow}
        >
          <SliderLeftArrowStrongIcon fill="#ffffff" width="12" height="12" />
        </SliderLeftArrowContentResponsive>
        <SliderRightArrowContentResponsive
          ref={nextMobileRef}
          className={`${showMobileArrow ? "" : "hidden"}`}
          onClick={handlePressMobileArrow}
        >
          <SliderRightArrowStrongIcon fill="#ffffff" width="12" height="12" />
        </SliderRightArrowContentResponsive>
      </Box>
    </Box>
  );
};
