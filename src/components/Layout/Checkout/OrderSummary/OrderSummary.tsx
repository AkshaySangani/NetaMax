import { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { formatMoney } from "utils/currencyUtils";

import { Box, Text } from "@chakra-ui/react";

import { IOrderSummaryProps } from "./IOrderSummaryProps";

/**
 * The order summary component.
 * @param {IOrderSummaryProps} props the props
 * @returns {ReactElement} the component
 */
export const OrderSummary = (props: IOrderSummaryProps): ReactElement => {
  const { totalDiscountPrice, totalNetPrice } = props;

  return (
    <Box height="120px">
      <Box display="flex" bg="#3CE88B" alignItems="center" justifyContent="center" height="51px">
        <Box fontSize={{ base: "md", md: "md" }} display="flex">
          Estás ahorrando
          <Text padding="0 0.25em" fontWeight="bold">
            {formatMoney(totalDiscountPrice, CURRENCY_NAME)}
          </Text>
          en esta orden
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" m="0 16px" marginTop="20px">
        <Text> Sub-Total:</Text>
        {formatMoney(totalNetPrice > 0 ? totalNetPrice : 0, CURRENCY_NAME)}
      </Box>
    </Box>
  );
};
