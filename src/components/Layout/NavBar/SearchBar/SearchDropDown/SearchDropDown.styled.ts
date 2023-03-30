import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box } from "@chakra-ui/react";

export const StyledDropdown = styled(Box)`
  position: absolute;
  top: ${(props) => (props.$isLargerThanSm ? "0" : "0")};
  left: ${(props) => (props.$isLargerThanSm ? "none" : "0")};
  width: ${(props) => (props.$isLargerThanSm ? "480px" : "100%")};
  height: 50px;
  background-color: #fff;
  margin-top: 55px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 0 0, rgba(0, 0, 0, 0.1) 0px 4px 11px;
  border-radius: 5px;
  z-index: 10;
  > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    > li {
      padding-right: 10px;
      padding-left: 2px;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border-bottom: 0.5px solid #cbcbcb;
      height: 60px;
      display: flex;
      align-items: center;
      a {
        text-decoration: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
      }
      &:hover {
        cursor: pointer;
      }
      &:last-child {
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
        border-bottom: 0px;
      }
      &:first-child {
        ${responsive.smPlus} {
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }
      }
      &:not(:first-child) {
        border-top: 0;
      }
    }
  }
`;
