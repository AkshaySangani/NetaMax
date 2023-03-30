import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box } from "@chakra-ui/react";

export const MiCuentaContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
`;

export const EresNuevoCardContainer = styled(Box)`
  width: 328px;
  height: 280px;
  border: 1px solid #b3b9c2;
  border-radius: 13px;
  align-items: center;

  ${responsive.xsAndMin} {
    width: 296px;
    height: 266px;
  }

  ${responsive.smPlus} {
    width: 400px;
    height: 308px;
  }
`;

export const EresNuevoBottomContent = styled(Box)`
  position: absolute;
  bottom: 110px;
  width: 328px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${responsive.xsAndMin} {
    bottom: 336px;
    width: 296px;
  }

  ${responsive.smPlus} {
    bottom: 130px;
    width: 400px;
  }

  ${responsive.mdPlus} {
    bottom: 120px;
    width: 400px;
  }
`;

export const MisComprasBottomContent = styled(Box)`
  position: absolute;
  bottom: 14px;
  width: 328px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  ${responsive.xsAndMin} {
    bottom: 246px;
    width: 296px;
  }

  ${responsive.smPlus} {
    bottom: 22px;
    width: 400px;
  }

  ${responsive.mdPlus} {
    bottom: 6px;
    width: 400px;
  }
`;

export const MisComprasCardContainer = styled(Box)`
  width: 328px;
  height: 80px;
  align-items: center;

  ${responsive.xsAndMin} {
    width: 296px;
    height: 308px;
  }

  ${responsive.smPlus} {
    width: 400px;
    height: 99px;
  }
`;
