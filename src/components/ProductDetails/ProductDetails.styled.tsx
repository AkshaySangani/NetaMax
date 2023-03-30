import styled from "styled-components";
import { responsive } from "styled/responsive";

import { Box, Image } from "@chakra-ui/react";

export const BadgeContainer = styled(Box)`
  margin-top: 18px;
  margin-left: 18px;
  position: absolute;
  width: 90px;

  ${responsive.smPlus} {
    margin-top: 18px;
    position: absolute;
    width: 90px;
  }
`;

export const CustomImage = styled(Image)`
  width: 100%;
  height: 100%;

  ${responsive.smPlus} {
    width: 100%;
    height: 100%;
  }
`;

export const HeaderContainer = styled(Box)`
  padding: 20px 0;
  display: none;

  ${responsive.smPlus} {
    padding: 50px 0 20px 0;
    display: flex;
    align-items: center;
  }
`;

export const ButtonContainer = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 16px;

  ${responsive.smPlus} {
    display: flex;
    margin-top: 16px;
    justify-content: flex-start;
  }
`;

export const ProductContent = styled(Box)`
  width: 100%;
  ${responsive.smPlus} {
    width: 70%;
  }
`;

export const ProductContainer = styled(Box)`
  justify-content: center;
  margin-top: 38px;

  ${responsive.smPlus} {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`;

export const ImageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 20px;

  ${responsive.smPlus} {
    display: flex;
    justify-content: center;
    width: 50%;
    height: 80%;
    padding: 0 20px;
  }
`;

export const ProductDetailContainer = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-top: 20px;

  ${responsive.smPlus} {
    height: 100%;
    min-height: 450px;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 10px;
    border-width: 1px;
    border-radius: 19px;
    box-shadow: 0px 1px 19px rgba(0, 0, 0, 0.17);
  }
`;

export const ProductDetail = styled(Box)`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;

  ${responsive.smPlus} {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding-bottom: 2rem;
  }
`;

export const ProductDetailContent = styled(Box)`
  padding: 20px 0 0 0;
  width: 100%;
  ${responsive.smPlus} {
    padding: 8px 20px;
    padding-bottom: 2rem;
  }
`;
