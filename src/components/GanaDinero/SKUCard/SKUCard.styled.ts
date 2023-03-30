import styled from "styled-components";

import { Progress } from "@chakra-ui/react";

export const CustomProgressBar = styled(Progress)`
  border-radius: 10px;
  background: linear-gradient(0deg, #412d73 0%, #25094f 100%);
  border: 2px solid #a80099;
  box-shadow: 0px 1px 1px rgba(93, 0, 108, 1);
  div:first-child {
    background: linear-gradient(0deg, #959800 0%, #ffe600 100%);
    height: 65%;
    border-radius: 10px;
    margin: 1.3px 0 0;
  }
`;
