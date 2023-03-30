import { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { IItem } from "dataflows/Shops/IItem";
import { formatMoney } from "utils/currencyUtils";

import { Box, Container, Flex, Img, Text } from "@chakra-ui/react";

/**
 * The Order Detail Component
 * @param {IItem} props the component props
 * @returns {ReactElement} The Deliver Order Detail
 */
export const OrderDetail = (props: IItem): ReactElement => {
  const { image, name, qty, price } = props;

  return (
    <Container borderBottom="0.5px solid rgba(53, 53, 53, 0.2)" paddingY="24px">
      <Flex alignItems="center" justify="space-between">
        <Flex w="80px" justify="center">
          <Img maxH="80px" maxW="80px" alignContent="center" src={image} alt={name} fit="contain" />
        </Flex>
        <Box>
          <Text fontSize="16px" fontWeight="800" textAlign="right" maxWidth="188px">
            {name}
          </Text>
          <Text fontSize="14px" fontWeight="400" textAlign="right">
            {qty} {`unidad${qty > 1 ? "es" : ""}`}
          </Text>
          <Text marginTop="26px" fontSize="16px" fontWeight="600" textAlign="right">
            {formatMoney(Number(price), CURRENCY_NAME)}
          </Text>
        </Box>
      </Flex>
    </Container>
  );
};
