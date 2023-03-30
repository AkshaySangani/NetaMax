import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box, Flex } from "@chakra-ui/react";

export const MainInfoHeader = styled(Box)`
  padding: 5px 0px;

  ${responsive.smPlus} {
    padding: 0px;
    width: 100%;
    align-self: center;
  }
`;

export const InfoHeaderContainer = styled(Flex)`
  margin-top: 20px;
  height: 65px;
  border-radius: 0px;
  justify-content: right;
  padding-right: 20px;
  background: rgba(123, 1, 0, 0.42);
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
`;

export const MinifiedInfoHeaderContainer = styled(Flex)`
  justify-content: center;
  background: rgba(123, 1, 0, 0.42);
  height: 30px;
  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
`;
