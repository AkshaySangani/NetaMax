import React, { useEffect, useState, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { Loader } from "components/common/Loader";
import { Order } from "components/Shops/Order/Order";
import { SplitCard } from "components/Shops/SplitCard/SplitCard";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { IInvoice } from "dataflows/Shops/IInvoice";
import { selectInvoices } from "dataflows/Shops/Invoices/InvoicesSelectors";
import { selectShopUser } from "dataflows/Shops/Login/LoginSelectors";
import { selectIsLoadingOrders, selectOrders } from "dataflows/Shops/Orders/OrdersSelectors";
import { getOrders } from "dataflows/Shops/Orders/OrdersThunks";
import IconBasket from "styled/icons/Shops/Order/Basket";
import IconNeta from "styled/icons/Shops/Order/Neta";
import IconOrder from "styled/icons/Shops/Order/Order";
import { formatMoney } from "utils/currencyUtils";
import { convertDateToLocaleString } from "utils/dateUtils";

import { Container } from "@chakra-ui/layout";
import { Center, Text } from "@chakra-ui/react";

import { IOrderContainerProps } from "./IOrdersContainer";
import { trackEvent } from "utils/tracker";
import { SA_ORDERS_PAGE_VIEWED, TrackerApp } from "constants/amplitudeConstants";
import { IOrderShops } from "dataflows/Shops/IOrderShops";

/**
 * The orders container.
 * @param {IOrderContainerProps} props the component props.
 * @returns { ReactElement } The order details container.
 */
export const OrderContainer = (props: IOrderContainerProps): ReactElement => {
  const { orderId } = props;
  const dispatch = useDispatch();
  const invoices = useSelector(selectInvoices);
  const shopUser = useSelector(selectShopUser);
  const orders = useSelector(selectOrders);
  const isLoadingOrders = useSelector(selectIsLoadingOrders);
  const currentShop = shopUser && shopUser[0];
  const [currentInvoice, setCurrentInvoice] = useState<IInvoice>();
  const totalPayToNeta =
    currentInvoice &&
    Number(
      currentInvoice.subTotal - currentInvoice.storeCommisssion - currentInvoice.orderDisccount
    );

  useEffect(() => {
    if (invoices && orderId) {
      const invoice = invoices.find((invoice) => invoice.id === orderId);
      setCurrentInvoice(invoice);
    }
  }, [orderId]);

  useEffect(() => {
    if (currentInvoice) dispatch(getOrders({ orders: currentInvoice.orders }));
  }, [currentInvoice]);

  useEffect(() => {
    if (Array.isArray(orders)) {
      trackEvent(SA_ORDERS_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment], {
        storeID: currentShop?.Id,
        storeName: currentShop?.Name,
        storePhone: currentShop?.CompanyPhoneNumber,
        invoiceID: currentInvoice?.id,
        invoiceDate: currentInvoice?.invoiceDate,
        invoiceTotal: totalPayToNeta,
        invoiceQtyOrders: orders.length,
      });
    }
  }, [orders]);

  return isLoadingOrders || !currentInvoice ? (
    <Center h="100%" w="100%" position="fixed">
      <Loader />
    </Center>
  ) : (
    <Container
      centerContent={false}
      maxW="container.lg"
      boxShadow="md"
      p="6"
      rounded="md"
      bg="white"
    >
      <BackToHome homeRoute={"/invoices"} title="Inicio" color="#3870FF" />
      <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
        Hola, {currentShop?.CompanyName}!
      </Text>
      <SplitCard
        firstTitle="Total vendido: "
        firstSubtitle={formatMoney(currentInvoice.subTotal, CURRENCY_NAME)}
        secondTitle="Total órdenes: "
        secondSubtitle={currentInvoice.orders.split(",").length}
        thirdTitle="Total a pagar a Neta: "
        thirdSubtitle={formatMoney(totalPayToNeta || 0, CURRENCY_NAME)}
        firstIcon={<IconBasket boxSize={[8, 9, 10, 12]} />}
        secondIcon={<IconOrder boxSize={[8, 9, 10, 12]} />}
        thirdIcon={<IconNeta boxSize={[8, 9, 10, 12]} />}
      />
      <Text fontSize={{ base: "17px", md: "18px", lg: "20px" }}>
        Este es el detalle de tus órdenes del día{" "}
        <b>{currentInvoice && convertDateToLocaleString(currentInvoice.invoiceDate)}</b>
      </Text>
      {orders && orders.map((order: IOrderShops) => <Order {...order} key={order.orderId} />)}
    </Container>
  );
};
