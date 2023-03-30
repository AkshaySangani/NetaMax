import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box, Text } from "@chakra-ui/react";

export const CustomTextLink = styled(Box)`
  text-align: center;
  font-size: 18px;
  color: #34495e;

  ${responsive.smPlus} {
    color: #34495e;
    font-size: 26px;
  }
`;

export const CustomText = styled(Text)`
  text-align: center;
  font-size: 20px;
  color: #34495e;

  ${responsive.smPlus} {
    color: #34495e;
    font-size: 30px;
  }
`;
