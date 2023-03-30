import styled, { createGlobalStyle } from "styled-components";

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
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
`;
