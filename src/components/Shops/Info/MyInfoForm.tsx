import React, { ReactElement } from "react";

import { splitHost } from "utils/stringUtils";

import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import { Grid, GridItem } from "@chakra-ui/layout";

import { IMyInfoFormProps } from "./IMyInfoFormProps";

/**
 * The MyInfoForm component.
 * @returns {ReactElement} the MyInfoForm component.
 * @param {IMyInfoFormProps} props ProfitBanner props
 */
export const MyInfoForm = (props: IMyInfoFormProps): ReactElement => {
  const { Name, CompanyAddress, CompanyPhoneNumber, Hosts, CompanyName } = props;

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4} ml={[0, 14]} mr={[0, 14]} mt={[4, 4]}>
      <GridItem colSpan={[12, 12, 2]} h={[16, 20]}>
        <FormControl>
          <FormLabel htmlFor="username">Nombre</FormLabel>
          <InputGroup size="md">
            <Input id="name" placeholder={CompanyName} isDisabled />
          </InputGroup>
        </FormControl>
      </GridItem>
      <GridItem colSpan={[12, 12, 2]} h={[16, 20]} colStart={[0, 0, 4]} mt={[2, 0]}>
        <FormControl>
          <FormLabel htmlFor="address">Dirección</FormLabel>
          <InputGroup size="md">
            <Input id="address" placeholder={CompanyAddress} isDisabled />
          </InputGroup>
        </FormControl>
      </GridItem>
      <GridItem colSpan={[12, 12, 2]} h={[16, 20]} mt={[2, 0]}>
        <FormControl>
          <FormLabel htmlFor="phoneNumber">Teléfono</FormLabel>
          <Input id="phoneNumber" placeholder={CompanyPhoneNumber} isDisabled />
        </FormControl>
      </GridItem>
      <GridItem colSpan={[12, 12, 2]} colStart={[0, 0, 4]} h={[16, 20]} mt={[2, 0]}>
        <FormControl>
          <FormLabel htmlFor="storeName">Nombre de la tienda</FormLabel>
          <Input id="storeName" placeholder={Name} isDisabled />
        </FormControl>
      </GridItem>
      <GridItem colSpan={[12, 12, 2]} colStart={[0, 0]} h={[16, 20]} mt={[2, 0]}>
        <FormControl>
          <FormLabel htmlFor="url">Url</FormLabel>
          <Input id="url" placeholder={`https://neta.mx?${splitHost(Hosts)}`} isDisabled />
        </FormControl>
      </GridItem>
    </Grid>
  );
};
