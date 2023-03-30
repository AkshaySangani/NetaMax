import styled from "styled-components";

export interface IAbsoluteDivProps {
  open: boolean;
}

export const AbsoluteDiv = styled.div<IAbsoluteDivProps>`
  position: absolute;
  top: ${(p) => (p.open ? "30%" : "65%")};
  left: 0%;
  background-color: white;
  width: 100%;
  height: ${(p) => (p.open ? "70%" : "35%")};
  border-radius: 32px 32px 0 0;
  z-index: 1;
  transition: 0.3s;
  box-shadow: 0px -0.5px 2px rgba(0, 0, 0, 0.25);
  padding: 20px 20px 0 20px;
  display: flex;
  flex-flow: column;
`;
