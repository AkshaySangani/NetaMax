import styled from "styled-components";

import { IAbsoluteDivProps } from "../StoreList/StoreList.styled";

export const AbsoluteDiv = styled.div<IAbsoluteDivProps>`
  position: absolute;
  top: 70%;
  left: 0%;
  background-color: white;
  width: 100%;
  height: 30%;
  border-radius: 32px 32px 0 0;
  z-index: 1;
  transition: 0.3s;
  box-shadow: 0px -0.5px 2px rgba(0, 0, 0, 0.25);
  padding: 0 20px;
  display: flex;
  flex-flow: column;
`;
