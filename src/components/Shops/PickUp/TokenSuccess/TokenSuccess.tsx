import {
  DrawerBody,
  Flex,
  Box,
  Center,
  HStack,
  PinInput,
  PinInputField,
  Img,
  Text,
} from "@chakra-ui/react";
import { PICKUP_TOKEN_LENGTH } from "constants/pickUpTokenConstants";
import { ReactElement } from "react";
import IconPickUpCheck from "styled/icons/Shops/PickUp/Check";
import { ITokenSuccessProps } from "./ITokenSuccessProps";

/**
 * The TokenSuccess component.
 * @returns {ReactElement} the TokenSuccess component.
 * @param {ITokenSuccessProps} tokenSuccessProps TokenSuccess props
 */
export const TokenSuccess = (tokenSuccessProps: ITokenSuccessProps): ReactElement => {
  const { code } = tokenSuccessProps;
  return (
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
                <PinInputField key={`token-input-${i}`} />
              ))}
            </PinInput>
          </HStack>
        </Center>
        <Flex marginTop="72px" justify="center">
          <Img w="36px" src="/gif/Spinner-1s-377px.gif" />
        </Flex>
      </Flex>
    </DrawerBody>
  );
};
