import React, { ReactElement } from "react";

import { BiMinus, BiPlus } from "react-icons/bi";

import TrashIcon from "styled/icons/Trash";

import { HStack, IconButton, Input } from "@chakra-ui/react";

import { IIncrementalBasketButtonProps } from "./IIncrementalBasketButtonProps";

/**
 * IncrementalBasketButton component.
 * @param {IIncrementalBasketButtonProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const IncrementalBasketButton = (props: IIncrementalBasketButtonProps): ReactElement => {
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
      borderColor="netaBlue.500"
    >
      <IconButton
        data-testid="incremental-basket-button-subtract"
        variant="ghost"
        aria-label="remove"
        icon={currentValue === 1 ? <TrashIcon /> : <BiMinus />}
        onClick={onSubtract}
        height="100%"
        color="netaBlue.500"
      />
      <Input
        variant="unstyled"
        color="netaBlue.500"
        data-testid="counter"
        readOnly
        textAlign="center"
        value={currentValue}
      />
      <IconButton
        data-testid="incremental-basket-button-add"
        color="netaBlue.500"
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
