import styled from "styled-components";

import { Progress } from "@chakra-ui/react";

export const CustomProgressBar = styled(Progress)`
  margin: 20px 64px 5px 45px;
  border-radius: 10px;
  background: linear-gradient(0deg, #412d73 0%, #25094f 100%);
  border: 2px solid #2e6faa;
  div:first-child {
    background: linear-gradient(0deg, #959800 0%, #ffe600 100%);
    height: 65%;
    border-radius: 10px;
    margin: 1.3px 0 0;
  }
`;
