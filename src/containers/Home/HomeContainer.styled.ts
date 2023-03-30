import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box } from "@chakra-ui/react";

export const BasketButtonContainer = styled(Box)`
  display: flex;

  ${responsive.smPlus} {
    display: none;
  }
`;
