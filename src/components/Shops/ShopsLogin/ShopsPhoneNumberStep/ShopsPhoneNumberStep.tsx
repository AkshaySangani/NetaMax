import React, { ReactElement, useEffect, useState } from "react";

import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { IPhoneNumberStepProps } from "components/Shops/ShopsLogin/PhoneNumberStep/IPhoneNumberStepProps";

import { Box, Container, Flex, FormControl, Img, Link, Text } from "@chakra-ui/react";
import { ContainerWrapper } from "containers/Shops/ShopsLogin/ShopsLoginContainer.styled";
import { NeedHelpWP } from "containers/Shops/ShopsLogin/NeedHelpWP";
import { DeliverButton } from "components/Shops/DeliverOrderButton/DeliverOrderButton.styled";
import { LoginContainer } from "containers/Shops/ShopsLogin/LoginContainer/LoginContainer";

/**
 * The PhoneNumberStep component.
 * @param {IPhoneNumberStepProps} props the component props
 * @returns {ReactElement}  the component.
 **/
export const ShopsPhoneNumberStep = (props: IPhoneNumberStepProps): ReactElement => {
  const { errors, control, handleNext, phoneNumber, isSendingOtpCode } = props;
  const [height, setHeight] = useState(0);
  const sendText = "Hablar con alguien";
  const msjText = sendText.split(" ").join("%20");
  const helpPhoneNumber = "5215545439866";
  const toWhatsApp = `https://wa.me/${helpPhoneNumber}?text=${msjText}`;

  useEffect(() => {
    /**
     * The PhoneNumberStep component.
     * @returns {ReactElement}  the component.
     **/
    const updateHeight = () => {
      setHeight(window.visualViewport.height);
    };
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <ContainerWrapper centerContent={false} maxW="container.lg" height={height}>
      <Flex
        height={{ base: "60px", md: "80px" }}
        width="100%"
        padding={{ md: "0 100px", base: "0 16px" }}
        position="fixed"
        top="0"
        zIndex="1"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        onClick={() => window.open(toWhatsApp, "_blank")}
      >
        <Img height={{ base: "35px", md: "50px" }} src="/assets/images/logo.png" />
        <NeedHelpWP />
      </Flex>

      <LoginContainer phoneNumber={phoneNumber} />

      <Box position="fixed" right="0" top="10%" zIndex="-1">
        <Img src="/assets/images/login-bag.png" height={{ base: "50%", md: "60vh" }} />
      </Box>
      <Flex
        direction="column"
        maxWidth="482px"
        marginTop="10%"
        height={{ base: "90%", md: "80%" }}
        justifyContent={{ base: "flex-end", md: "center" }}
      >
        <Container height="auto" padding="0">
          <Flex direction="column">
            <Text fontWeight="800" fontSize="32px" lineHeight="40px">
              Bienvenido a
            </Text>
            <Text color="#FF2626" fontWeight="800" fontSize="32px" lineHeight="40px">
              Mi tienda
            </Text>
            <Text fontSize="13px" fontWeight="400">
              Para ingresar a tu tienda, escribe tu numero de celular y continuar dando clic en
              ingresar a la tienda.
            </Text>
          </Flex>
          <Box marginTop="30px" w="100%" height="100px" marginBottom="40px">
            <FormControl marginTop="20px" w="100%">
              <Text color={errors.phone ? "#FF2626" : "black"}>Numero de celular</Text>
              <Controller
                name="phone"
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <PhoneInput
                    inputStyle={{ width: "100%", height: "40px", fontSize: "1rem" }}
                    country={"mx"}
                    isValid={true}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    countryCodeEditable={false}
                  />
                )}
              />
              {errors.phone && (
                <Text marginTop="5px" fontSize="12px" color="#FF2626">
                  {errors.phone?.message}
                </Text>
              )}
              <Text marginTop="3px" fontSize="12px" color="rgba(53, 53, 53)" opacity="0.7">
                Al dar clic en Ingresar a la tiendita, aceptas los
                <Link
                  href="https://docs.google.com/document/d/e/2PACX-1vStH4Wozo0xIRocRJegZ90V11jsId0JfIwTWeB9DwmcHjfzP73gL8bMR6j80h_hKPv98DAncgOevQOd/pub"
                  color="#0000EE"
                >
                  términos y condiciones
                </Link>
                de servicio de la plataforma
              </Text>
            </FormControl>
          </Box>
        </Container>
        <DeliverButton
          height="48px"
          width="100%"
          marginBottom="10px"
          display="flex"
          alignItems="center"
          cursor="pointer"
          onClick={handleNext}
        >
          <Text fontWeight="600">{isSendingOtpCode ? "Ingresando" : "Ingresar"} a la tiendita</Text>
          {isSendingOtpCode ? (
            <Img marginLeft="16px" w="36px" src="/gif/Spinner-1s-377px.gif" />
          ) : (
            <Img marginLeft="16px" w="8px" src="/gif/arrow-right.png" />
          )}
        </DeliverButton>
        <Flex justifyContent="center" marginBottom="0px">
          <Link
            fontWeight="600"
            textDecoration="underline"
            href="https://form.typeform.com/to/GmetXDhe"
          >
            Quiero convertirme en tienda Neta
          </Link>
        </Flex>
      </Flex>
      <Box position="fixed"></Box>
    </ContainerWrapper>
  );
};
