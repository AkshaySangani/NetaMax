import React, { ReactElement } from "react";

import IconBell from "styled/icons/Bell";

import { Box, Text } from "@chakra-ui/react";

import { IInfoMessageBoxProps } from "./IInfoMessageBoxProps";

/**
 * The InfoMessageBox component.
 * @param {IInfoMessageBoxProps} props the component props.
 * @returns {ReactElement} the InfoMessageBox component.
 */
export const InfoMessageBox = ({ message }: IInfoMessageBoxProps): ReactElement => {
  return (
    <>
      <Box
        width="0px"
        height="0px"
        borderRight="10px solid transparent"
        borderLeft="10px solid transparent"
        borderTop="10px solid transparent"
        borderBottom="10px solid #96EEAD"
        marginLeft="10px"
      />
      <Box
        width="100%"
        background="#EAF7EE"
        boxShadow="0px 4px 4px 0px #00000012"
        display="flex"
        alignItems="flex-start"
        padding="16px"
        border="1px solid #96EEAD"
        borderRadius="8px"
      >
        <Box>
          <IconBell />
        </Box>
        <Text margin="0px 16px">{message}</Text>
      </Box>
    </>
  );
};
