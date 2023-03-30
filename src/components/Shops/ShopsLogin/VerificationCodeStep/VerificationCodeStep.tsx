import React, { ReactElement } from "react";

import { Controller } from "react-hook-form";

import { Loader } from "components/common/Loader";

import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  HStack,
  PinInput,
  PinInputField,
  Progress,
  Text,
  VStack,
} from "@chakra-ui/react";

import { IVerificationCodeStepShopsProps as IVerificationCodeStepProps } from "./IVerificationCodeStepProps";

/**
 * The VerificationCodeStep component.
 * @param {IVerificationCodeStepProps} props the component props
 * @returns {ReactElement}  the component.
 */
export const VerificationCodeStep = (props: IVerificationCodeStepProps): ReactElement => {
  const {
    seconds,
    isLoading,
    errors,
    control,
    reSendOtpCode,
    redirectToPhoneNumberStep,
    errorOtpMessage,
  } = props;
  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Center>
          <Text paddingTop="15px" fontSize="18px" fontWeight="600" alignSelf="start">
            Ingresa el código de verificación que enviamos a tu <b>whatsapp</b>.
          </Text>
        </Center>
      </Box>
      <Center marginTop="27px" justifyContent="center">
        <FormControl isInvalid={errors.verificationCode !== undefined}>
          <HStack display="center" alignItems="center" justifyContent="center">
            {isLoading ? (
              <Loader />
            ) : (
              <Controller
                name="verificationCode"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PinInput size="md" otp value={value} onChange={onChange}>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                )}
              />
            )}
          </HStack>
          <FormErrorMessage placeContent="center">
            {!!errors.verificationCode?.message
              ? errors.verificationCode?.message
              : errorOtpMessage}
          </FormErrorMessage>
        </FormControl>
      </Center>
      <Center>
        {seconds === 0 ? (
          <VStack>
            <Box textAlign="center">
              <Text marginTop="26px">¿No recibiste el código al whatsapp?</Text>
              <Button
                fontSize="1.2rem"
                fontWeight={700}
                variant="ghost"
                textColor="netaBlue.500"
                onClick={reSendOtpCode}
              >
                Envíamelo de nuevo
              </Button>
            </Box>

            <Box textAlign="center" pt="20px">
              <Text marginTop="26px">¿Te equivocaste al introducir tu número?</Text>
              <Button
                fontSize="1.2rem"
                fontWeight={700}
                variant="ghost"
                textColor="netaBlue.500"
                onClick={redirectToPhoneNumberStep}
              >
                Cambiar número de teléfono
              </Button>
            </Box>
          </VStack>
        ) : (
          <Box>
            <Text marginTop="26px" pb={5}>
              Cuando termine el tiempo podrá solicitar otro código
            </Text>

            <Progress value={seconds} colorScheme="netaBlue" size="xs" max={45} min={0} />
            <Text pt={2} align="center" fontWeight={700}>
              {seconds} Segundos
            </Text>
          </Box>
        )}
      </Center>
    </>
  );
};
