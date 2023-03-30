/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { ReactElement } from "react";

import { OrderReviewModal } from "components/common/OrderReviewModal/OrderReviewModal";
import {
  TrackerApp,
  TAB_MISCOMPRAS_VER_DETALLE_PEDIDO_VER_MAS,
  TAB_MISCOMPRAS_VER_DETALLE_PEDIDO_WHATSAPP_TIEND,
} from "constants/amplitudeConstants";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import { MisComprasStatus } from "constants/misComprasConstants";
import IconStoreDefault from "styled/icons/CheckoutFlow/StoreDefault";
import IconCoin from "styled/icons/Coin";
import WhatsappIcon from "styled/icons/WhatsappIcon";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";
import { trackEvent } from "utils/tracker";

import {
  useDisclosure,
  useMediaQuery,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { IMisComprasDetailProps } from "./IMisComprasDetailProps";
import {
  CardContainer,
  DetailContainer,
  MisComprasDetailContainer,
  TotalPriceContainer,
} from "./MisComprasDetail.styled";
import { formatOrderDate } from "utils/dateUtils";

/**
 * The MisCompras component.
 * @param {IMisComprasDetailProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const MisComprasDetail = (props: IMisComprasDetailProps): ReactElement => {
  const {
    order: {
      orderTotal,
      orderSubtotalInclTax,
      orderDiscount,
      id,
      productsOrder,
      companyAddress,
      name,
      currentETA,
      companyPhoneNumber,
      orderStatusId,
    },
  } = props;

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  const storeUrl = `https://api.whatsapp.com/send?phone=52${companyPhoneNumber}&text=¡Hola!%20Tengo%20una%20consulta,%20mi%20numero%20de%20orden%20es:%20${id}`;
  const date = new Date(currentETA);

  /**
   * Order view
   * @returns {ReactElement} order list
   * @param {any} order item
   */
  const OrderDetailView = (): ReactElement => {
    return (
      <MisComprasDetailContainer>
        <DetailContainer>
          <Box>
            <Text fontWeight="700" fontSize="24px" margin={isDesktop ? "14px 0" : "8px"}>
              Detalle del pedido
            </Text>
          </Box>
          <Flex alignItems="center">
            <IconStoreDefault />
            <Box ml="10px" display={isDesktop ? "flex" : ""} alignItems={isDesktop ? "center" : ""}>
              {orderStatusId! <= MisComprasStatus.PROCESSING && (
                <Text>Tu pedido se entregará en:</Text>
              )}
              {orderStatusId! === MisComprasStatus.COMPLETE && (
                <Text>Tu pedido se entregó en:</Text>
              )}
              {orderStatusId! === MisComprasStatus.CANCELLED && (
                <Text color="red.500">Tu pedido fue cancelado</Text>
              )}
              {orderStatusId! === MisComprasStatus.REPROGRAMMED && (
                <Text color="red.500">Tu pedido fue reprogramado</Text>
              )}
              <Text fontWeight="700" fontSize="22px" ml={isDesktop ? "4px" : ""}>
                {name}
              </Text>
            </Box>
          </Flex>

          <CardContainer>
            <Text fontWeight="700" fontSize="18px">
              Direccion de la tiendita:
            </Text>
            <Text>{companyAddress}</Text>
          </CardContainer>

          <CardContainer>
            <Flex alignItems="center" flexWrap="wrap">
              <Box>
                <Text fontWeight="700" fontSize="18px">
                  Productos:
                </Text>
                {productsOrder && productsOrder.length > 0 && (
                  <Text>{productsOrder.length} productos</Text>
                )}
              </Box>
              {productsOrder &&
                productsOrder.slice(0, 2).map((item) => (
                  <Flex key={item.id} p="5px 0" ml="10px">
                    <Center w="55px" h="55px" bg="#E8E8E8" borderRadius="7px">
                      <Image
                        src={item.seoFilename}
                        alt={item.name}
                        w="80%"
                        fallbackSrc="/assets/images/noimg.png"
                      />
                    </Center>
                  </Flex>
                ))}

              <Box ml="10px">
                <Button
                  h="30px"
                  w="71px"
                  borderRadius="29px"
                  colorScheme="netaBlue"
                  onClick={() => {
                    trackEvent(TAB_MISCOMPRAS_VER_DETALLE_PEDIDO_VER_MAS, [
                      TrackerApp.Amplitude,
                      TrackerApp.Segment,
                    ]);
                    onOpen();
                  }}
                >
                  Ver más
                </Button>

                <OrderReviewModal
                  orderSubtotalInclTax={orderSubtotalInclTax}
                  productsOrder={productsOrder}
                  isOpen={isOpen}
                  onClose={onClose}
                />
              </Box>
            </Flex>
          </CardContainer>

          {orderStatusId! < MisComprasStatus.CANCELLED && (
            <CardContainer>
              <Text fontWeight="700" fontSize="18px">
                Fecha de entrega:
              </Text>
              <Text>{date && formatOrderDate(date)}</Text>
            </CardContainer>
          )}

          <CardContainer>
            <Text fontWeight="700" fontSize="18px">
              Método de pago:
            </Text>
            <Text>Efectivo</Text>
          </CardContainer>

          {id && (
            <CardContainer>
              <Text fontWeight="700" fontSize="18px">
                Número de orden:
              </Text>
              <Text>{id}</Text>
            </CardContainer>
          )}
        </DetailContainer>

        <TotalPriceContainer>
          <CardContainer>
            <Text fontWeight="700" fontSize="18px">
              Resumen de compra:
            </Text>
            <Box display="flex" justifyContent="space-between" margin="8px 16px">
              <Text>Sub-Total</Text>
              {orderSubtotalInclTax ? (
                <Text>{formatMoney(orderSubtotalInclTax, CURRENCY_NAME)} </Text>
              ) : (
                "$0"
              )}
            </Box>
            {orderDiscount > 0 && (
              <Box
                display="flex"
                justifyContent="space-between"
                margin="8px 16px"
                color="#E09304"
                fontWeight="bold"
              >
                <Box display="flex" alignItems="center">
                  <Text mr="4px">Descuentos</Text>
                  <IconCoin />
                </Box>
                <Text>-{formatMoney(orderDiscount, CURRENCY_NAME)}</Text>
              </Box>
            )}
            <Box
              display="flex"
              justifyContent="space-between"
              margin="8px 16px"
              fontWeight="bold"
              color="#009688"
            >
              <Text>Costo de envío</Text>
              <Text>GRATIS</Text>
            </Box>
            <Box display="flex" justifyContent="space-between" margin="16px" fontWeight="bold">
              <Text>Total</Text>
              {orderTotal ? (
                <Text>{formatMoney(Math.max(orderTotal, 0), CURRENCY_NAME)}</Text>
              ) : (
                "$0"
              )}
            </Box>
          </CardContainer>

          <Link
            href={storeUrl}
            target="_blank"
            onClick={() => {
              trackEvent(TAB_MISCOMPRAS_VER_DETALLE_PEDIDO_WHATSAPP_TIEND, [
                TrackerApp.Amplitude,
                TrackerApp.Segment,
              ]);
            }}
          >
            <Flex
              m="10px 0 20px 0"
              alignItems="center"
              justifyContent="center"
              bg="#46972C"
              borderRadius="16px"
              h="56px"
            >
              <WhatsappIcon />
              <Box ml="10px">
                <Text fontWeight="700" fontSize="18px" color="white">
                  Contacta a la tiendita
                </Text>
              </Box>
            </Flex>
          </Link>
        </TotalPriceContainer>
      </MisComprasDetailContainer>
    );
  };

  return OrderDetailView();
};
