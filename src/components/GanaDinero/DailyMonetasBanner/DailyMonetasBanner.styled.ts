import styled from "styled-components";

import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { responsive } from "styled/responsive";

export const MainContainer = styled(Box)`
  background: radial-gradient(#418edd, #2253c9);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset -22px -10px 71px rgba(116, 0, 0, 0.25);
  z-index: 2;
  width: ${(props) => (props.$hasScrolled ? "100%" : "90%")};
  margin: ${(props) => (props.$hasScrolled ? "0px" : "30px 5% 0px 5%")};
  border-radius: ${(props) => (props.$hasScrolled ? "0px 0px" : "12px")};
  height: ${(props) => (props.$hasScrolled ? "40px" : "70px")};
  ${responsive.mdPlus} {
    border-radius: 0px;
    width: 100%;
    margin: 0px;
    height: 50px;
  }
`;

export const BannerContainer = styled(Flex)`
  position: sticky;
  flex-direction: row;
  align-items: center;
  height: 100%;
  justify-content: center;
  margin: ${(props) => (props.$hasScrolled ? "0px 10px" : "0px")};
  ${responsive.mdPlus} {
    margin: ${(props) => (props.$hasScrolled ? "0px 30px" : "0px")};
  }
`;

export const CoinImagesHolder = styled(Flex)`
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
`;

export const BannerButton = styled(Button)`
  border-radius: 10px;
  background-color: #fff;
  color: #3870ff;
  margin-left: 2.5px;
  margin-right: 5px;
  font-size: 14px;
  ${responsive.mdPlus} {
    font-size: 18px;
  }
`;

export const BannerText = styled(Text)`
  color: #fff;
  font-weight: 600;
  margin-left: 5px;
  margin-right: 2.5px;
  text-align: center;
`;
