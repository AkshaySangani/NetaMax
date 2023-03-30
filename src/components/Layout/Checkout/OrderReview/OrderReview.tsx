import React, { ReactElement } from "react";

import { Loader } from "components/common/Loader";
import { Notification } from "components/common/Notification/Notification";
import { OrderSplitter } from "components/common/OrderSplitter/OrderSplitter";
import { GMV_ID } from "constants/ganaDineroContstans";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import NotificationIcon from "styled/icons/CheckoutFlow/Notification";
import { formatMoney } from "utils/currencyUtils";

import { Box, Center, Checkbox, Img, Text } from "@chakra-ui/react";

import { DeliverySite } from "../DeliverySite/DeliverySite";
import { IPurchaseSummaryProps } from "../PurchaseSummary/IPurchaseSummaryProps";
import { PurchaseSummary } from "../PurchaseSummary/PurchaseSummary";
import { IOrderReviewProps } from "./IOrderReviewProps";
import { OrderReviewSection } from "./OrderReviewSection/OrderReviewSection";

// import { OrderReviewSection } from "./OrderReviewSection/OrderReviewSection";

/**
 *  The order review screen component
 * @param {IOrderReviewProps} props the component props
 * @returns {ReactElement} The order review screen component
 */
export const OrderReview = (props: IOrderReviewProps): ReactElement => {
  const {
    selectedStore,
    register,
    errors,
    fetchCode,
    isCheckingCoupon,
    totalDiscountPrice,
    totalNetPrice,
    isLoadingOrderReview,
    updateStore,
    totalAmount,
    walletAmount, //MONETAS
    discountAmount,
    coupon,
    statusChallenges,
    couponInputVisible,
    handleCouponVisible,
    payWithMonetas,
    // handlePayWithMonetas,
    totalMonetasAmount,
    basketItems,
    loadPreviousStep,
  } = props;

  const GMVChallengeInfo =
    statusChallenges && statusChallenges.find((challenge) => challenge.PrizeType === GMV_ID);

  const treshHold = GMVChallengeInfo?.GMVThreshold;
  const alarmTreshHold = GMVChallengeInfo?.GMVAlarmThreshold;
  const GMVPriceAmount = GMVChallengeInfo?.PriceAmount;

  const puchaseProps: IPurchaseSummaryProps = {
    discountAmount,
    totalAmount,
    totalNetPrice,
    walletAmount,
    coupon,
    payWithMonetas,
    handleCouponVisible,
    errors,
    register,
    fetchCode,
    couponInputVisible,
    isCheckingCoupon,
  };

  return (
    <>
      {isLoadingOrderReview ? (
        <Center height="100%">
          <Loader />
        </Center>
      ) : (
        <Box>
          {totalDiscountPrice > 0 && (
            <Box
              bg="#3CE88B"
              justifyContent="center"
              alignItems="center"
              height="50px"
              width="calc(100% + 3rem)"
              marginLeft="-1.5rem"
              marginTop="-0.5rem"
              fontSize={{ base: "md", md: "md" }}
              display="flex"
              flexDirection="row"
            >
              Estás ahorrando
              <Text padding="0 0.25em" fontWeight="bold">
                {formatMoney(totalDiscountPrice, CURRENCY_NAME)}
              </Text>
              en esta orden
            </Box>
          )}

          <DeliverySite selectedStore={selectedStore} updateStore={updateStore} />

          <Box mt="40px" h="100%" w="100%">
            <OrderSplitter basketItems={basketItems} loadPreviousStep={loadPreviousStep} />
          </Box>

          <OrderReviewSection title="Método de pago">
            <Box marginTop="10px">
              <Checkbox
                width="100%"
                border="1px solid rgba(53, 53, 53, 0.1)"
                borderRadius="48px"
                padding="14px"
                isChecked={true}
              >
                Efectivo
              </Checkbox>
            </Box>
          </OrderReviewSection>

          <OrderReviewSection
            title="Monetas"
            icon={<Img marginLeft="8px" src="/assets/images/icons/dolar.png" />}
          >
            <Text marginTop="2px" color="#5f5f5f">
              Utiliza lo que has ganado para pagar parte de tus pedidos
            </Text>
            <Text marginTop="10px" fontSize="16px" fontWeight="700" alignSelf="start">
              {totalMonetasAmount === 0
                ? "No tienes monetas acumuladas"
                : `${Math.round(totalMonetasAmount * 100) / 100} Monetas acumuladas`}
            </Text>
            <Text
              // TODO: Uncomment when the choose to use moNETAs feature is done
              // isChecked={walletAmount !== 0 && payWithMonetas}
              // isDisabled={walletAmount === 0}
              // onChange={handlePayWithMonetas}
              marginTop="5px"
            >
              {totalMonetasAmount !== 0
                ? walletAmount === 0 && Array.isArray(coupon) && coupon.length !== 0
                  ? "Guardas todas tus monetas en esta compra! 💸"
                  : `Pagas ${formatMoney(walletAmount, CURRENCY_NAME)} con tus monetas`
                : ""}
            </Text>
          </OrderReviewSection>

          <OrderReviewSection title="Resumen de compra">
            <PurchaseSummary {...puchaseProps} />
          </OrderReviewSection>

          {treshHold &&
          alarmTreshHold &&
          totalAmount < treshHold &&
          totalAmount >= alarmTreshHold &&
          !GMVChallengeInfo?.completed ? (
            <Box position="absolute" bottom="27%" left="0%" width="100%">
              <Notification
                message={`Recuerda que con compras mayores a $${treshHold} ganas $${GMVPriceAmount} en tu próxima compra.`}
                delayTime={5}
                icon={<NotificationIcon />}
              />
            </Box>
          ) : null}
        </Box>
      )}
    </>
  );
};
