import { ReactElement } from "react";

import NoLogin from "styled/icons/MiCuenta/NoLogin";

import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

import { IGoToLoginProps } from "./IGoToLoginProps";

/**
 * The GoToLogin component.
 * @returns {ReactElement} the component element.
 * @param {IGoToLoginProps} props the component props
 */
export const GoToLogin = (props: IGoToLoginProps): ReactElement => {
  const { onOpenLogin } = props;
  return (
    <div>
      <Center height="100%" width="100%" paddingTop="6" gap="16" flexDirection="column">
        <NoLogin />
        <Box margin="-20px 0">
          <Heading
            fontWeight="800"
            textAlign="center"
            paddingInline="12"
            lineHeight="32px"
            fontSize="24px"
            data-testid="invitation-message"
          >
            Ingresa tus datos para continuar
          </Heading>

          <Text
            marginTop="14px"
            color="#4A4A4A"
            textAlign="center"
            paddingInline="12"
            lineHeight="27px"
            fontSize="20px"
            data-testid="invitation-detail-message"
          >
            Te invitamos a ingresar tus datos para ver tus compras
          </Text>
        </Box>
        <Button
          width="310px"
          borderRadius="20px"
          height="56px"
          colorScheme="netaBlue"
          fontSize="18px"
          fontWeight="700"
          lineHeight="25.2px"
          onClick={onOpenLogin}
          data-testid="redirect-button"
        >
          Ingresar datos
        </Button>
      </Center>
    </div>
  );
};
