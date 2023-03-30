import styled from "styled-components";

import { Flex, Progress, Text } from "@chakra-ui/react";
import { responsive } from "styled/responsive";

export const CustomProgressBar = styled(Progress)`
  margin-top: -16px;
  border-radius: 10px;
  margin-right: 16px;
  background: linear-gradient(0deg, #412d73 0%, #25094f 100%);
  border: 3px solid #418edd;
  box-shadow: 0px 1px 1px #074675;
  div:first-child {
    background: linear-gradient(0deg, #959800 0%, #ffe600 100%);
    height: 65%;
    border-radius: 10px;
    margin: 1.3px 0 0 1px;
  }
`;

export const ProgressBarShrinked = styled(Progress)`
  margin-top: -16px;
  background: linear-gradient(0deg, #412d73 0%, #25094f 100%);
  div:first-child {
    background: linear-gradient(0deg, #959800 0%, #ffe600 100%);
  }
`;

export const MainWrapper = styled(Flex)`
  background: ${({ $completed }) =>
    $completed ? "#9000C2" : "radial-gradient(50% 50% at 50% 50%, #418edd 0%, #2253c9 100%)"};
  background-image: ${({ $completed }) => ($completed ? "url('/assets/images/confeti.webp')" : "")};
  background-size: contain;
  background-repeat: repeat;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset -22px -10px 71px rgba(116, 0, 0, 0.25);
  padding: ${({ $hasScrolled }) => ($hasScrolled ? "5px" : "10px 14px")};
  z-index: 2;
  width: ${({ $hasScrolled }) => ($hasScrolled ? "100%" : "unset")};
  margin: ${({ $hasScrolled }) => ($hasScrolled ? "0px" : "0 20px")};
  border-radius: ${({ $hasScrolled }) => ($hasScrolled ? "0" : "12px")};
  justify-content: center;

  ${responsive.mdPlus} {
    border-radius: 0px;
    width: 100%;
    margin: 0px;
    height: 50px;
    padding: 10px 14px;
  }
`;

export const BannerText = styled(Text)`
  font-size: ${({ fontSize }) => fontSize || "11px"};
  color: #fff;
  font-weight: 900;
  text-align: ${({ $hasScrolled }) => ($hasScrolled ? "center" : "unset")};
  ${responsive.mdPlus} {
    text-align: center;
    font-size: 16px;
  }
`;
