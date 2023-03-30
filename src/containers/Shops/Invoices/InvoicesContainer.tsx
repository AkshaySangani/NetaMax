import React, { useEffect, useState, ReactElement, Fragment } from "react";

import { useDispatch, useSelector } from "react-redux";

import { DatePicker } from "components/common/DatePicker/DatePicker";
import { Loader } from "components/common/Loader";
import { MisVentas } from "components/Shops/MisVentas/MisVentas";
import { SHARE_URL } from "constants/shopsConstants";
import {
  SA_INVOICES_PAGE_SCROLLED,
  SA_DATE_SELECTED,
  SA_ACTUALIZAR_CLICKED,
  SA_VENTAS_PAGE_VIEWED,
  SA_ENDCLIENT_WA_CLICKED,
  SA_ORDER_DETAIL_VIEWED,
  SA_COMPARTIR_LIGA_CLICKED,
  SA_INVOICE_CLICKED,
  SA_TRACK_ORDER_CLICKED,
  TrackerApp,
} from "constants/amplitudeConstants";
import { selectShopUser } from "dataflows/Shops/Login/LoginSelectors";
import {
  selectIsLoadingSales,
  selectOrders,
  selectSummary,
} from "dataflows/Shops/Sales/SalesSelector";
import { getSales } from "dataflows/Shops/Sales/SalesThunk";
import { clearUrl } from "dataflows/Shops/Tracking/TrackingSlice";
import { trackEvent } from "utils/tracker";
import RefreshIcon from "../../../styled/icons/RefreshIcon";
import { IOrderShops } from "dataflows/Shops/IOrderShops";
import { selectModalInvoice } from "dataflows/Shops/ModalInvoice/ModalInvoiceSelectors";
import { Center, Container, SimpleGrid, Text } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/react";
import { splitHost } from "utils/stringUtils";

import { getModalInvoice } from "dataflows/Shops/ModalInvoice/ModalInvoiceThunks";

import { useDisclosure } from "@chakra-ui/react";

import { Toast } from "../../../components/common/Toast/Toast";
/**
 * The User Shop's Invoices Container
 * @returns {ReactElement} The User's Invoices Container
 */
export const InvoicesContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const modalInvoice = useSelector(selectModalInvoice);
  const summary = useSelector(selectSummary);
  const isLoadingSales = useSelector(selectIsLoadingSales);
  const shopUser = useSelector(selectShopUser);
  const currentShop = shopUser && shopUser[0];
  const url = `${SHARE_URL}${splitHost(currentShop?.Hosts || "")}`;

  const [isInvoicesScrolled, setIsInvoicesScrolled] = useState(false);
  const [date, setDate] = useState(new Date());
  const [scrollY, setScrollY] = useState(0);
  const [isData, setIsData] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (summary) dispatch(getModalInvoice({ invoiceId: summary?.invoiceId }));
  }, [summary]);

  useEffect(() => {
    trackEvent(SA_VENTAS_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storeId: currentShop?.Id,
      storePhone: currentShop?.CompanyPhoneNumber,
      storeName: currentShop?.Name,
    });
    dispatch(
      getSales({
        storeId: currentShop?.Id,
        date: new Date(),
      })
    );
    dispatch(clearUrl());
  }, []);

  useEffect(() => {
    if (scrollY > 100 && !isInvoicesScrolled) {
      setIsInvoicesScrolled(true);
      trackEvent(SA_INVOICES_PAGE_SCROLLED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [scrollY]);

  useEffect(() => {
    dispatch(getSales({ storeId: currentShop?.Id, date: date }));
    trackEvent(SA_DATE_SELECTED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      dateSelected: date,
    });
  }, [date]);
  /**
   * log the amount of vertical scroll
   * @return {void}
   */
  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    /**
     * Watch the native scroll event
     * @return {void}
     */
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  /**
   * Reload all dat
   * @type {Function}
   * @returns {void} Request.
   */
  function handleRefresh(): void {
    dispatch(getSales({ storeId: currentShop?.Id, date }));
    trackEvent(SA_ACTUALIZAR_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment]);
  }

  /**
   * Track order detail button clicked
   * @param {IOrderShops} order the order.
   * @returns {void}
   */
  const onOrderDetailsClick = (order: IOrderShops) => {
    trackEvent(SA_ORDER_DETAIL_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      orderId: order?.id,
    });
  };

  /**
   * Track order Contactar Cliente button clicked
   * @param {IOrderShops} order the order.
   * @returns {void}
   */
  const onContactarCliente = (order: IOrderShops) => {
    trackEvent(SA_ENDCLIENT_WA_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      clientName: order?.customerName,
      clientPhone: order?.phoneNumber,
      orderId: order?.id,
    });
  };

  /**
   * Track order Compartir Liga button clicked
   * @param {IOrderShops} order the order.
   * @returns {void}
   */
  const onClickCompartirLiga = () => {
    trackEvent(SA_COMPARTIR_LIGA_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {});
  };

  /**
   * Track order Factura button clicked
   * @param {ISummary} summary the order.
   * @returns {void}
   */
  const handleOnInvoiceClick = () => {
    if (modalInvoice.invoice.id) {
      onOpen();
    } else {
      setIsData(true);
    }
    trackEvent(SA_INVOICE_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      invoiceId: summary?.invoiceId,
    });
  };

  /**
   * Track order Rastrear button clicked
   * @param {ISummary} summary the order.
   * @returns {void}
   */
  const handleOnTrackClick = () => {
    trackEvent(SA_TRACK_ORDER_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      orderDate: summary?.dateFrom,
    });
  };

  return isLoadingSales ? (
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
      marginTop={4}
    >
      <Flex direction={["column"]} w="100%">
        <Flex direction={["column"]} w="100%">
          <Text fontSize={{ base: "22px", md: "20px", lg: "20px" }} fontWeight="700" pb={4}>
            Mis ventas
          </Text>
          <Text fontSize={{ base: "15px", md: "18px", lg: "20px" }} fontWeight="400">
            Selecciona una fecha para ver tus ventas
          </Text>
        </Flex>
        <Flex justify={["center", "flex-start"]} w="100%" mt="19px">
          <DatePicker onDateChange={setDate} currentDate={date} />
        </Flex>
      </Flex>
      <Flex direction="row" justifyContent="space-between" pt={[4]}>
        <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
          Resumen de ventas
        </Text>
        <Flex direction="row" align="center" justify="center" onClick={() => handleRefresh()}>
          <RefreshIcon />{" "}
          <Text
            ml="10px"
            color="#3871ff"
            fontSize="16px"
            fontWeight="500"
            cursor="pointer"
            textDecoration="underline"
          >
            Actualizar
          </Text>
        </Flex>
      </Flex>
      <SimpleGrid columns={1} spacing={0} mt={["0", "5"]} mb={10}>
        {summary && (
          <Fragment>
            <MisVentas
              modalInvoice={modalInvoice}
              onOpen={onOpen}
              onClose={onClose}
              isOpenModal={isOpen}
              summary={summary}
              orders={orders}
              shopUrl={url}
              shopName={currentShop?.Hosts}
              onOrderDetailsClick={(order) => onOrderDetailsClick(order)}
              onContactarCliente={(order) => onContactarCliente(order)}
              onClickCompartirLiga={() => onClickCompartirLiga()}
              handleOnInvoiceClick={handleOnInvoiceClick}
              handleOnTrackClick={() => handleOnTrackClick()}
            />
            {isData && <Toast message="Algo salió mal, intente nuevamente" backgroundColor="red" />}
          </Fragment>
        )}
      </SimpleGrid>
    </Container>
  );
};
