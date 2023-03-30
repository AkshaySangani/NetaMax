import React, { ReactElement } from "react";

import { FaChevronLeft } from "react-icons/fa";

import { useRouter } from "next/router";

import { Box, Text } from "@chakra-ui/react";

import { IBackToHomeProps } from "./BackToHomeProps";

/**
 * Back to home nav component
 * @param {IBackToHomeProps} props the component props
 * @returns {ReactElement} back to home component
 */
export const BackToHome = ({
  title,
  size,
  weight,
  homeRoute = "/",
  color = "black",
}: IBackToHomeProps): ReactElement => {
  const router = useRouter();

  /**
   * Back to home function
   * @param {string} homeRoute route to redirect
   * @returns {void} back to home
   **/
  const backToHome = (homeRoute: string) => {
    router.push(homeRoute);
  };

  return (
    <Box display="flex" alignItems="center" onClick={() => backToHome(homeRoute)} cursor="pointer">
      <FaChevronLeft color={color} />
      <Text
        ml="12px"
        fontSize={size ? `${size}px` : "16px"}
        fontWeight={weight ? `${weight}` : "600"}
        color={color}
      >
        {title ? title : "Volver a la tiendita"}
      </Text>
    </Box>
  );
};
