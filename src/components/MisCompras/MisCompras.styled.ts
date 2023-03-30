import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box } from "@chakra-ui/react";

export const MisComprasContainer = styled(Box)`
  background: white;
  border: 0.5px solid #9f9f9f;
  box-sizing: border-box;
  box-shadow: 0px 2px 6px rgba(142, 142, 142, 0.25);
  border-radius: 14px;
  display: flex;
  height: 414px;
  flex-direction: column;

  ${responsive.mdPlus} {
    flex-direction: column;
    height: 188px;
  }
`;

export const ButtonsContainer = styled(Box)`
  padding: 10px 20px;
  display: flex;
  justify-content: space-evenly !important;

  ${responsive.mdPlus} {
    display: none;
  }
`;
