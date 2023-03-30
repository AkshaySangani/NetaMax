import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box, ModalContent } from "@chakra-ui/react";

export const ModalContentCustom = styled(ModalContent)`
  background: #ffffff;
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  margin: 0;
  padding: 1rem;
  ${responsive.mdPlus} {
    background: transparent;
  }
`;

export const BodyContent = styled(Box)`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #c00200 0%, #f04d4b 111.71%);
  border-radius: 32px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  ${responsive.mdPlus} {
    width: 55%;
    height: auto;
    padding: 0 6rem 2.5rem 6rem;
    justify-content: center;
  }
`;

export const BodyDescription = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto 0;
  padding-bottom: 5rem;
  ${responsive.mdPlus} {
    padding-bottom: 0;
  }
`;

export const ArrowContent = styled(Box)`
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 15px;
  background-color: #c00200;
  border-radius: 15px 15px 0 0;
  &:before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom: 4px solid #c00200;
    transform: rotate(161deg);
    top: 4px;
    left: -10px;
  }
  &:after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom: 4px solid #c00200;
    transform: rotate(-161deg);
    top: 4px;
    right: -10px;
  }
`;

export const ExclamationContent = styled(Box)`
  position: relative;
  width: 44px;
  height: 44px;
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  top: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  &:after {
    content: "?";
    position: absolute;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    color: #ffffff;
  }
`;
