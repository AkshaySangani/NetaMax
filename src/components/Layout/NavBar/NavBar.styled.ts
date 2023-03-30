import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box, Container, Flex, IconButton, Stack } from "@chakra-ui/react";

export const StoreNameDesktop = styled(Flex)`
  display: none;

  ${responsive.mdPlus} {
    display: flex !important;
  }
`;

export const StoreName = styled(Flex)`
  ${responsive.mdPlus} {
    display: none !important;
  }
`;

export const WhiteCircle = styled(Box)`
  height: 40px;
  width: 40px;
  background-color: #f2f2f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const GreenCircle = styled(Box)`
  height: 30px;
  width: 30px;
  background-color: #bcf5ae;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const SearchButton = styled(IconButton)`
  width: 40px;
  background-color: #f2f2f2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  ${responsive.mdPlus} {
    display: none !important;
  }
`;

export const NavBarContainer = styled(Container)`
  height: ${(props) => (props.$isNavBarCollapsed ? "75px" : "180px")};
  border-bottom-left-radius: ${(props) => (props.$isNavBarCollapsed ? "0px" : "40px")};
  border-bottom-right-radius: ${(props) => (props.$isNavBarCollapsed ? "0px" : "40px")};
  margin-bottom: 55px;

  ${responsive.mdPlus} {
    border-radius: 0px;
    margin-bottom: 0px;
    height: 100%;
  }
`;

export const SearchBarContainer = styled(Stack)`
  ${responsive.mdPlus} {
    display: none;
  }
`;

export const SearchBarContainerDesktop = styled(Stack)`
  ${responsive.mdPlus} {
    display: flex !important;
    height: 50px;
    max-width: 441px;
    margin-right: auto;
    padding-left: 40px;
    justify-content: center;
  }
`;

export const HelpButton = styled(Box)`
  display: flex;
  flex-direction: row;
`;

export const TabMenuContainer = styled(Flex)`
  justify-content: center;
  background: rgba(123, 1, 0, 0.42);
  border-radius: 39px;
  height: 40px;

  ${responsive.mdPlus} {
    height: 75px;
    border-radius: 0px;
    justify-content: right;
    padding-right: 20px;
  }
`;
