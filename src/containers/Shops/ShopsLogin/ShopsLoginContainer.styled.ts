import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Button, Container } from "@chakra-ui/react";

export const ShopsLoginWrapper = styled.div`
  margin-bottom: 100px;
  ${responsive.xs} {
    margin-bottom: 70%;
  }
`;

export const ShopsLoginBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  margin-top: 178px;
  ${responsive.xs} {
    width: 100%;
    margin-top: 10px;
  }
`;

export const ContainerWrapper = styled(Container)`
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled(Button)`
  width: 80%;
  ${responsive.xs} {
    width: 100%;
  }
`;
