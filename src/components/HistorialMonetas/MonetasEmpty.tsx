import React, { ReactElement } from "react";

import router from "next/router";
import EmptyMonetas from "styled/icons/GanaDinero/EmptyMonetas";

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";

/**
 * The MonetasEmpty component.
 * @returns {ReactElement} the component element.
 */
export const MonetasEmpty = (): ReactElement => {
  return (
    <Container maxW="container.xl">
      <Box pt="150px">
        <Box>
          <Flex justifyContent="center" flexDirection="column" alignItems="center">
            <Flex as={EmptyMonetas} />

            <Text align="center" fontSize="24px" fontWeight={800} p={2}>
              Aún no haz recibido monetas
            </Text>

            <Button onClick={() => router.back()} backgroundColor="#3870FF" p={2}>
              <Text color="#FFFFFF">¡Comienza a Ganar Hoy!</Text>
            </Button>
          </Flex>
        </Box>
      </Box>
    </Container>
  );
};
