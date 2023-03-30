import styled, { createGlobalStyle } from "styled-components";
import { responsive } from "styled/responsive";

import { Box } from "@chakra-ui/react";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
`;

export const SearchBarContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${responsive.smPlus} {
    width: 100%;
  }
`;
