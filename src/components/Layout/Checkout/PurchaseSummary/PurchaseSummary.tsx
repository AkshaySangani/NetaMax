import { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { formatMoney } from "utils/currencyUtils";

import { Box, Flex, Img, Text } from "@chakra-ui/react";

import { CouponInput } from "../CouponInput/CouponInput";
import { IPurchaseSummaryProps } from "./IPurchaseSummaryProps";

/**
 * The PurchaseSummary component.
 * @param { IOrderReviewSectionProps } props the component props.
 * @returns { ReactElement } The OrderReviewSection component.
 */
export const PurchaseSummary = (props: IPurchaseSummaryProps): ReactElement => {
  const {
    couponInputVisible,
    discountAmount,
    errors,
    fetchCode,
    handleCouponVisible,
    isCheckingCoupon,
    register,
    totalAmount,
    totalNetPrice,
    walletAmount,
    coupon,
    payWithMonetas,
  } = props;
  const actualCoupon = coupon && coupon[0];
  const fromReview = handleCouponVisible && errors && register && fetchCode;

  return (
    <Box marginTop="14px">
      <Flex width="100%" justifyContent="space-between">
        <Text>Suma parcial</Text>
        <Text fontSize="16px" fontWeight="800">
          {formatMoney(totalNetPrice, CURRENCY_NAME)}{" "}
        </Text>
      </Flex>
      <Flex width="100%" justifyContent="space-between">
        <Text>Envío</Text>
        <Text fontSize="16px" fontWeight="800">
          Gratis
        </Text>
      </Flex>
      {actualCoupon && (
        <Flex width="100%" justifyContent="space-between">
          <Flex>
            <Text>Descuento cupón</Text>
          </Flex>
          <Text fontSize="16px" fontWeight="800" color="#F04D4B">
            {discountAmount > 0 && <Text>-{formatMoney(discountAmount, CURRENCY_NAME)}</Text>}
          </Text>
        </Flex>
      )}
      {walletAmount > 0 && payWithMonetas && (
        <Flex width="100%" justifyContent="space-between">
          <Flex>
            <Text>Monetas</Text>
            <Img marginLeft="8px" src="/assets/images/icons/dolar.png" />
          </Flex>
          <Text fontSize="16px" fontWeight="800" color="#F04D4B">
            - {formatMoney(walletAmount, CURRENCY_NAME)}
          </Text>
        </Flex>
      )}
      {fromReview && (
        <CouponInput
          coupon={coupon}
          couponInputVisible={couponInputVisible || false}
          handleCouponVisible={handleCouponVisible}
          errors={errors}
          register={register}
          isCheckingCoupon={isCheckingCoupon || false}
          fetchCode={fetchCode}
        />
      )}
      <Box margin="10px 0" w="100%">
        <hr />
      </Box>
      <Flex width="100%" justifyContent="space-between">
        <Text fontWeight="800" fontSize="16px">
          Total a pagar
        </Text>
        <Text fontSize="16px" fontWeight="800">
          {formatMoney(totalAmount, CURRENCY_NAME)}
        </Text>
      </Flex>
    </Box>
  );
};
