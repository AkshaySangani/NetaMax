import React, { ReactElement } from "react";

import { IncrementalBasketButton } from "components/common/IncrementalBasketButton/IncrementalBasketButton";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import IconEmptyBasket from "styled/icons/EmptyBasket";
import { formatMoney } from "utils/currencyUtils";
import { deliveryDate } from "utils/deliveryTime";
import { productMaxQuantity } from "utils/productUtils";

import { Box, Divider, Flex, HStack, Img, Stack, Text } from "@chakra-ui/react";

import { IBasketItemsProps } from "./IBasketItemsProps";

/**
 * The basket item component
 * @param {IBasketItemsProps} props the component props.
 * @returns {ReactElement} the react element to render.
 */
export const BasketItems = (props: IBasketItemsProps): ReactElement => {
  const { basketItems, onAddToBasket, onRemoveFromBasket } = props;

  /**
   * Is empty basket component
   * @returns {ReactElement} empty basket item
   */
  const isEmptyBasket = (): ReactElement => (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Box>
        <Flex justifyContent="center" marginTop="58px">
          <IconEmptyBasket />
        </Flex>
        <Box display="flex" textAlign="center" flexDirection="column" marginTop="21px">
          <Text fontSize="18px" fontWeight="600">
            El carrito de compras está vacío
          </Text>
          <Text marginTop="26px">
            Agrega tu primer producto y disfruta del supermercado del ahorro
          </Text>
        </Box>
      </Box>
    </Box>
  );

  /**
   * Is basket items
   * @returns {ReactElement} basket items
   */
  const isBasketItems = () =>
    basketItems.map((item, index) => (
      <Box key={item.id}>
        <Stack marginBottom="12px" alignItems="center" direction="row">
          <Box display="flex" alignItems="center" justifyContent="center" w="20%">
            <Img
              rounded="lg"
              fit="cover"
              height="45px"
              src={item.pictureUrl}
              alt={item.name}
              draggable="false"
              loading="lazy"
            />
          </Box>
          <Box w="77%" pt="4">
            <Stack spacing="0.5">
              <Text isTruncated maxWidth="86%" fontWeight="medium" fontSize="16px">
                {item.name}
              </Text>

              <Flex>{deliveryDate(item.deliveryDateId, item.deliveryDateName)}</Flex>
              <HStack spacing="1" mt="3" justify="space-between">
                <Text fontWeight="500" fontSize="18px">
                  {formatMoney(item.price, CURRENCY_NAME)}
                </Text>
                <IncrementalBasketButton
                  data-testid="incremental-basket-button"
                  min={item.minQuantity}
                  max={productMaxQuantity(
                    item.manageInventoryMethodId,
                    item.stockQuantity,
                    item.maxQuantity
                  )}
                  defaultValue={item.quantity}
                  onAdd={() => onAddToBasket(item.id)}
                  onSubtract={() => onRemoveFromBasket(item.id)}
                  customWidth="133px"
                  customHeight="34px"
                  customBorderRadius="24px"
                />
              </HStack>
            </Stack>
          </Box>
        </Stack>
        {index === basketItems.length - 1 ? null : <Divider borderColor="netaGray.100" />}
      </Box>
    ));

  return (
    <>
      <Text paddingTop="15px" fontSize="2xl" fontWeight="600">
        Carrito de compras
      </Text>

      {basketItems.length === 0 ? isEmptyBasket() : isBasketItems()}
    </>
  );
};
