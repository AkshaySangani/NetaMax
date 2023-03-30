import { useEffect, ReactElement } from "react";

import { PickUpWizardSteps, PICKUP_TOKEN_LENGTH } from "constants/pickUpTokenConstants";
import IconPickUpCheck from "styled/icons/Shops/Order/PickUpCheck";

import {
  Box,
  Center,
  DrawerBody,
  Flex,
  HStack,
  Img,
  PinInput,
  PinInputField,
  Text,
} from "@chakra-ui/react";

import { ITokenSuccessContainerProps } from "./ITokenSuccessContainer";

/**
 * The Token Success Container
 * @param {ITokenSuccessContainerProps} props The props.
 * @returns {ReactElement} The Token Success Container
 */
export const TokenSuccessContainer = (props: ITokenSuccessContainerProps): ReactElement => {
  const { onVerify, code } = props;

  useEffect(() => {
    const timer = setTimeout(() => onVerify && onVerify(PickUpWizardSteps.ORDER_DETAILS), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <DrawerBody background="#3CE88B">
        <Flex direction="column" justifyContent="center" h="full">
          <Box marginBottom="40px">
            <IconPickUpCheck />
          </Box>
          <Text fontSize="14px" fontWeight="400">
            Código verificado
          </Text>
          <Text fontWeight="800" fontSize="32px" lineHeight="40px">
            Este código funcionó correctamente
          </Text>
          <Center marginTop="48px">
            <HStack display="center" alignItems="center" justifyContent="center">
              <PinInput variant="filled" size="md" defaultValue={code} isDisabled>
                {Array.from({ length: PICKUP_TOKEN_LENGTH }, (_, i) => (
                  <PinInputField />
                ))}
              </PinInput>
            </HStack>
          </Center>
          <Flex marginTop="72px" justify="center">
            <Img w="36px" src="/gif/Spinner-1s-377px.gif" />
          </Flex>
        </Flex>
      </DrawerBody>
    </>
  );
};
