import { ReactElement } from "react";

import { Controller } from "react-hook-form";

import { Center, FormControl, HStack, PinInput } from "@chakra-ui/react";

import { ITokenInputProps } from "./ITokenInput";
import { TokenInputField } from "./TokenInput.styled";

/**
 * The Token Input Component
 * @param {ITokenInputProps} props the component props
 * @returns {ReactElement} The Deliver Order Button
 */
export const TokenInput = (props: ITokenInputProps): ReactElement => {
  const { control, isDisabled, fieldsAmount, errors } = props;

  return (
    <Center marginTop="48px">
      <FormControl>
        <HStack display="center" alignItems="center" justifyContent="center">
          <Controller
            name="verificationCode"
            control={control}
            render={({ field: { onChange, value } }) => (
              <PinInput
                placeholder=" " // Needs to be an empty space so that the default placeholder doesn't show and for the styles to work properly
                focusBorderColor={
                  errors.verificationCode?.type === "verificationCodeError" ? "#FF2626" : "#353535"
                }
                value={value}
                onChange={onChange}
                isDisabled={isDisabled}
              >
                {Array.from({ length: fieldsAmount }, (_, i) => (
                  <TokenInputField
                    key={`token-field-${i}`}
                    hasError={errors.verificationCode?.type === "verificationCodeError"}
                  />
                ))}
              </PinInput>
            )}
          />
        </HStack>
      </FormControl>
    </Center>
  );
};
