import React, { useEffect, useState, ReactElement } from "react";

import { InfoMessageBox } from "components/common/InfoMessageBox/InfoMessageBox";
import { TermsAndConditionsText } from "components/common/TermsAndConditions/TermsAndConditionsText";
import IconInfo from "styled/icons/Info";

import {
  useDisclosure,
  Box,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { INameAndTermConditionsStepProps } from "./INameAndTermConditionsStepProps";

/**
 * The NameAndTermConditionsStep component.
 * @param {ILogInStepProps} props the component props
 * @returns {ReactElement}  the component.
 */
export const NameAndTermConditionsStep = (props: INameAndTermConditionsStepProps): ReactElement => {
  const { errors, register } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    <>
      <Text paddingTop="15px" fontSize="2xl" fontWeight="600" alignSelf="start">
        Ingresa tus datos para continuar
      </Text>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="60px"
        flexDirection="column"
      >
        <FormControl isInvalid={errors.name !== undefined}>
          {errors.name ? (
            <FormLabel color="#E53E3E">Nombre y Apellido</FormLabel>
          ) : (
            <FormLabel>Nombre y Apellido</FormLabel>
          )}
          <Input size="md" errorBorderColor="red.300" {...register("name")} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          {showTooltip ? (
            <InfoMessageBox message="Requerimos de tu nombre para que te puedan reconocer al momento de la entrega de tu pedido." />
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
        <FormControl isInvalid={errors.isTermsAccepted !== undefined}>
          <Box display="flex" alignItems="center" alignContent="center" mt="24px">
            <Checkbox
              defaultIsChecked
              errorBorderColor="red.300"
              p="10px"
              {...register("isTermsAccepted")}
            />

            <Text>
              Acepto los{" "}
              <Link onClick={onOpen} textDecoration="underline">
                Terminos Y Condiciones
              </Link>{" "}
              de Neta.mx para crear una nueva cuenta
            </Text>
          </Box>

          <FormErrorMessage>{errors.isTermsAccepted?.message}</FormErrorMessage>
        </FormControl>

        <Modal size="4xl" isCentered onClose={onClose} isOpen={isOpen} scrollBehavior="inside">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>TÉRMINOS Y CONDICIONES</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <TermsAndConditionsText />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};
