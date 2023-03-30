import React, { FC, ReactElement } from "react";

import { Box } from "@chakra-ui/react";
import { ICardLayoutProps } from "./ICardLayoutProps";
import {
  BannerText,
  BannerWrapper,
  BorderWrapper,
  CardWrapper,
  GradientWrapper,
} from "./CardLayout.styled";

/**
 * CardLayout
 * @param {ICardLayoutProps} props component props
 * @returns {ReactElement} the react element to render.
 */
export const CardLayout: FC<ICardLayoutProps> = ({
  children,
  bannerText,
  gradientColors,
}): ReactElement => {
  return (
    <CardWrapper>
      <BannerWrapper>
        <BannerText data-testid="card-layout-banner">{bannerText}</BannerText>
      </BannerWrapper>
      <Box pt="20px">
        <Box h="100%">
          <BorderWrapper>
            <GradientWrapper
              data-testid="card-layout-children"
              background={
                gradientColors
                  ? `radial-gradient(at 50% top, ${gradientColors})`
                  : "radial-gradient(#418edd, #2253c9)"
              }
            >
              {children}
            </GradientWrapper>
          </BorderWrapper>
        </Box>
      </Box>
    </CardWrapper>
  );
};
