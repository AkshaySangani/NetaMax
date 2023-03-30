import React, { ReactElement } from "react";

import { Button } from "@chakra-ui/react";

import { IButtonComponentProps } from "./IButtonComponentProps";

/**
 * The Button component.
 * @param {IButtonComponentProps} props the component props.
 * @returns {ReactElement} the button component.
 */
export const ButtonComponent = ({ label, onClick }: IButtonComponentProps): ReactElement => {
  return (
    <Button
      color="#3870FF"
      bg="#FFFFFF"
      size="lg"
      onClick={onClick}
      px="42px"
      py="16px"
      fontWeight={700}
      borderRadius="16px"
    >
      {label}
    </Button>
  );
};
