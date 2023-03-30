import React, { ReactElement } from "react";

import ChallengeComplete from "styled/icons/ChallengeComplete";
import { screenSizes } from "styled/screen";

import {
  useMediaQuery,
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import { GradientBody } from "./ChallengeModal.styled";
import { IChallengeModalProps } from "./IChallengeModalProps";

/**
 *  Modal component that shows when completing the available challenges.
 * @param {IChallengeModalProps} props the component props
 * @returns {ReactElement} The modal component
 */
export const ChallengeModal = ({
  isOpen,
  onClose,
  onAccept,
}: IChallengeModalProps): ReactElement => {
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={isDesktop ? "4xl" : "sm"}
      scrollBehavior="inside"
      preserveScrollBarGap
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        borderRadius="13px"
        minH="345px"
        marginLeft="20px"
        marginRight="20px"
        data-testid="challenge-modal-content"
      >
        <ModalCloseButton fontSize="18px" color="#FFF" data-testid="challenge-modal-close-button" />
        <GradientBody w="100%" maxHeight="550px" backgroundColor="red">
          <ChallengeComplete width="125px" height="77px" />
          <Text fontWeight="700" color="#FFF" fontSize="24px" marginBottom="15px">
            ¡Felicitaciones!
          </Text>
          <Text fontWeight="700" color="#FFF" fontSize="18px" textAlign="center">
            Llegaste a la meta, tendrás 10 moNETAs para usar en tu próxima compra
          </Text>
          <Button
            borderRadius="16px"
            onClick={onAccept}
            h="56px"
            w="290px"
            minH="56px"
            backgroundColor="#FFF"
            color="#3870FF"
            _disabled={{ bgColor: "netaGray.300", cursor: "no-drop", color: "#FFF" }}
            _hover={{ bgColor: "none" }}
            data-testid="challenge-modal-button"
            marginTop="40px"
          >
            ¡Entendido!
          </Button>
        </GradientBody>
      </ModalContent>
    </Modal>
  );
};
