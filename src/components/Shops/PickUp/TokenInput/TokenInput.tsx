import {
  DrawerHeader,
  Flex,
  Box,
  DrawerBody,
  Center,
  FormControl,
  HStack,
  PinInput,
  PinInputField,
  FormErrorMessage,
  DrawerFooter,
  Button,
  Img,
  Text,
} from "@chakra-ui/react";
import { PICKUP_TOKEN_LENGTH } from "constants/pickUpTokenConstants";
import { ReactElement } from "react";
import { Controller } from "react-hook-form";
import IconBackArrow from "styled/icons/Shops/PickUp/BackArrow";
import { ITokenInputProps } from "./ITokenInputProps";

/**
 * The PickUpToken component.
 * @returns {ReactElement} the PickUpToken component.
 * @param {ITokenInputProps} pickUpTokenProps PickUpToken props
 */
export const TokenInput = (pickUpTokenProps: ITokenInputProps): ReactElement => {
  const {
    onClose,
    errors,
    control,
    handleRedirect,
    handleNextStep,
    reSendOtpCode,
    countdown,
    isDisable,
    isLoading,
    isDisabled,
    isShopOwner,
    notRegisterNumber,
  } = pickUpTokenProps;

  /**
   * Handles the text in the footer button
   * @returns {void}
   **/
  const buttonText = () => {
    if (isShopOwner) {
      return isLoading ? "Ingresando" : "Ingresar a mi tienda";
    }
    return isLoading ? "Verificando" : "Verificar código";
  };

  /**
   * Adds to resendCode.
   * @type {Function}
   * @returns {void} To resend verificación code.
   */
  function resendCode() {
    if (isDisable) {
      return;
    } else {
      reSendOtpCode();
    }
  }

  return (
    <>
      <DrawerHeader>
        <Flex alignItems="center">
          <Box cursor="pointer" onClick={onClose} mr="16px">
            <IconBackArrow />
          </Box>
          <Text>{isShopOwner ? "Código de verificación" : "Entregar pedido"}</Text>
        </Flex>
      </DrawerHeader>
      <DrawerBody>
        <Text marginTop="30px" fontWeight="800" fontSize="32px" lineHeight="40px">
          {isShopOwner ? "Escribe tu código de" : "Ingresa el código del"}
        </Text>
        <Text color="#FF2626" fontWeight="800" fontSize="32px" lineHeight="40px">
          {isShopOwner ? "verificación" : "usuario"}
        </Text>
        <Text fontSize="13px" fontWeight="400">
          {isShopOwner
            ? "Hemos enviado a tu número de celular un código de 6 digitos el cual debes escribir aquí."
            : "Debes ingresar el código que se le envió al usuario para que se te muestren los productos que debes entregarle."}
        </Text>
        <Center marginTop="48px">
          <FormControl isInvalid={!!errors}>
            <HStack display="center" alignItems="center" justifyContent="center">
              <Controller
                name="verificationCode"
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PinInput size="md" value={value} onChange={onChange}>
                    {Array.from({ length: PICKUP_TOKEN_LENGTH }, (_, i) => (
                      <PinInputField key={`token-input-${i}`} />
                    ))}
                  </PinInput>
                )}
              />
            </HStack>
            <FormErrorMessage justifyContent="center">
              <Text maxWidth="220px" marginTop="16px" lineHeight="20px" textAlign="center">
                {errors.verificationCode?.message}
              </Text>
            </FormErrorMessage>
          </FormControl>
        </Center>
        {!notRegisterNumber && (
          <Flex justifyContent="center" direction="row" wrap="nowrap">
            {isShopOwner ? (
              <>
                <Text
                  marginTop="16px"
                  lineHeight="20px"
                  fontSize="14px"
                  textColor="#353535"
                  opacity="0.5"
                >
                  ¿Aun no recibes tu código?{" "}
                </Text>
                <Text
                  style={{ textDecoration: `${isDisable ? "none" : "underline"}` }}
                  ml="9px"
                  fontWeight={700}
                  marginTop="16px"
                  lineHeight="20px"
                  textColor="#353535"
                  opacity="0.5"
                  onClick={() => resendCode()}
                >
                  {isDisable ? countdown : "Reenviar código"}
                </Text>
              </>
            ) : (
              <Text
                onClick={handleRedirect}
                textDecoration="underline"
                color="#3870FF"
                fontWeight={600}
              >
                Buscar usuario sin token
              </Text>
            )}
          </Flex>
        )}
      </DrawerBody>
      <DrawerFooter>
        <Button
          onClick={handleNextStep}
          width="100%"
          height="48px"
          borderRadius="48px"
          maxWidth="482px"
          backgroundColor="#ffff00"
          _hover={{ bg: "#ffff00" }}
          isDisabled={
            isLoading || isDisabled || errors.verificationCode?.type === "verificationCodeError"
          }
          isLoading={isLoading}
          loadingText="Verificando"
          spinnerPlacement="end"
          spinner={<Img marginLeft="16px" w="36px" src="/gif/Spinner-1s-377px.gif" />}
        >
          <Text fontWeight="600">{buttonText()}</Text>
        </Button>
      </DrawerFooter>
    </>
  );
};
