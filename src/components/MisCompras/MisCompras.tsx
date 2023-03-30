import { ReactElement } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import { EmbeddedVideo } from "components/common/EmbeddedVideoComponent/EmbeddedVideo";
import { Loader } from "components/common/Loader";
import { OrderCard } from "components/common/OrderCard";
import {
  TrackerApp,
  TAB_MISCOMPRAS_VIDEO_PlAYED,
  MIS_COMPRAS_NO_PURCHASES_BUTTON_CLICKED,
} from "constants/amplitudeConstants";
import router from "next/router";
import { trackEvent } from "utils/tracker";

import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

import { IMisComprasProps } from "./IMisComprasProps";

/**
 * The MisCompras component.
 * @param {IMisComprasProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const MisCompras = (props: IMisComprasProps): ReactElement => {
  const { orders, hasMoreOrders, loadNextPage } = props;
  const hasOrders = Array.isArray(orders) && orders.length > 0;

  return hasOrders ? (
    <>
      <InfiniteScroll
        dataLength={orders.length}
        style={{ overflow: "hidden" }}
        next={loadNextPage}
        hasMore={hasMoreOrders}
        loader={
          <Center pt="30px">
            <Loader />
          </Center>
        }
      >
        {orders.map((order) => {
          return (
            <OrderCard
              key={order.id}
              orderId={order.id}
              storeName={order.storeName}
              date={new Date(order.currentETA)}
              totalAmount={parseFloat(order.orderTotal)}
              productImages={order.productOrders.products.map((product) => product.seoFilename)}
              orderStatusId={order.orderStatusId}
              totalProducts={order.productOrders.total}
              pickUpToken={order.pickUpToken}
            />
          );
        })}
      </InfiniteScroll>
    </>
  ) : (
    <Box pt="30px">
      <Center height="100%" width="100%" padding="8" paddingTop="6" gap="10" flexDirection="column">
        <EmbeddedVideo
          videoUrlId="D-OJLyECbfo"
          onPlayVideoClick={() => {
            trackEvent(TAB_MISCOMPRAS_VIDEO_PlAYED, [TrackerApp.Amplitude, TrackerApp.Segment]);
          }}
        />

        <Heading data-testid="tutorial-message" fontWeight="800" fontSize="20px">
          No tienes compras aún :(
        </Heading>

        <Box mt="-20px" textAlign="center" width="80%">
          <Text lineHeight="20px" fontSize="20px" color="#4A4A4A">
            Te invitamos a conocer nuestros productos mas baratos que cualquier super
          </Text>
        </Box>
        <Button
          width="290px"
          height="56px"
          borderRadius="20px"
          colorScheme="netaBlue"
          fontSize="18px"
          onClick={() => {
            trackEvent(MIS_COMPRAS_NO_PURCHASES_BUTTON_CLICKED, [
              TrackerApp.Amplitude,
              TrackerApp.Segment,
            ]);

            router.push("/");
          }}
          data-testid="redirect-button"
        >
          Ir a comprar
        </Button>
      </Center>
    </Box>
  );
};
