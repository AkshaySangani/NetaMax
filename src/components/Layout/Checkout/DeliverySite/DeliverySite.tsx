import { ReactElement } from "react";

import { Box, Flex, Img, Link, Text } from "@chakra-ui/react";

import { IDeliverySiteProps } from "./IDeliverySiteProps";

/**
 * The DeliverySite component.
 * @param { IDeliverySiteProps } props the component props.
 * @returns { ReactElement } The DeliverySite component.
 */
export const DeliverySite = (props: IDeliverySiteProps): ReactElement => {
  const { selectedStore, updateStore, fromSuccess } = props;

  return (
    <Box
      h="auto"
      width="calc(100% + 3rem)"
      marginLeft="-1.5rem"
      bg="#f6f6f6"
      display="flex"
      alignItems="center"
    >
      <Box p="16px" display="flex" flexDirection="column">
        <Text
          color="#000000"
          fontSize="20px"
          fontWeight="700"
          display="flex"
          alignItems="flex-start"
        >
          Sitio de entrega
        </Text>
        <Text fontSize="16px" color="#5f5f5f">
          Esta es la tiendita que elegiste para la entrega
        </Text>
        <Flex marginTop="16px">
          <Box width="calc(30%)" padding="10px">
            <Flex
              height="60px"
              padding="auto"
              alignItems="center"
              justifyContent="center"
              backgroundColor="#d9d9d9"
              borderRadius="5px"
            >
              <Img width="30px" src="/assets/images/store.png" />
            </Flex>
          </Box>
          <Box padding="8px" width="calc(70% + 3rem)">
            <Text fontWeight="700" fontSize="16px">
              {selectedStore?.name}
            </Text>
            <Text
              marginTop="2px"
              fontSize="14px"
              display="flex"
              alignItems="center"
              color="#5f5f5f"
            >
              {selectedStore?.companyAddress}
            </Text>
            {fromSuccess ? (
              <>
                <Link
                  marginTop="2px"
                  color="#3870FF"
                  fontWeight="700"
                  decoration="underline"
                  target="_blank"
                  href={`https://www.google.com/maps/place/${selectedStore?.location.lat},${selectedStore?.location.lng}`}
                >
                  Ver ubicación
                </Link>
                <Text marginTop="10px" fontWeight="700">
                  Contacta con la tiendita
                </Text>
                <Link
                  marginTop="2px"
                  color="#3870FF"
                  fontWeight="700"
                  decoration="underline"
                  target="_blank"
                  href={`https://wa.me/52${selectedStore?.companyPhoneNumber}`}
                >
                  Ir al whatsapp de la tiendita
                </Link>
              </>
            ) : (
              <Text
                marginTop="2px"
                color="#3870FF"
                fontWeight="700"
                decoration="underline"
                onClick={updateStore}
              >
                Cambiar tiendita
              </Text>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
