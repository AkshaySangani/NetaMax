import React, { ReactElement } from "react";

import { ASSISTANCE_PHONE_NUMBER } from "constants/checkoutConstants";
import CheckoutCheckmark from "styled/icons/CheckoutFlow/CheckMark";
import WhatsappIcon from "styled/icons/WhatsappIcon";

import { Box, Button, Container, Flex, Link, Text } from "@chakra-ui/react";

import { DeliverySite } from "../DeliverySite/DeliverySite";
import { PurchaseSummary } from "../PurchaseSummary/PurchaseSummary";
import { IOrderSuccessProps } from "./IOrderSuccessProps";

/**
 *  The order success screen component
 * @param {IOrderSuccessProps} props The component props
 * @returns {ReactElement} The order success screen component
 */
export const OrderSuccess = (props: IOrderSuccessProps): ReactElement => {
  const {
    formattedPhone,
    couponSumSuccess,
    totalSumSuccess,
    partialSumSuccess,
    monetasSumSuccess,
    coupon,
    payWithMonetas,
    onReferralShareButtonClick,
    selectedStore,
    shareDiscountCodeText,
    customerName,
  } = props;

  return (
    <Box>
      <Flex
        position="absolute"
        top="0"
        left="0"
        direction="column"
        background="#3CE88B"
        justifyContent="space-evenly"
        height="250px"
        zIndex="10"
      >
        <Container marginY="28px">
          <Box>
            <CheckoutCheckmark />
          </Box>
          <Box marginTop="18px" paddingBottom="10px">
            <Text fontSize="32px" fontWeight="800" lineHeight="40px">
              ¡Tu pedido ha sido confirmado!
            </Text>
            <Text marginTop="4px" fontSize="14px">
              {customerName || ""} {`${customerName ? "t" : "T"}`}e hemos enviado un whatsapp
              confirmando el pedido, al número <b>{formattedPhone}</b>
            </Text>
          </Box>
        </Container>
      </Flex>
      <Box paddingTop="180px">
        <DeliverySite selectedStore={selectedStore} fromSuccess />
        <Box mt="40px">
          <Text fontSize="18px" fontWeight="800" lineHeight="40px">
            ¡Regala con Neta!
          </Text>
          <Text fontSize="14px" opacity="0.7">
            Invita a tus amigos y tendrán un descuento de 20 pesos en su primera orden.
          </Text>
          <Link
            href={`https://wa.me/?text=${encodeURIComponent(shareDiscountCodeText)}`}
            target="_blank"
            passHref
          >
            <Button
              marginTop="8px"
              border="1px solid #353535"
              borderRadius="48px"
              paddingX="16px"
              paddingY="6px"
              background="white"
              minWidth="100px"
              onClick={onReferralShareButtonClick}
            >
              <Text fontSize="14px" fontWeight="600">
                Invitar amigos
              </Text>
            </Button>
          </Link>
        </Box>
        <Box marginTop="42px" marginBottom="8px">
          <Text fontSize="18px" fontWeight="800" lineHeight="40px">
            ¿Necesitas ayuda con tu pedido?
          </Text>
          <Text fontSize="14px" opacity="0.7">
            Si deseas cancelar o editar tu pedido comunicate con nosotros via whatsapp par ayudarte
          </Text>
        </Box>
        <Link href={`https://wa.me/${ASSISTANCE_PHONE_NUMBER}`} target="_blank" passHref>
          <Button borderRadius="24px" colorScheme="whatsapp">
            <WhatsappIcon />
            <Text color="white" fontSize="16px" marginLeft="8px">
              Necesito ayuda con mi pedido
            </Text>
          </Button>
        </Link>
        <Text fontSize="18px" fontWeight="800" lineHeight="40px" marginTop="32px">
          Resumen del pedido
        </Text>
        <PurchaseSummary
          discountAmount={couponSumSuccess}
          totalAmount={totalSumSuccess}
          totalNetPrice={partialSumSuccess}
          walletAmount={monetasSumSuccess}
          coupon={coupon}
          payWithMonetas={payWithMonetas}
        />
      </Box>
    </Box>
  );
};
