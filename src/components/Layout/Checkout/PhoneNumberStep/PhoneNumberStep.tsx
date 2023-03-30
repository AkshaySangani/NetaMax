import React, { useEffect, useState, ReactElement } from "react";

import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { InfoMessageBox } from "components/common/InfoMessageBox/InfoMessageBox";
import IconInfo from "styled/icons/Info";

import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

import { IPhoneNumberStepProps } from "./IPhoneNumberStepProps";

/**
 * The PhoneNumberStep component.
 * @param {IPhoneNumberStepProps} props the component props
 * @returns {ReactElement}  the component.
 **/
export const PhoneNumberStep = (props: IPhoneNumberStepProps): ReactElement => {
  const { errors, control } = props;

  const [showTooltip, setShowTooltip] = useState<boolean>(false);

  /** shows the info tooltip
   * @returns {void}
   */
  const setTooltipOn = () => {
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 5000);
  };

  useEffect(() => {
    setTooltipOn();
  }, []);

  return (
    <VStack>
      <Text paddingTop="15px" fontSize="2xl" fontWeight="600" alignSelf="start">
        Ingresa tus datos para continuar
      </Text>
      <Box marginTop="60px" w="100%">
        <FormControl marginTop="60px" w="100%" isInvalid={errors.phone !== undefined}>
          {errors.phone ? (
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
                isValid={errors.phone ? false : true}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                countryCodeEditable={false}
              />
            )}
          />
          {errors.phone && <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>}
          {showTooltip ? (
            <InfoMessageBox message="Requerimos de un teléfono celular para enviarte un mensaje por Whatsapp y poder activar tu cuenta" />
          ) : (
            <Box
              display="flex"
              height="25px"
              width="100%"
              justifyContent="center"
              alignItems="center"
              marginTop="55px"
              color="#3870FF"
              fontSize="18px"
              fontWeight="bold"
              lineHeight="140%"
            >
              <IconInfo />
              <Link onClick={() => setTooltipOn()} marginLeft="8px" textDecoration="underline">
                ¿Para qué es esto?
              </Link>
            </Box>
          )}
        </FormControl>
      </Box>
    </VStack>
  );
};
