import { ReactElement } from "react";

import { Controller } from "react-hook-form";

import { DeliverButton } from "components/Shops/DeliverOrderButton/DeliverOrderButton.styled";
import { PICKUP_TOKEN_LENGTH } from "constants/pickUpTokenConstants";
import IconBackArrow from "styled/icons/Shops/PickUp/BackArrow";

import {
  Box,
  Button,
  Center,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Flex,
  FormControl,
  HStack,
  Img,
  Link,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";

import { ITokenContainerProps } from "./ITokenContainer";

/**
 * The Pick Up Token Container
 * @param {ITokenContainerProps} props The props.
 * @returns {ReactElement} The Pick Up Token Container
 */
export const TokenContainer = (props: ITokenContainerProps): ReactElement => {
  const { onClose, onVerify, errors, control, isLoading, isDisabled, sendOtpCode, isBuyer } = props;

  /**
   * Actions after adding a code related to the buyer
   * @returns {void}
   **/
  const handleNextStepBuyer = () => {
    // setIsClickingNextStep(true);
    // TODO: Uncomment when the endpoint is finished
    // sendOtpCode();
  };

  /**
   * Actions after adding a code related to the owner
   * @returns {void}
   **/
  const handleNextStepOwner = () => {
    sendOtpCode();
  };

  /**
   * Handles the text in the footer button
   * @returns {void}
   **/
  const buttonText = () => {
    if (isBuyer) {
      return isLoading ? "Verificando" : "Verificar código";
    }
    return isLoading ? "Ingresando" : "Ingresar a mi tienda";
  };

  return (
    <>
      <DrawerHeader>
        <Flex alignItems="center">
          <Box cursor="pointer" onClick={onClose} mr="16px">
            <IconBackArrow />
          </Box>
          <Text>{isBuyer ? "Entregar pedido" : "Código de verificación"}</Text>
        </Flex>
      </DrawerHeader>
      <DrawerBody>
        <Text marginTop="30px" fontWeight="800" fontSize="32px" lineHeight="40px">
          {isBuyer ? "Ingresa el código del" : "Escribe tu código de"}
        </Text>
        <Text color="#FF2626" fontWeight="800" fontSize="32px" lineHeight="40px">
          {isBuyer ? "usuario" : "verificación"}
        </Text>
        <Text fontSize="13px" fontWeight="400">
          {isBuyer
            ? "Debes ingresar el código que se le envió al usuario para que se te muestren los productos que debes entregarle."
            : "Hemos enviado a tu número de celular un código de 6 digitos el cual debes escribir aquí"}
        </Text>
        {/* TODO: Might use this component in the future */}
        {/* <TokenInput
          isDisabled={isLoading}
          errors={errors}
          control={control}
          fieldsAmount={PICKUP_TOKEN_LENGTH}
        /> */}
        <Center marginTop="48px">
          <FormControl>
            <HStack display="center" alignItems="center" justifyContent="center">
              <Controller
                name="verificationCode"
                defaultValue=""
                control={control}
                render={({ field: { onChange, value } }) => (
                  <PinInput size="md" value={value} onChange={onChange}>
                    {Array.from({ length: PICKUP_TOKEN_LENGTH }, (_, i) => (
                      <PinInputField />
                    ))}
                  </PinInput>
                )}
              />
            </HStack>
          </FormControl>
        </Center>
        {errors && (
          <Text marginTop="16px" lineHeight="20px" textAlign="center" textColor="#FF2626">
            {errors.verificationCode?.message}
          </Text>
        )}
        {/* {errors.verificationCode?.type !== "verificationCodeError" && !isBuyer && (
          <Text
            marginTop="16px"
            lineHeight="20px"
            fontSize="14px"
            textColor="#353535"
            opacity="0.5"
          >
            ¿Aun no recibes tu código?{" "}
            <Link
              style={{ textDecoration: "underline" }}
              fontWeight={700}
              href="https://chakra-ui.com"
              under
            >
              Reenviar código
            </Link>
          </Text>
        )} */}
      </DrawerBody>
      <DrawerFooter>
        <Button
          onClick={isBuyer ? handleNextStepBuyer : handleNextStepOwner}
          height="48px"
          variant="unstyled"
          isDisabled={
            isLoading || isDisabled || errors.verificationCode?.type === "verificationCodeError"
          }
          width="100%"
        >
          <DeliverButton height="48px" display="flex" alignItems="center" cursor="pointer">
            <Text fontWeight="600">{buttonText()}</Text>
            {isLoading && <Img marginLeft="16px" w="36px" src="/gif/Spinner-1s-377px.gif" />}
          </DeliverButton>
        </Button>
      </DrawerFooter>
    </>
  );
};
