import React, { ReactElement } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { DatePicker } from "components/common/DatePicker/DatePicker";
// import { Loader } from "components/common/Loader";
// import { MisVentas } from "components/Shops/MisVentas/MisVentas";
// import { ISummaryProps } from "components/Shops/Summary/ISummaryProps";
// import { SA_INVOICES_PAGE_SCROLLED, TrackerApp } from "constants/amplitudeConstants";
// import {
//   selectInvoices,
//   selectIsLoadingInvoices,
// } from "dataflows/Shops/Invoices/InvoicesSelectors";
// import { IOrderShops } from "dataflows/Shops/IOrderShops";
// import { selectShopUser } from "dataflows/Shops/Login/LoginSelectors";
// import {
//   selectIsLoadingSales,
//   selectOrders,
//   selectSummary,
// } from "dataflows/Shops/Sales/SalesSelector";
// import { getSales } from "dataflows/Shops/Sales/SalesThunk";
// import {
//   selectIsLoadingTracking,
//   selectLastTrackingUrl,
//   selectTrackingUrls,
// } from "dataflows/Shops/Tracking/TrackingSelectors";
// import { clearUrl } from "dataflows/Shops/Tracking/TrackingSlice";
// import { trackEvent } from "utils/tracker";

// import { Box, Center, Container, SimpleGrid, Text } from "@chakra-ui/layout";
// import { Flex } from "@chakra-ui/react";

/**
 * The User Shop's Invoices Container
 * @returns {ReactElement} The User's Invoices Container
 */
export const MisVentasContainer = (): ReactElement => {
  // const dispatch = useDispatch();
  // const orders = useSelector(selectOrders);
  // const summary = useSelector(selectSummary);
  // const isLoadingSales = useSelector(selectIsLoadingSales);
  // const invoices = useSelector(selectInvoices);
  // const shopUser = useSelector(selectShopUser);
  // const isLoadingInvoices = useSelector(selectIsLoadingInvoices);
  // const isLoadingTracking = useSelector(selectIsLoadingTracking);
  // const lastTrackingUrl = useSelector(selectLastTrackingUrl);
  // const trackingUrls = useSelector(selectTrackingUrls);
  // const currentShop = shopUser && shopUser[0];

  // const today = new Date();
  // const [scrollY, setScrollY] = useState(0);
  // const [isInvoicesScrolled, setIsInvoicesScrolled] = useState(false);
  // const [date, setDate] = useState(new Date());
  //TODO storeId: currentShop?.Id
  // useEffect(() => {
  //   dispatch(getSales({ storeId: "3211", date: new Date() }));
  //   dispatch(clearUrl());
  // }, []);

  // useEffect(() => {
  //   if (orders && orders.length > 0) {
  //     const { id, invoiceDate } = invoices[0] as IInvoice;
  //     trackEvent(SA_INVOICES_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment], {
  //       storeId: id,
  //     });
  //     dispatch(getLastTrackingUrl(`${invoiceDate}-${id}`));
  //     invoices.forEach((invoice: IInvoice) => {
  //       const trackingParams = {
  //         trackingId: `${invoice.invoiceDate}-${invoice.storeId}`,
  //         invoiceId: invoice.id,
  //       };
  //       dispatch(getTrackingUrl(trackingParams));
  //     });
  //   }
  // }, [invoices]);

  //TODO: Tracking user events shouldn't be so invasive in the code.

  // useEffect(() => {
  //   if (scrollY > 100 && !isInvoicesScrolled) {
  //     setIsInvoicesScrolled(true);
  //     trackEvent(SA_INVOICES_PAGE_SCROLLED, [TrackerApp.Amplitude, TrackerApp.Segment]);
  //   }
  // }, [scrollY]);

  // useEffect(() => {
  //   dispatch(getSales({ storeId: "3211", date }));
  // }, [date]);
  // /**
  //  * log the amount of vertical scroll
  //  * @return {void}
  //  */
  // function logit() {
  //   setScrollY(window.pageYOffset);
  // }

  // useEffect(() => {
  //   /**
  //    * Watch the native scroll event
  //    * @return {void}
  //    */
  //   function watchScroll() {
  //     window.addEventListener("scroll", logit);
  //   }
  //   watchScroll();
  //   return () => {
  //     window.removeEventListener("scroll", logit);
  //   };
  // });
  return (
    <></>
    //TODO: En Actualizar agregar refresh en funcion del getSales
    // return isLoadingSales ? (
    //   <Center h="100%" w="100%" position="fixed">
    //     <Loader />
    //   </Center>
    // ) : (
    //   <Container
    //     centerContent={false}
    //     maxW="container.lg"
    //     boxShadow="md"
    //     p="6"
    //     rounded="md"
    //     bg="white"
    //     marginTop={4}
    //   >
    //     <Flex direction={["column"]} w="100%">
    //       <Flex direction={["column"]} w="100%">
    //         <Text fontSize={{ base: "22px", md: "20px", lg: "20px" }} fontWeight="700" pb={4}>
    //           Mis ventas
    //         </Text>
    //         <Text fontSize={{ base: "15px", md: "18px", lg: "20px" }} fontWeight="400">
    //           Escoge la fecha de preferencia para tus ventas
    //         </Text>
    //       </Flex>
    //       <Flex justify={["flex-end", "flex-start"]} w="100%">
    //         <DatePicker onDateChange={setDate} currentDate={date} />
    //       </Flex>
    //     </Flex>
    //     <Flex direction="row" justifyContent="space-between" pt={4}>
    //       <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
    //         Resumen de ventas
    //       </Text>
    //       <Text ml="10px" color="#3871ff" fontSize="16px" fontWeight="500" cursor="pointer" pt={2}>
    //         Actualizar
    //       </Text>
    //     </Flex>
    //     <SimpleGrid columns={1} spacing={2} mt={["6", "5"]} mb={10}>
    //       {falseSummary && (
    //         <MisVentas summary={falseSummary} currentDate={date} orders={falseOrders} />
    //       )}
    //     </SimpleGrid>
    //   </Container>
  );
};
