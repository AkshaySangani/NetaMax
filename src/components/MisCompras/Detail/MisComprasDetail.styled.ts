import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box } from "@chakra-ui/react";

export const MisComprasDetailContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  ${responsive.mdPlus} {
    flex-direction: row;
    display: flex;
  }
`;

export const DetailContainer = styled(Box)`
  display: flex;
  flex-direction: column;

  ${responsive.mdPlus} {
    flex-direction: column;
    display: flex;
    width: 66%;
  }
`;

export const TotalPriceContainer = styled(Box)`
  display: flex;
  flex-direction: column;

  ${responsive.mdPlus} {
    flex-direction: column;
    display: flex;
    width: 33%;
    padding: 0 20px;
    margin-top: 105px;
  }
`;

export const CardContainer = styled(Box)`
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 10px;
  margin-top: 14px;
`;
