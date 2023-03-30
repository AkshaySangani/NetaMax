import { ReactElement } from "react";

import { IOrderShops } from "dataflows/Shops/IOrderShops";

import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import { Order } from "../Order/Order";
import { Summary } from "../Summary/Summary";
import { SummaryEmpty } from "../Summary/SummaryEmpty";
import { IMisVentasProps } from "./IMisVentasProps";

/**
 * The MisVentas component.
 * @param {IMisVentasProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const MisVentas = (props: IMisVentasProps): ReactElement => {
  const {
    orders,
    summary,
    shopUrl,
    shopName,
    onOpen,
    onClose,
    isOpenModal,
    modalInvoice,
    onOrderDetailsClick,
    onContactarCliente,
    onClickCompartirLiga,
    handleOnInvoiceClick,
    handleOnTrackClick,
  } = props;
  const isOpen = "OPEN";
  const hasSummary = summary?.storeStatus === isOpen;
  const hasOrder = summary?.qtyOrders > 0;

  /**
   * Adds to choise Component.
   * @type {Function}
   * @returns {ReactElement} The component to show.
   */
  function setComponent(): ReactElement {
    switch (true) {
      case !hasSummary && hasOrder:
        return (
          <Summary
            {...summary}
            onOpen={onOpen}
            onClose={onClose}
            modalInvoice={modalInvoice}
            isOpenModal={isOpenModal}
            handleOnTrackClick={handleOnTrackClick}
            handleOnInvoiceClick={handleOnInvoiceClick}
          />
        );
      case !hasSummary && !hasOrder:
        return (
          <SummaryEmpty
            onClickCompartirLiga={onClickCompartirLiga}
            hasSummary={hasSummary}
            shopUrl={shopUrl}
            shopName={shopName}
            shortStoreName={undefined}
          />
        );
      case hasSummary && hasOrder:
        return (
          <Summary
            {...summary}
            modalInvoice={modalInvoice}
            onOpen={onOpen}
            onClose={onClose}
            isOpenModal={isOpenModal}
            handleOnTrackClick={handleOnTrackClick}
            handleOnInvoiceClick={handleOnInvoiceClick}
          />
        );
      case hasSummary && !hasOrder:
        return (
          <SummaryEmpty
            onClickCompartirLiga={onClickCompartirLiga}
            hasSummary={hasSummary}
            shopUrl={shopUrl}
            shopName={shopName}
            shortStoreName={undefined}
          />
        );
      default:
        return <></>;
    }
  }

  return (
    <Box>
      {setComponent()}
      {orders && orders.length > 0 && (
        <>
          <Box mt="8">
            <Text fontSize={{ base: "18px", md: "20px", lg: "20px" }} fontWeight="700">
              Lista de órdenes de tus clientes
            </Text>
          </Box>
          <SimpleGrid columns={1} spacing={2} mt={["6", "5"]} mb={10}>
            {orders.map((order: IOrderShops) => {
              return (
                <Order
                  {...order}
                  key={order.id}
                  onOrderDetailsClick={onOrderDetailsClick}
                  onContactarCliente={onContactarCliente}
                />
              );
            })}
          </SimpleGrid>
        </>
      )}
    </Box>
  );
};
