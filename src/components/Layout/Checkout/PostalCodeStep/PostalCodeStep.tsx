import { useEffect, useState, ReactElement } from "react";

import { InfoMessageBox } from "components/common/InfoMessageBox/InfoMessageBox";
import IconInfo from "styled/icons/Info";

import { Box, FormControl, FormErrorMessage, FormLabel, Input, Link, Text } from "@chakra-ui/react";

import { IPostalCodeStepProps } from "./IPostalCodeStepProps";

/**
 * The PhoneNumberStep component.
 * @param {IPhoneNumberStepProps} props the component props
 * @returns {ReactElement}  the component.
 **/
export const PostalCodeStep = (props: IPostalCodeStepProps): ReactElement => {
  const { errors, register } = props;
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
        <FormControl isInvalid={errors.postalCode !== undefined}>
          {errors.postalCode ? (
            <FormLabel color="#E53E3E">Código postal</FormLabel>
          ) : (
            <FormLabel>Código postal</FormLabel>
          )}
          <Input
            size="md"
            pattern="[0-9]{5}"
            errorBorderColor="red.300"
            type="number"
            {...register("postalCode")}
          />
          <FormErrorMessage>{errors.postalCode?.message}</FormErrorMessage>
          {showTooltip ? (
            <InfoMessageBox message="Con tu código postal podemos recomendarte las mejores promociones a tus tiendas de confianza." />
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
      </Box>
    </>
  );
};
