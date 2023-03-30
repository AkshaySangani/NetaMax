import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box, Flex } from "@chakra-ui/react";

export const ImageContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: end;

  ${responsive.mdPlus} {
  }
`;

export const TextContainer = styled(Flex)`
  align-self: center;
  margin: 4px;

  ${responsive.mdPlus} {
    width: 100%;
  }
`;

export const ImageSize = styled(Flex)`
  width: 65px;
  height: 65px;
  display: flex;
  align-self: center;

  ${responsive.mdPlus} {
    display: flex;
    align-self: center;
    width: 49px;
    height: 49px;
  }
`;

export const MainContainer = styled(Box)`
  padding: 20px 24px;
  max-height: 100px;

  ${responsive.mdPlus} {
    padding: 0px;
    max-height: 49px;
  }
`;

export const BannerContainer = styled(Box)`
  ${responsive.mdPlus} {
    border-radius: 0px;
  }
`;
