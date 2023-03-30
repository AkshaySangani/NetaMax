import React, { ReactElement } from "react";

import { MIS_COMPRAS_ROUTE } from "constants/checkoutConstants";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import ArrowFullTop from "styled/icons/ArrowFullTop";
import Clock from "styled/icons/Clock";
import Order from "styled/icons/Order";
import { formatMoney } from "utils/currencyUtils";

import { Box, Text } from "@chakra-ui/react";

import { ICardHistoryProps } from "./ICardHistoryProps";

/**
 * Card History Component
 * @param {ICardHistoryProps} props the component props.
 * @returns {ReactElement} the component element.
 */
const CardHistoryComponent = (props: ICardHistoryProps): ReactElement => {
  const { detail, amount, date, orderId, movementTypeId } = props;
  const [cardTypeColor, setCardTypeColor] = React.useState("");
  const [cardTypeReason, setCardTypeReason] = React.useState("");
  const dateFormat = new Date(date);

  /**
   * get difference date to date card history
   * @returns {string} the date ago.
   */
  const getDifferenceDate = (): string => {
    const dateNow = new Date();
    const differenceDate = dateNow.getTime() - dateFormat.getTime();

    const differenceHours = Math.floor(differenceDate / (1000 * 3600));
    const differenceDays = Math.floor(differenceHours / 24);

    if (differenceHours < 1) {
      return "Hace menos de 1 hora";
    }
    if (differenceHours < 24) {
      return `Hace ${differenceHours} ${differenceHours > 1 ? "horas" : "hora"}`;
    }
    if (differenceDays < 7) {
      return `Hace ${differenceDays} ${differenceDays > 1 ? "días" : "día"}`;
    }

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    } as Intl.DateTimeFormatOptions;

    return dateFormat.toLocaleDateString("es-MX", options);
  };

  React.useEffect(() => {
    switch (movementTypeId) {
      case 10:
        setCardTypeColor("#04A940");
        setCardTypeReason("Abono");
        break;
      case 20:
        setCardTypeColor("#ED9F00");
        setCardTypeReason("Usados");
        break;
      case 30:
        setCardTypeColor("#F54A49");
        setCardTypeReason("Vencidos");
        break;
    }
  }, [movementTypeId]);

  return (
    <Box
      borderWidth="1px"
      borderStyle="solid"
      borderColor="#9F9F9F"
      borderRadius="14px"
      padding="1rem"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      position="relative"
    >
      <Box display="flex" flexDirection="column" flex="1">
        <Text fontSize="16px" color="#2F3346" fontWeight="600">
          {detail}
        </Text>
        <Box display="flex" flexDirection="row" placeItems="center">
          <Box display="flex" flexDirection="row" alignItems="center">
            <Box
              width="18px"
              height="18px"
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Clock display="block" />
            </Box>
            <Box display="flex" flexDirection="column">
              <Text
                data-testid="dateTest"
                fontSize="14px"
                color="#717171"
                paddingLeft="0.25rem"
                lineHeight="normal"
              >
                {getDifferenceDate()}
              </Text>
            </Box>
          </Box>
          {orderId && (
            <Box display="flex" flexDirection="row" paddingLeft="0.5rem" alignItems="center">
              <Box
                width="18px"
                height="18px"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Order display="block" />
              </Box>
              <Box display="flex" flexDirection="column">
                <a href={`${MIS_COMPRAS_ROUTE}/${orderId}`}>
                  <Text
                    fontSize="14px"
                    color="#3A86FF"
                    paddingLeft="0.25rem"
                    lineHeight="normal"
                    textDecoration="underline"
                    cursor="pointer"
                  >
                    Detalle de compra
                  </Text>
                </a>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="end">
        <Box display="flex" flexDirection="row" placeItems="center" lineHeight="24px">
          <Text
            data-testid="amountTest"
            fontSize="18px"
            color={cardTypeColor}
            fontWeight="700"
            paddingRight="0.25rem"
          >
            {movementTypeId === 10 ? "+" : "-"} {formatMoney(Number(amount), CURRENCY_NAME)}
          </Text>
          <ArrowFullTop
            fill={cardTypeColor}
            transform={movementTypeId != 10 ? "rotate(180)" : ""}
          />
        </Box>
        <Box display="flex" flexDirection="row" placeItems="center">
          <Text fontSize="14px" color="#717171" paddingLeft="0.25rem">
            {cardTypeReason}
          </Text>
        </Box>
      </Box>
      <Box
        position="absolute"
        width="6px"
        backgroundColor={cardTypeColor}
        height="3em"
        right="-1px"
      />
    </Box>
  );
};

export default CardHistoryComponent;
