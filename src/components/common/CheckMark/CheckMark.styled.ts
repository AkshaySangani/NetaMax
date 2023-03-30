import styled, { keyframes } from "styled-components";

const stroke = keyframes`
100% {
  stroke-dashoffset: 0;
}
`;

const scale = keyframes`
0%,
100% {
  transform: none;
}
50% {
  transform: scale3d(1.1, 1.1, 1);
}
`;

const fill = keyframes`
100% {
  box-shadow: inset 0 0 0 100vh #21C57C;
}
`;

export const Svg = styled.svg`
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  stroke: #fff;
  stroke-width: 5;
  stroke-miterlimit: 10;
  animation: ${fill} 0.4s ease-in-out 0.4s forwards, ${scale} 0.3s ease-in-out 0.9s both;
`;

export const Circle = styled.circle`
  stroke-dasharray: 166;
  stroke-dashoffset: 166;
  stroke-width: 5;
  stroke-miterlimit: 10;
  stroke: #fff;
  fill: none;
  animation: ${stroke} 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
`;

export const Path = styled.path`
  transform-origin: 50% 50%;
  stroke-dasharray: 48;
  stroke-dashoffset: 48;
  animation: ${stroke} 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
`;
