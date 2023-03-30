import React, { ReactElement } from "react";

import Boy from "styled/icons/LegalAge/Boy";
import NetaLogoFullColor from "styled/icons/NetaLogoFullColor";

import { Box, Modal, ModalBody, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";

import { ButtonComponent } from "./ButtonComponent/ButtonComponent";
import { ILegalAgeModalProps } from "./ILegalAgeModalProps";
import {
  ArrowContent,
  BodyContent,
  BodyDescription,
  ExclamationContent,
  ModalContentCustom,
} from "./LegalAgeModal.styled";

/**
 * The Modal component.
 * @param {ILegalAgeModalProps} props the component props.
 * @returns {ReactElement} the modal component.
 */
export const LegalAgeModal = ({
  isOpen,
  title,
  description,
  onClickModal,
}: ILegalAgeModalProps): ReactElement => {
  return (
    <Modal isOpen={isOpen} onClose={() => null}>
      <ModalOverlay backgroundColor="rgba(255, 255, 255, 0.9)" />
      <ModalContentCustom>
        <Box maxH="125px" display="flex" flex="1" marginBottom="1.5rem">
          <NetaLogoFullColor />
        </Box>
        <BodyContent>
          <ArrowContent />
          <ExclamationContent />
          <BodyDescription>
            <Box my={6}>
              <Boy />
            </Box>
            <ModalHeader
              color="#FFFFFF"
              fontWeight="900"
              lineHeight="40px"
              fontSize="30px"
              textAlign="center"
              py="0.5rem"
              px="0"
            >
              {title}
            </ModalHeader>
            <ModalBody
              color="#FFC1C1"
              fontSize="14px"
              lineHeight="20px"
              textAlign="center"
              py="0.5rem"
              px="0"
            >
              {description}
            </ModalBody>
            <ModalFooter>
              <Box mr="1rem">
                <ButtonComponent label="Si" onClick={() => onClickModal(false)} />
              </Box>
              <ButtonComponent label="No" onClick={() => onClickModal(true)} />
            </ModalFooter>
          </BodyDescription>
        </BodyContent>
      </ModalContentCustom>
    </Modal>
  );
};
