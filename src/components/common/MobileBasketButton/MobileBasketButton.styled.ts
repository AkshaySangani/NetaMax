import styled from "styled-components";

import { Box } from "@chakra-ui/react";

export const BasketButton = styled(Box)`
  &:active {
    background: #0a4d06;
  }
`;

export const QuantityBasketContainer = styled(Box)`
  width: 15%;
  height: 36px;
  align-content: center;
  align-items: center;
  align-self: center;
  display: flex;
  margin-left: 6px;
  justify-content: center;
`;

export const SubTotalContainer = styled(Box)`
  padding: 6 px;
  inline-size: 115px;
  ${"@media (max-width: 345px)"} {
    inline-size: 60px;
  }
`;

export const GoToCHOContainer = styled(Box)`
  background: #0e660a;
  border-radius: 39px;
  padding: 6px;
  padding-left: 10px;
  display: flex;
  align-items: center;
`;
