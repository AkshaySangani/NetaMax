import React, { ReactElement } from "react";

import { BiMinus, BiPlus } from "react-icons/bi";

import { HStack, IconButton, Input } from "@chakra-ui/react";

import { IIncrementalButtonProps } from "./IIncrementalButtonProps";

/**
 * IncrementalButton component.
 * @param {IIncrementalButtonProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const IncrementalButton = (props: IIncrementalButtonProps): ReactElement => {
  const {
    min,
    max,
    defaultValue,
    onAdd,
    onSubtract,
    customWidth,
    customHeight,
    customBorderRadius,
  } = props;

  const currentValue = defaultValue && min && defaultValue > min ? defaultValue : min;
  const isDisabled = Boolean(currentValue === max);

  return (
    <HStack
      width={customWidth || "120px"}
      height={customHeight || { base: "27px", md: "32px" }}
      rounded={customBorderRadius || "full"}
      borderWidth="1px"
      overflow="hidden"
    >
      <IconButton
        variant="ghost"
        aria-label="remove"
        icon={<BiMinus />}
        onClick={onSubtract}
        height="100%"
      />
      <Input
        variant="unstyled"
        data-testid="counter"
        readOnly
        textAlign="center"
        value={currentValue}
      />
      <IconButton
        variant="ghost"
        aria-label="add"
        icon={<BiPlus />}
        onClick={onAdd}
        disabled={isDisabled}
        height="100%"
      />
    </HStack>
  );
};
