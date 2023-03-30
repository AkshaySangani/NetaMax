import React, { ReactElement } from "react";

import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { IPhoneNumberStepProps } from "components/Shops/ShopsLogin/PhoneNumberStep/IPhoneNumberStepProps";

import { Box, FormControl, FormErrorMessage, FormLabel, Text, VStack } from "@chakra-ui/react";

/**
 * The PhoneNumberStep component.
 * @param {IPhoneNumberStepProps} props the component props
 * @returns {ReactElement}  the component.
 **/
export const PhoneNumberStep = (props: IPhoneNumberStepProps): ReactElement => {
  const { errors, control, valueForm, errorOtpMessage } = props;

  return (
    <VStack>
      <Text paddingTop="15px" fontSize="2xl" fontWeight="600" textAlign="center">
        Ingresa tu número de celular para enviarte un código de verificación a tu celular
      </Text>
      <Box marginTop="60px" w="100%">
        <FormControl marginTop="60px" w="100%" isInvalid={!errors.phone || !errorOtpMessage}>
          {errors.phone || !!errorOtpMessage ? (
            <FormLabel color="#E53E3E">Número de celular</FormLabel>
          ) : (
            <FormLabel>Número de celular</FormLabel>
          )}
          <Controller
            name="phone"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <PhoneInput
                inputStyle={{ width: "100%", height: "40px", fontSize: "1rem" }}
                country={"mx"}
                isValid={errors.phone || !!errorOtpMessage ? false : true}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                countryCodeEditable={false}
              />
            )}
          />
          {(errors.phone || !!errorOtpMessage) && (
            <FormErrorMessage>
              {errors.phone?.message
                ? errors.phone?.message
                : valueForm && errorOtpMessage?.replace("{XXXXXXXXXX}", valueForm)}
            </FormErrorMessage>
          )}
        </FormControl>
      </Box>
    </VStack>
  );
};
