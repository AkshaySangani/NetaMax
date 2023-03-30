import styled from "styled-components";

import { PinInputField } from "@chakra-ui/react";

import { ITokenInputStyledProps } from "./ITokenInput.styled";

export const TokenInputField = styled(PinInputField)<ITokenInputStyledProps>`
  background: ${(p) => (p.hasError ? "#FFEAEA" : "#353535")};
  opacity: 0.1;
  height: 56px;
  width: 48px;
  border-radius: 16px;
  color: ${(p) => (p.hasError ? "#FF2626" : "#fdfcfe")};
  font-weight: 800;
  font-size: 24px;
  &:focus {
    opacity: 1;
  }
  &:not(:placeholder-shown) {
    opacity: 1;
    border-color: ${(p) => (p.hasError ? "#FFEAEA" : "#353535")};
  }
`;
