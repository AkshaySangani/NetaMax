import React, { ReactElement } from "react";
import IconTracking from "styled/icons/Shops/Summary/Tracking";
import { Box, Button, Flex, Link, Text } from "@chakra-ui/react";
import { ISummaryEmptyProps } from "./ISummaryEmptyProps";

/**
 * The SummaryEmpty shops component.
 * @param {INavBarShopsProps} props The component props
 * @returns {React.ReactElement} The SummaryEmpty shops component
 */
export const SummaryEmpty = (props: ISummaryEmptyProps): ReactElement => {
  const { shopUrl, shopName, hasSummary, onClickCompartirLiga } = props;
  const shortStoreName = shopName?.split(".")[0];

  return hasSummary ? (
    <Flex justifyContent="space-around" direction={["column"]} align={["center", "flex-start"]}>
      <Box
        boxShadow="base"
        p={["2", "3"]}
        rounded="md"
        bg="white"
        w={["100%", "405px"]}
        minW="343px"
        mt="6px"
      >
        <Flex direction={["column"]} w="100%">
          <Flex direction="column">
            <Text fontWeight="bold">Aún no tienes ventas para este día</Text>
            <Text>
              Invita a tus clientes a comprar en tu liga para aumentar las ganancias de tu tiendita.
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Flex
        justifyContent="space-around"
        mr="4px"
        mt="34px"
        mb="14px"
        bg="#F7F6F8"
        borderRadius="24px"
        w={["95%", "343px"]}
        h="26px"
        minW="343px"
      >
        wwww.neta.mx/{shortStoreName}
      </Flex>
      <Link href={shopUrl} passHref textDecoration="none!important">
        <Button
          color="#3870ff"
          border="1px solid #3870FF"
          _focus={{ border: "1px solid #3870FF" }}
          bg="#3870ff"
          mr={["", "2"]}
          p="3"
          mt={["2", "3"]}
          mb={["2", "1"]}
          borderRadius="16px"
          h={["40px", "56px"]}
          w="343px"
          minW="343px"
          onClick={() => onClickCompartirLiga()}
        >
          <IconTracking />
          <Text color="white">Comparte tu liga</Text>
        </Button>
      </Link>
    </Flex>
  ) : (
    <Box boxShadow="base" p={["2", "3"]} rounded="md" bg="white" w={["100%", "405px"]} mt="6px">
      <Flex direction={["column", "row", "row"]}>
        <Flex direction="column">
          <Text fontWeight="bold">Las ventas para esta fecha se cerraron</Text>
          <Text>
            Ninguna venta se registró en tu tiendita para este día, selecciona otra fecha para ver
            tus ventas.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
