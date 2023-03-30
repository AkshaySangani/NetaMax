import { ReactElement } from "react";

import { OrderStatus } from "components/MisCompras/OrderStatus/OrderStatus";
import { CURRENCY_NAME, LANG_CODE } from "constants/localeFormatConstants";
import { HELP_LINK } from "constants/navBarConstants";
import { MAX_PRODUCT_IMAGES_IN_PRODUCT_CARD } from "constants/OrderConstants";
import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";
import { v4 as uuidv4 } from "uuid";

import {
  useMediaQuery,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";

import { IOrderCardProps } from "./IOrderCardProps";
import { ButtonsContainer, MisComprasContainer } from "./OrderCard.styled";
import { formatOrderDate } from "utils/dateUtils";

/**
 * The order card component.
 * @param {IOrderCardProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const OrderCard = (props: IOrderCardProps): ReactElement => {
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  const {
    storeName,
    date,
    totalAmount,
    productImages,
    totalProducts,
    orderStatusId,
    orderId,
    pickUpToken,
  } = props;
  const router = useRouter();

  return (
    <MisComprasContainer>
      <Flex
        flexDirection={isDesktop ? "row" : "column"}
        alignItems={isDesktop ? "center" : ""}
        justifyContent={isDesktop ? "center" : ""}
      >
        <Flex p="10px 20px" flexDirection="column" w={isDesktop ? "33%" : "100%"}>
          <Flex>
            <Text fontWeight="600" fontSize="16px">
              Tiendita:
            </Text>
            <Text ml="4px" fontWeight="400" fontSize="16px">
              {storeName}
            </Text>
          </Flex>

          <Flex>
            <Text fontWeight="600" fontSize="16px">
              Fecha de entrega:
            </Text>
            <Text ml="4px" fontWeight="400" fontSize="16px">
              {date && formatOrderDate(date)}
            </Text>
          </Flex>

          <Flex>
            <Text fontWeight="600" fontSize="16px">
              Total:
            </Text>
            <Text ml="4px" fontWeight="400" fontSize="16px">
              {formatMoney(Math.max(totalAmount, 0), CURRENCY_NAME)}
            </Text>
          </Flex>

          <Flex>
            <Text fontWeight="600" fontSize="16px">
              Código de entrega:
            </Text>
            <Text ml="4px" fontWeight="400" fontSize="16px">
              {pickUpToken}
            </Text>
          </Flex>
        </Flex>
        <Divider
          w={isDesktop ? "" : "90%"}
          h={isDesktop ? "30%" : ""}
          alignSelf="center"
          borderColor="netaGray.100"
          orientation={isDesktop ? "vertical" : "horizontal"}
        />

        <Flex
          justifyContent="center"
          flexDirection="column"
          w={isDesktop ? "33%" : "100%"}
          minH="100px"
        >
          <OrderStatus status={orderStatusId} />
        </Flex>

        <Divider
          w={isDesktop ? "" : "90%"}
          h={isDesktop ? "30%" : ""}
          alignSelf="center"
          borderColor="netaGray.100"
          orientation={isDesktop ? "vertical" : "horizontal"}
        />

        {orderStatusId !== "40" ? (
          <Flex p="10px 20px" flexDirection="column" w={isDesktop ? "33%" : "100%"}>
            <Box fontWeight="600" fontSize="16px">
              Tus productos:
            </Box>

            <Flex p="10px 0" justifyContent="space-around">
              {productImages &&
                productImages
                  .slice(0, Math.min(productImages.length, MAX_PRODUCT_IMAGES_IN_PRODUCT_CARD + 1))
                  .map((image) => (
                    <Center key={uuidv4()} w="55px" h="55px" bg="#E8E8E8" borderRadius="7px">
                      <Image
                        maxH="55px"
                        maxW="55px"
                        src={image}
                        fallbackSrc="/assets/images/noimg.png"
                        p="4px"
                      />
                    </Center>
                  ))}
              {totalProducts > MAX_PRODUCT_IMAGES_IN_PRODUCT_CARD && (
                <Center w="55px" h="55px" bg="#E8E8E8" borderRadius="7px">
                  <Text fontWeight="600" fontSize="16px">
                    +{totalProducts - MAX_PRODUCT_IMAGES_IN_PRODUCT_CARD}
                  </Text>
                </Center>
              )}
            </Flex>

            <Divider
              p="5px"
              w={isDesktop ? "" : "90%"}
              h={isDesktop ? "30%" : ""}
              alignSelf="center"
              borderColor="netaGray.100"
              orientation={isDesktop ? "vertical" : "horizontal"}
              display={isDesktop ? "none" : ""}
            />
          </Flex>
        ) : null}

        <ButtonsContainer>
          <Button
            color="#3870FF"
            fontSize="16px"
            variant="link"
            fontWeight="500"
            onClick={() => router.push(`mis-compras/${orderId}`)}
          >
            Ver detalle del pedido
          </Button>

          <Divider orientation="vertical" />
          <Link href={HELP_LINK} target="_blank">
            <Button color="#3870FF" fontSize="16px" variant="link" fontWeight="500">
              Ayuda
            </Button>
          </Link>
        </ButtonsContainer>
      </Flex>

      <Divider
        w={isDesktop ? "95%" : "0"}
        alignSelf="center"
        borderColor="netaGray.100"
        orientation="horizontal"
        display={isDesktop ? "" : "none"}
      />

      {isDesktop && (
        <Flex w="300px" h="50px" p="10px 20px" justifyContent="space-between">
          <Button
            color="#3870FF"
            fontSize="16px"
            variant="link"
            fontWeight="500"
            onClick={() => router.push(`mis-compras/${orderId}`)}
          >
            Ver detalle del pedido
          </Button>

          <Divider orientation="vertical" />
          <Link href={HELP_LINK} target="_blank">
            <Button color="#3870FF" fontSize="16px" variant="link" fontWeight="500">
              Ayuda
            </Button>
          </Link>
        </Flex>
      )}
    </MisComprasContainer>
  );
};
