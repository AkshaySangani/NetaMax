import React, { ReactElement } from "react";

import { Box, Image, Text } from "@chakra-ui/react";

import { IPromoBanner } from "./IPromoBanner";
import {
  BannerContainer,
  ImageContainer,
  ImageSize,
  MainContainer,
  TextContainer,
} from "./PromoBanner.styled";

/**
 * The PromoBanner Component
 * @param {IPromoBanner} props the PromoBanner props.
 * @returns {ReactElement} the PromoBanner component.
 */
export const PromoBanner = (props: IPromoBanner): ReactElement => {
  const { bannerPlainText } = props;
  return (
    <MainContainer>
      <BannerContainer
        backgroundColor="#5438FF"
        boxShadow="inset 0px 4px 14px rgba(0, 0, 0, 0.25)"
        borderRadius="12px"
        display="flex"
        justifyContent="center"
      >
        <Box display="flex" justifyContent="center">
          <ImageContainer>
            <ImageSize>
              <Image src="/gif/bell.gif" alt="Animate Bell" />
            </ImageSize>
          </ImageContainer>
          <TextContainer>
            <Text fontSize="13px" color="white">
              <b>{bannerPlainText || ""}</b>
            </Text>
          </TextContainer>
        </Box>
      </BannerContainer>
    </MainContainer>
  );
};
