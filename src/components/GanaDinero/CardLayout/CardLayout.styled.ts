import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box, Flex } from "@chakra-ui/react";

export const CardWrapper = styled(Flex)`
  flex-direction: column;
  text-align: center;
  max-width: 350px;
  width: 100%;
  margin-bottom: 15px;

  ${responsive.mdPlus} {
    max-width: 520px;
    margin-bottom: 50px;
  }
`;

export const BannerWrapper = styled(Box)`
  background: linear-gradient(#aa019c, #5c0178);
  position: absolute;
  padding: 10px 16px;
  border-radius: 18px;
  align-self: center;
  margin-top: -2px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset -22px -10px 71px rgba(116, 0, 0, 0.25);

  ${responsive.mdPlus} {
    padding: 12px 30px;
    border-radius: 20px;
    margin-top: -10px;
  }
`;

export const BannerText = styled(Box)`
  color: #fff;
  font-size: 17px;
  font-weight: 700;

  ${responsive.mdPlus} {
    font-size: 22px;
  }
`;

export const BorderWrapper = styled(Box)`
  border: 1px solid #3056ba;
  padding: 4px;
  border-radius: 13px;
`;

export const GradientWrapper = styled(Flex)`
  border-radius: 12px;
  padding: 35px 8px 0 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), inset -22px -10px 71px rgba(116, 0, 0, 0.25);
`;
