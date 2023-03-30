import React, { ReactElement } from "react";

import { CURRENCY_NAME } from "constants/localeFormatConstants";
import BusDelivery from "styled/icons/CheckoutFlow/BusDelivery";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";
import { formatNameItem } from "utils/stringUtils";

import {
  useMediaQuery,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Img,
  Text,
} from "@chakra-ui/react";

import { IOrderSplitterProps } from "./IOrderSplitterProps";

enum DeliveryDateID {
  betweenOneDay = 1,
  betweenThreeAndFiveDays = 2,
  betweenSevenAndTenDays = 3,
}

/**
 *  The OrderSplitter component
 * @param {IOrderSplitterProps} props the component props
 * @returns {ReactElement} The order review screen component
 */
export const OrderSplitter = ({
  basketItems,
  loadPreviousStep,
}: IOrderSplitterProps): ReactElement => {
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  const numberOfElements = Number(basketItems.length);
  /**
   *  The HeaderOrderSplitter function
   * @param {numberArticles} numberArticles component props
   * @returns {ReactElement} The order review screen component
   */
  const HeaderOrderSplitter = (numberArticles: number) => {
    return (
      <Box>
        <Text
          color="#000000"
          fontSize="32px"
          fontWeight="700"
          display="flex"
          alignItems="flex-start"
          lineHeight="44px"
          paddingBottom="4px"
        >
          Orden de compra
        </Text>

        <Box
          color="#000000"
          fontSize="14px"
          fontWeight="400"
          display="flex"
          alignItems="flex-start"
          lineHeight="19px"
          paddingBottom="4px"
        >
          Articulos a comprar
          <Text fontWeight="800" paddingLeft="5px">
            {numberArticles}
          </Text>
        </Box>

        <Text
          color="#3A86FF"
          fontSize="14px"
          fontWeight="500"
          display="inline-flex"
          alignItems="flex-start"
          lineHeight="19px"
          textDecoration="underline"
          cursor="pointer"
          paddingBottom="16px"
          onClick={loadPreviousStep}
        >
          ¿Quieres modificar tu orden? haz click acá
        </Text>
      </Box>
    );
  };

  /**
   *  The betweenOneDay function
   * @returns {ReactElement} The elementsOneDay
   */
  const betweenOneDay = () => {
    const elementsOneDay = basketItems.filter(
      (item) => item.deliveryDateId === DeliveryDateID.betweenOneDay
    );
    let deliveryDateName;
    if (elementsOneDay) {
      deliveryDateName = elementsOneDay[0]?.deliveryDateName;
    }

    return (
      <>
        {elementsOneDay.length > 0 ? (
          <AccordionItem marginBottom="8px" borderTop="0">
            <Box>
              <AccordionButton
                border="0.5px solid #68717D"
                borderRadius="10px"
                outline="none"
                focusBorderColor="red"
                _expanded={{
                  bg: "#EBF2FF",
                  borderRadius: "10px 10px 0px 0px",
                  boxShadow: "none !important",
                }}
                boxShadow="none"
              >
                <Box flex="1" textAlign="left">
                  <Box display="flex" alignItems="center">
                    <BusDelivery colorImage="#0744A6" />
                    <Box paddingLeft="18px">
                      <Text color="#0744A6" fontSize="18px" fontWeight="500" lineHeight="25px">
                        {deliveryDateName}
                      </Text>
                      <Text color="#767676" fontSize="14px" fontWeight="500" lineHeight="19px">
                        {elementsOneDay.length} productos
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel
              pb={4}
              padding="0"
              overflowY={elementsOneDay.length > 5 ? "scroll" : "initial"}
              height={elementsOneDay.length > 5 ? "240px" : "auto"}
            >
              {elementsOneDay.map((element, index) => (
                <Box
                  display="flex"
                  alignItems="center"
                  padding="8px 16px"
                  border="1px solid transparent"
                  backgroundColor={index % 2 === 0 ? "#F4F4F4" : "#FFF"}
                  key={element.id}
                >
                  <Img
                    rounded="lg"
                    objectFit="contain"
                    src={element.pictureUrl}
                    alt={element.name}
                    draggable="false"
                    loading="lazy"
                    backgroundColor="#fff"
                    width="40px"
                    height="40px"
                    borderRadius="10px"
                    filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                  />

                  <Box paddingLeft="18px">
                    <Text color="#333333" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {isDesktop ? element.name : formatNameItem(element.name)} ({element.quantity}
                      u.)
                    </Text>
                    <Text
                      color="#767676"
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight="17px"
                      letterSpacing="0.04em"
                    >
                      {formatMoney(Number(element.price), CURRENCY_NAME)}
                    </Text>
                  </Box>
                </Box>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ) : null}
      </>
    );
  };

  /**
   *  The betweenThreeAndFiveDays function
   * @returns {ReactElement} The betweenThreeAndFiveDays
   */
  const betweenThreeAndFiveDays = () => {
    const elementsThreeAndFive = basketItems.filter(
      (item) => item.deliveryDateId === DeliveryDateID.betweenThreeAndFiveDays
    );

    let deliveryDateName;
    if (elementsThreeAndFive) {
      deliveryDateName = elementsThreeAndFive[0]?.deliveryDateName;
    }
    return (
      <>
        {elementsThreeAndFive.length > 0 ? (
          <AccordionItem marginBottom="8px" borderTop="0">
            <Box>
              <AccordionButton
                border="0.5px solid #68717D"
                borderRadius="10px"
                outline="none"
                focusBorderColor="red"
                _expanded={{
                  bg: "#EBFFF4",
                  borderRadius: "10px 10px 0px 0px",
                  boxShadow: "none !important",
                }}
                boxShadow="none"
              >
                <Box flex="1" textAlign="left">
                  <Box display="flex" alignItems="center">
                    <BusDelivery colorImage="#068441" />
                    <Box paddingLeft="18px">
                      <Text color="#068441" fontSize="18px" fontWeight="500" lineHeight="25px">
                        {deliveryDateName}
                      </Text>
                      <Text color="#767676" fontSize="14px" fontWeight="500" lineHeight="19px">
                        {elementsThreeAndFive.length} productos
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel
              pb={4}
              padding="0"
              overflowY={elementsThreeAndFive.length > 5 ? "scroll" : "initial"}
              height={elementsThreeAndFive.length > 5 ? "240px" : "auto"}
            >
              {elementsThreeAndFive.map((element, index) => (
                <Box
                  display="flex"
                  alignItems="center"
                  padding="8px 16px"
                  border="1px solid transparent"
                  backgroundColor={index % 2 === 0 ? "#F4F4F4" : "#FFF"}
                  key={element.id}
                >
                  <Img
                    rounded="lg"
                    objectFit="contain"
                    src={element.pictureUrl}
                    alt={element.name}
                    draggable="false"
                    loading="lazy"
                    backgroundColor="#fff"
                    width="40px"
                    height="40px"
                    borderRadius="10px"
                    filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                  />
                  <Box paddingLeft="18px">
                    <Text color="#333333" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {isDesktop ? element.name : formatNameItem(element.name)} ({element.quantity}
                      u.)
                    </Text>
                    <Text
                      color="#767676"
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight="17px"
                      letterSpacing="0.04em"
                    >
                      {formatMoney(Number(element.price), CURRENCY_NAME)}
                    </Text>
                  </Box>
                </Box>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ) : null}
      </>
    );
  };

  /**
   *  The betweenSevenAndTenDays function
   * @returns {ReactElement} The betweenSevenAndTenDays
   */
  const betweenSevenAndTenDays = () => {
    const elementsSevenAndTen = basketItems.filter(
      (item) => item.deliveryDateId === DeliveryDateID.betweenSevenAndTenDays
    );
    let deliveryDateName;
    if (elementsSevenAndTen) {
      deliveryDateName = elementsSevenAndTen[0]?.deliveryDateName;
    }
    return (
      <>
        {elementsSevenAndTen.length > 0 ? (
          <AccordionItem marginBottom="8px" borderTop="0">
            <Box>
              <AccordionButton
                border="0.5px solid #68717D"
                borderRadius="10px"
                outline="none"
                focusBorderColor="red"
                _expanded={{
                  bg: "#F3EBFF",
                  borderRadius: "10px 10px 0px 0px",
                  boxShadow: "none !important",
                }}
                boxShadow="none"
              >
                <Box flex="1" textAlign="left">
                  <Box display="flex" alignItems="center">
                    <BusDelivery colorImage="#8338EC" />
                    <Box paddingLeft="18px">
                      <Text color="#8338EC" fontSize="18px" fontWeight="500" lineHeight="25px">
                        {deliveryDateName}
                      </Text>
                      <Text color="#767676" fontSize="14px" fontWeight="500" lineHeight="19px">
                        {elementsSevenAndTen.length} productos
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel
              pb={4}
              padding="0"
              overflowY={elementsSevenAndTen.length > 5 ? "scroll" : "initial"}
              height={elementsSevenAndTen.length > 5 ? "240px" : "auto"}
            >
              {elementsSevenAndTen.map((element, index) => (
                <Box
                  display="flex"
                  alignItems="center"
                  padding="8px 16px"
                  border="1px solid transparent"
                  backgroundColor={index % 2 === 0 ? "#F4F4F4" : "#FFF"}
                  key={element.id}
                >
                  <Img
                    rounded="lg"
                    objectFit="contain"
                    src={element.pictureUrl}
                    alt={element.name}
                    draggable="false"
                    loading="lazy"
                    backgroundColor="#fff"
                    width="40px"
                    height="40px"
                    borderRadius="10px"
                    filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
                  />

                  <Box paddingLeft="18px">
                    <Text color="#333333" fontSize="16px" fontWeight="500" lineHeight="22px">
                      {isDesktop ? element.name : formatNameItem(element.name)} ({element.quantity}
                      u.)
                    </Text>
                    <Text
                      color="#767676"
                      fontSize="12px"
                      fontWeight="500"
                      lineHeight="17px"
                      letterSpacing="0.04em"
                    >
                      {formatMoney(Number(element.price), CURRENCY_NAME)}
                    </Text>
                  </Box>
                </Box>
              ))}
            </AccordionPanel>
          </AccordionItem>
        ) : null}
      </>
    );
  };

  return (
    <>
      {HeaderOrderSplitter(numberOfElements)}
      <Accordion allowToggle>
        {betweenOneDay()}
        {betweenThreeAndFiveDays()}
        {betweenSevenAndTenDays()}
      </Accordion>
    </>
  );
};
