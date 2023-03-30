import React, { ReactElement } from "react";

import {
  BadgeContainer,
  ButtonContainer,
  HeaderContainer,
  ImageContainer,
  ProductContainer,
  ProductContent,
  ProductDetail,
  ProductDetailContainer,
  ProductDetailContent,
} from "components/ProductDetails/ProductDetails.styled";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import {
  ADD_TO_CART_BIG_BUTTON_TEXT,
  ADD_TO_CART_BUTTON_TEXT,
  ADD_TO_CART_BUTTON_TEXT_UNAVAILABLE,
  PRODUCT_DISCOUNT,
  PRODUCT_MEGA_PROMO,
  PRODUCT_UNAVAILABLE,
} from "constants/productConstants";
import DiscountBadge from "styled/icons/Product/DiscountBadge/DiscountBadge";
import MegaPromoBadge from "styled/icons/Product/MegaPromoBadge";
import { formatMoney } from "utils/currencyUtils";
import { deliveryDate } from "utils/deliveryTime";
import { productIsNotAvailable, productMaxQuantity } from "utils/productUtils";

import { Image } from "@chakra-ui/image";
import { Box, Button, Flex, Square, Text } from "@chakra-ui/react";

import { BackToHome } from "../BackHomeComponent/BackToHome";
import { IncrementalButton } from "../IncrementalButton/IncrementalButton";
import { IProductCardProps } from "./IProductCardProps";
import { ISkuStyles } from "./ISkuStyles";

/**
 * The ProductBox component.
 * @param {IProductCardProps} props the component props.
 * @returns {ReactElement} the ProductBox component.
 */
export const ProductCard = (props: IProductCardProps): ReactElement => {
  const { product, qtyOnBasket, addToCart, removeFromCart, onProductClick, productDetail } = props;

  const price = parseFloat(product.price);
  const oldPrice = parseFloat(product.oldPrice);

  const productDiscount = oldPrice - price;
  const productDiscountPercentage = Math.floor((productDiscount * 100) / oldPrice).toString();
  // const productSubtitle = productDiscount
  //   ? `${SALE_PRODUCT_SUBTITLE} ${formatMoney(productDiscount, CURRENCY_NAME)}`
  //   : "";
  const discountDifference = Number(product.oldPrice) > Number(product.price);

  // This is the default style for product card.
  let skuStyle: ISkuStyles = {
    cardBackground: "white",
    tag: {
      color: "white",
      width: productDetail ? "150px" : "96px",
      fontSize: productDetail ? "18px" : "12px",
    },
    cardButton:
      product.stockQuantity === 0
        ? {
            disabled: true,
            text: ADD_TO_CART_BUTTON_TEXT_UNAVAILABLE,
            colorScheme: "netaGray",
          }
        : {
            text: productDetail ? ADD_TO_CART_BIG_BUTTON_TEXT : ADD_TO_CART_BUTTON_TEXT,
            colorScheme: "netaBlue",
          },
  };

  switch (product.status) {
    case PRODUCT_MEGA_PROMO:
      skuStyle = {
        ...skuStyle,
        cardBackground: "#F5B754",
        badge: productDetail ? <MegaPromoBadge width="100%" height="100%" /> : <MegaPromoBadge />,
        tag: {
          ...skuStyle.tag,
          background: "#6C1D94",
          text: "MEGA PROMO",
        },
        showDiscount: true,
      };
      break;
    case PRODUCT_DISCOUNT:
      skuStyle = {
        ...skuStyle,
        badge:
          parseInt(productDiscountPercentage) > 2 &&
          (productDetail ? (
            <DiscountBadge
              discount={productDiscountPercentage}
              top="19px"
              left="16"
              fontSize="36px"
              BgHeight="100%"
              BgWidth="100%"
            />
          ) : (
            <DiscountBadge
              discount={productDiscountPercentage}
              top="8px"
              left="4.5"
              fontSize="16px"
            />
          )),
        tag: {
          ...skuStyle.tag,
          background: "#F04D4B",
          text: "NETAHORRO",
        },
        showDiscount: true,
      };
      break;
    case PRODUCT_UNAVAILABLE:
      skuStyle = {
        ...skuStyle,
        cardButton: {
          disabled: true,
          text: ADD_TO_CART_BUTTON_TEXT_UNAVAILABLE,
          colorScheme: "netaGray",
        },
        image: {
          filter: "grayscale(100%)",
        },
      };
      productDetail &&
        (skuStyle = {
          ...skuStyle,
          tag: {
            background: "#F8DEDE",
            text: "PRODUCTO NO DISPONIBLE POR EL MOMENTO",
            color: "#FF0000",
            width: "327px",
            fontSize: "14px",
          },
        });
      break;
  }
  // TODO: This file needs a deeper refactoring to not use the conditional rendering like this.

  return (
    <>
      {productDetail ? (
        <Box maxW="container.xl" data-testid="product-detail-container">
          <HeaderContainer>
            <BackToHome size={18} weight={700} />
          </HeaderContainer>
          <ProductDetailContainer>
            <ProductDetail>
              <ImageContainer>
                <Box
                  bg={skuStyle.cardBackground}
                  borderRadius="20px"
                  display="flex"
                  minWidth="100%"
                  justifyContent="center"
                >
                  <Box display="flex" justifyContent="center" data-testid="sku-badge-detail">
                    {skuStyle.badge && (
                      <Box>
                        <BadgeContainer>{skuStyle.badge}</BadgeContainer>
                      </Box>
                    )}
                    <Image
                      filter={skuStyle.image?.filter}
                      draggable="false"
                      src={Array.isArray(product.images) ? product.images[0] : ""}
                      fallbackSrc={"/assets/images/noimg.png"}
                    />
                  </Box>
                </Box>
              </ImageContainer>
              <ProductContainer>
                <ProductContent>
                  <Text fontSize="20px" fontWeight="600" color="#212121">
                    {product.name}
                  </Text>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    borderBottom="#F4F4F4 solid 2px"
                    p="8px 0"
                  >
                    <Box display="flex" alignItems="center">
                      <Text fontSize="24px" fontWeight="700">
                        {formatMoney(price, CURRENCY_NAME)}
                      </Text>
                      {discountDifference && skuStyle.showDiscount ? (
                        <Text
                          fontSize="18px"
                          fontWeight="400"
                          marginLeft="2"
                          color="#CCCCCC"
                          textDecoration="line-through"
                        >
                          {formatMoney(oldPrice, CURRENCY_NAME)}
                        </Text>
                      ) : null}
                    </Box>
                    {skuStyle.tag && (
                      <Box p="10px 0">
                        <Box
                          width={skuStyle.tag.width}
                          height="32px"
                          background={skuStyle.tag?.background}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          borderRadius="100px"
                        >
                          <Text
                            color={skuStyle.tag.color}
                            fontSize={skuStyle.tag.fontSize}
                            fontWeight="700"
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            marginTop="1px"
                            data-testid="product-tag-discount"
                          >
                            {skuStyle.tag?.text}
                          </Text>
                        </Box>
                      </Box>
                    )}
                    {productIsNotAvailable(
                      product.manageInventoryMethodId,
                      product.stockQuantity
                    ) ? null : (
                      <Box>
                        <Text
                          fontSize="18px"
                          fontWeight="500"
                          lineHeight="25px"
                          color="#333333"
                          paddingBottom="4px"
                        >
                          Envío gratis
                        </Text>
                        <Box>
                          {deliveryDate(
                            product.deliveryDateId,
                            product.deliveryDateName,
                            "16px",
                            "24",
                            "19"
                          )}
                        </Box>
                      </Box>
                    )}
                  </Box>

                  <ButtonContainer>
                    {qtyOnBasket && qtyOnBasket > 0 ? (
                      <IncrementalButton
                        min={product.orderMinimumQuantity}
                        max={productMaxQuantity(
                          product.manageInventoryMethodId,
                          product.stockQuantity,
                          product.orderMaximumQuantity
                        )}
                        defaultValue={qtyOnBasket}
                        onAdd={() => addToCart(product)}
                        onSubtract={() => removeFromCart(product)}
                        customWidth="328px"
                        customHeight="56px"
                        customBorderRadius="16px"
                      />
                    ) : (
                      <Button
                        disabled={productIsNotAvailable(
                          product.manageInventoryMethodId,
                          product.stockQuantity
                        )}
                        width="328px"
                        borderRadius="16px"
                        height="56px"
                        colorScheme="netaBlue"
                        _hover={{ bgColor: "none" }}
                        _disabled={{ bgColor: "netaGray.300", cursor: "no-drop" }}
                        fontSize="16px"
                        onClick={() => addToCart(product)}
                      >
                        {productIsNotAvailable(
                          product.manageInventoryMethodId,
                          product.stockQuantity
                        )
                          ? ADD_TO_CART_BUTTON_TEXT_UNAVAILABLE
                          : ADD_TO_CART_BIG_BUTTON_TEXT}
                      </Button>
                    )}
                  </ButtonContainer>
                </ProductContent>
              </ProductContainer>
            </ProductDetail>
            {product.fullDescription ? (
              <ProductDetailContent>
                <Text fontSize="18px" fontWeight="600" color="#212121" paddingBottom="8px">
                  Detalle del producto
                </Text>
                <Text fontSize="16px" fontWeight="300" color="#212121">
                  {product.fullDescription}
                </Text>
              </ProductDetailContent>
            ) : null}
          </ProductDetailContainer>
        </Box>
      ) : (
        <Box data-testid="product-container">
          <Box maxW="sm" height={{ base: "270px", md: "270px" }} overflow="hidden">
            <Square
              rounded="md"
              boxShadow="md"
              minW={{ base: 159, md: "160px" }}
              bg={skuStyle.cardBackground}
              borderWidth="1px"
              onClick={() => onProductClick(product)}
              position="relative"
              cursor="pointer"
              data-testid="product-button"
            >
              <Box>
                {skuStyle.badge && (
                  <Box position="absolute" top="10px" left="20px" data-testid="sku-badge">
                    {skuStyle.badge}
                  </Box>
                )}
                {skuStyle.tag && (
                  <Box
                    position="absolute"
                    width="96px"
                    height="20px"
                    background={skuStyle.tag.background}
                    top="140px"
                    left="10px"
                    borderRadius="100px"
                  >
                    <Text
                      color="white"
                      fontSize="12px"
                      fontWeight="700"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      marginTop="1px"
                      data-testid="product-tag"
                    >
                      {skuStyle.tag.text}
                    </Text>
                  </Box>
                )}
              </Box>
              <Image
                filter={skuStyle.image?.filter}
                src={product.seoFilename}
                draggable="false"
                alt={product.name}
                height="150px"
                fallbackSrc={"/assets/images/noimg.png"}
              />
            </Square>

            <Box pt="6">
              <Box mt="2">
                <Text fontSize={{ base: "xs", md: "xs" }} noOfLines={[2, 2]}>
                  {product.name}
                </Text>
              </Box>

              <Box display="flex" alignItems="center" data-testid="discount-box">
                <Text as="span" pr={2} fontWeight="semibold" fontSize="18px" lineHeight="tight">
                  {formatMoney(price, CURRENCY_NAME)}
                </Text>
                {discountDifference && skuStyle.showDiscount ? (
                  <Text as="s" fontSize="12px" textColor="#B3B9C2">
                    {formatMoney(oldPrice, CURRENCY_NAME)}
                  </Text>
                ) : null}
              </Box>

              {productIsNotAvailable(
                product.manageInventoryMethodId,
                product.stockQuantity
              ) ? null : (
                <Box>
                  {deliveryDate(
                    product.deliveryDateId,
                    product.deliveryDateName,
                    "12px",
                    "20",
                    "15"
                  )}
                </Box>
              )}
            </Box>
          </Box>
          <Flex>
            {qtyOnBasket && qtyOnBasket > 0 ? (
              <IncrementalButton
                min={product.orderMinimumQuantity}
                max={productMaxQuantity(
                  product.manageInventoryMethodId,
                  product.stockQuantity,
                  product.orderMaximumQuantity
                )}
                defaultValue={qtyOnBasket}
                onAdd={() => addToCart(product)}
                onSubtract={() => removeFromCart(product)}
                data-testid="incremental-button"
              />
            ) : (
              <Button
                disabled={productIsNotAvailable(
                  product.manageInventoryMethodId,
                  product.stockQuantity
                )}
                width="115px"
                height={{ base: "27px", md: "29px" }}
                colorScheme="netaBlue"
                borderRadius="full"
                fontSize="0.8rem"
                _disabled={{ bgColor: "netaGray.300", cursor: "no-drop" }}
                _hover={{ bgColor: "none" }}
                onClick={() => addToCart(product)}
                data-testid="add-to-card-button"
              >
                {productIsNotAvailable(product.manageInventoryMethodId, product.stockQuantity)
                  ? ADD_TO_CART_BUTTON_TEXT_UNAVAILABLE
                  : ADD_TO_CART_BUTTON_TEXT}
              </Button>
            )}
          </Flex>
        </Box>
      )}
    </>
  );
};
