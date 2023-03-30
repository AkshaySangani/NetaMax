import { FC } from "react";

import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box, Flex } from "@chakra-ui/react";

export const TabMenuContainer = styled(Box)`
  box-shadow: 0px 4px 7px rgba(163, 163, 163, 0.25);
  border-radius: ${(props) => (props.$isNavBarCollapsed ? "0px" : "9px")};
  width: ${(props) => (props.$isNavBarCollapsed ? "none" : "90vw")};
  position: ${(props) => (props.$isNavBarCollapsed ? "absolute" : "relative")};
  left: ${(props) => (props.$isNavBarCollapsed ? "0" : "none")};
  right: ${(props) => (props.$isNavBarCollapsed ? "0" : "none")};
  height: ${(props) => props.$isNavBarCollapsed && "75px"};

  ${responsive.mdPlus} {
    box-shadow: none;
    background: none;
    position: absolute;
    padding: 0px;
    max-width: 500px;
    .tab-container {
      height: 100%;
      border-radius: 0px;
      background: transparent;
      align-items: center;
    }
    .tab-items-container {
      flex-direction: row;
    }
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CustomTab: FC<any> = styled(Box)`
  background: ${(props) => {
    if (props.isTiendita) {
      return "#EAF0FF";
    } else if (props.isMiCuenta) {
      return "#EAFFED";
    } else if (props.isEnGrupo) {
      return "#eef0ff";
    } else if (props.isGanaDinero) {
      return "#ED9F0038";
    } else {
      return "#FFFFFF";
    }
  }};
  color: ${(props) => {
    if (props.isTiendita) {
      return "#3870FF";
    } else if (props.isMiCuenta) {
      return "#00A81B";
    } else if (props.isEnGrupo) {
      return "#533cde";
    } else if (props.isGanaDinero) {
      return "#ED9F00";
    } else {
      return "#5F5F5F";
    }
  }};
  fill: ${(props) => {
    if (props.isTiendita) {
      return "#3870FF";
    } else if (props.isMiCuenta) {
      return "#00A81B";
    } else if (props.isEnGrupo) {
      return "#533cde";
    } else if (props.isGanaDinero) {
      return "#ED9F00";
    } else {
      return "#5F5F5F";
    }
  }};
  font-weight: ${(props) => (props.activeTab ? "800" : "600")};

  width: 30%;
  height: 100%;
  font-size: 14px;
  border-radius: 9px;

  Box:last-child {
    border-right: none;
  }

  @media (max-width: 430px) {
    font-size: 12px;
  }

  ${responsive.mdPlus} {
    height: 44px;
    background: ${(props) => {
      if (props.isTiendita) {
        return "#EAF0FF";
      } else if (props.isMiCuenta) {
        return "#EAFFED";
      } else if (props.isEnGrupo) {
        return "#eef0ff";
      } else if (props.isGanaDinero) {
        return "#FFFFFF";
      } else {
        return "#C22B2A";
      }
    }};
    color: ${(props) => {
      if (props.isTiendita) {
        return "#3870FF";
      } else if (props.isMiCuenta) {
        return "#00A81B";
      } else if (props.isEnGrupo) {
        return "#533cde";
      } else if (props.isGanaDinero) {
        return "#ED9F00";
      } else {
        return "#FFFFFF";
      }
    }};
    fill: ${(props) => {
      if (props.isTiendita) {
        return "#3870FF";
      } else if (props.isMiCuenta) {
        return "#00A81B";
      } else if (props.isEnGrupo) {
        return "#533cde";
      } else if (props.isGanaDinero) {
        return "#ED9F00";
      } else {
        return "#FFFFFF";
      }
    }};
  }
`;

export const MinifiedTabMenuContainer = styled(Box)`
  position: absolute;
  left: 0;
  right: 0;
  box-shadow: 0px 4px 7px rgba(163, 163, 163, 0.25);
`;

export const TabMenuDesktop = styled(Flex)`
  height: 55px;
  border-radius: 0px;
  justify-content: right;
  padding-right: 20px;
  background: rgba(123, 1, 0, 0.42);
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0px;
`;
