import React, { ReactElement } from "react";

import { INearestStore } from "dataflows/Stores/INearestStore";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

import { NearestStore } from "../NearestStore/NearestStore";
import { IStoreByPostalCodeProps } from "./IStoreByPostalCodeProps";

/**
 * The StoreByPostalCode component
 * @param {IStoreByPostalCodeProps} props the component props
 * @returns {ReactElement}  the component.
 */
export const StoreByPostalCode = (props: IStoreByPostalCodeProps): ReactElement => {
  const {
    register,
    formState,
    stores,
    loadingNearestStores,
    onButtonClick,
    onStoreClick,
    errorMessageStores,
  } = props;

  return (
    <>
      <Box display="flex" flexDirection="column" textAlign="center" height="100%">
        <Text paddingTop="15px" fontSize="xl" fontWeight="500">
          Escribe tu <b>código postal </b>para conocer cual de las <b>3,000</b> tienditas
          disponibles es la más cercana a ti.
        </Text>
        <Box mt="30px" w="100%">
          <FormControl isInvalid={formState.errors.postalCode !== undefined}>
            {formState.errors.postalCode ? (
              <FormLabel color="#E53E3E" fontSize="lg">
                Código postal
              </FormLabel>
            ) : (
              <FormLabel fontSize="lg">Código postal</FormLabel>
            )}
            <Flex>
              <Input
                size="md"
                pattern="[0-9]{5}"
                errorBorderColor="red.300"
                type="number"
                {...register("postalCode")}
              />
              <Button
                ml="2"
                fontSize="lg"
                width="50%"
                disabled={!formState.isValid}
                _hover={{ backgroundColor: "none" }}
                _disabled={{ backgroundColor: "netaGray.500" }}
                colorScheme="netaBlue"
                onClick={onButtonClick}
                isLoading={loadingNearestStores}
              >
                Buscar
              </Button>
            </Flex>
            <FormErrorMessage>{formState.errors.postalCode?.message}</FormErrorMessage>
          </FormControl>
        </Box>
        {stores && stores.length > 0 && (
          <>
            <Text mt="8" fontSize="xl" fontWeight="600">
              Selecciona la tiendita de tu preferencia
            </Text>
            <Text mt="2" fontSize="md" fontWeight="500" align="left">
              Tienditas cerca al código postal:
            </Text>
            <Box maxHeight="65%" overflow="auto">
              {stores.map((store: INearestStore) => (
                <NearestStore {...store} key={store.id} onStoreClick={onStoreClick} />
              ))}
            </Box>
          </>
        )}
        {errorMessageStores && (
          <Text mt="8" fontSize="lg" color="red">
            No contamos con tiendas cercanas a tu código postal.
          </Text>
        )}
      </Box>
    </>
  );
};
