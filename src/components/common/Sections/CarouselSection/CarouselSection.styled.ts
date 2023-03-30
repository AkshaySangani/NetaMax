import styled from "styled-components";
import { responsive } from "styled/responsive";
import { Swiper } from "swiper/react";

import { Box } from "@chakra-ui/react";

export const SwiperButtons = styled(Box)`
  display: none;

  ${responsive.smPlus} {
    display: flex;
    margin-left: auto;
  }
`;

export const CustomSwiper = styled(Swiper)`
  &.swiper-button-prev .swiper-button-next {
    justify-content: center;
  }

  &.swiper {
    display: flex;
    flex-direction: column;
    order: 0;
  }

  .swiper-wrapper {
    order: 1 !important;
    padding-bottom: 30px !important;
  }

  .swiper-pagination {
    position: static;
    text-align: center;
    -moz-transition: 0.3s opacity;
    transition: 0.3s opacity;
    -moz-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
    order: 2 !important;

    ${responsive.smPlus} {
      display: none;
    }
  }

  .swiper-pagination-bullet-active {
    background: #f25523;
  }
`;

export const CustomButton = styled.div`
  &.swiper-button {
    cursor: pointer;
    color: #fff;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    fill: #f04d4b;
  }

  &.swiper-button-disabled {
    fill: #aaaaaa;
  }
`;

export const SliderLeftArrowContentResponsive = styled(Box)`
  position: absolute;
  width: 30px;
  height: 60px;
  background-color: rgba(4, 169, 64, 0.3);
  border-radius: 0 30px 30px 0;
  top: 50%;
  transform: translateY(-50%);
  left: -1rem;
  display: flex;
  align-items: center;
  padding-left: 3px;
  cursor: pointer;
  z-index: 2;
  ${responsive.smPlus} {
    display: none;
  }
  &:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 50px;
    background-color: #04a940;
    border-radius: 0 25px 25px 0;
    top: 5px;
    left: 0;
    z-index: -1;
  }
  &.hidden {
    display: none;
  }
  &.active {
    background-color: rgba(4, 169, 64, 0.6);
  }
  .leftArrow {
    position: absolute;
  }
`;

export const SliderRightArrowContentResponsive = styled(Box)`
  position: absolute;
  width: 30px;
  height: 60px;
  background-color: rgba(4, 169, 64, 0.3);
  border-radius: 30px 0 0 30px;
  top: 50%;
  transform: translateY(-50%);
  right: -1rem;
  display: flex;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;
  z-index: 2;
  ${responsive.smPlus} {
    display: none;
  }
  &:before {
    content: "";
    position: absolute;
    width: 25px;
    height: 50px;
    background-color: #04a940;
    border-radius: 30px 0 0 30px;
    top: 5px;
    right: 0;
    z-index: -1;
  }
  &.hidden {
    display: none;
  }
  &.active {
    background-color: rgba(4, 169, 64, 0.6);
  }
`;
