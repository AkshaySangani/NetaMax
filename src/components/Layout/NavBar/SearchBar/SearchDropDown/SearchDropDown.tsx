import { ReactElement } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

import { IncrementalButton } from "components/common/IncrementalButton/IncrementalButton";
import { Loader } from "components/common/Loader";
import { CURRENCY_NAME } from "constants/localeFormatConstants";
import NextLink from "next/link";
import { screenSizes } from "styled/screen";
import { formatMoney } from "utils/currencyUtils";
import { productIsNotAvailable, productMaxQuantity } from "utils/productUtils";

import {
  useMediaQuery,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { ISearchDropDownProps } from "./ISearchDropDownProps";
import { StyledDropdown } from "./SearchDropDown.styled";

/**
 * The SearchDropDown Component.
 * @param {ISearchDropDownProps} props the component props.
 * @returns {ReactElement} the searchDropDown component.
 */
export const SearchDropDown = (props: ISearchDropDownProps): ReactElement => {
  const {
    value,
    products,
    isLoadingSearchProduct,
    onAddToBasketClick,
    getQtyInBasket,
    onRemoveFromBasketClick,
    clearSearchProducts,
    handleSearchProducts,
    hasMoreProducts,
    emptySearchMessage,
  } = props;

  const [isLargerThanSm] = useMediaQuery(`(min-width: ${screenSizes.smMin}px)`);

  if (!value || (value && value?.length <= 2)) {
    return <></>;
  }
  return isLoadingSearchProduct ? (
    <StyledDropdown $isLargerThanSm={isLargerThanSm}>
      <Center h="100%" w="100%">
        <Loader size="sm" /> Buscando...
      </Center>
    </StyledDropdown>
  ) : (
    <StyledDropdown $isLargerThanSm={isLargerThanSm}>
      {emptySearchMessage !== "" ? (
        <Center h="100%" w="100%">
          <Text>{emptySearchMessage} 😔</Text>
        </Center>
      ) : (
        <ul>
          {products &&
            products.map((product) => {
              const qty = getQtyInBasket(product);
              return (
                <li key={product.id}>
                  <Flex width="60%">
                    <NextLink href={`/products/${product.id}`} passHref>
                      <Link
                        onClick={clearSearchProducts}
                        _focus={{
                          boxShadow: "0 0 1px 2px transparent",
                        }}
                        textDecor="none"
                      >
                        <Flex
                          alignItems="center"
                          maxWidth={{ base: qty > 0 ? "200px" : "224px", md: "100%" }}
                        >
                          <Image
                            src={product.seoFilename}
                            height="45px"
                            w="45px"
                            minW={"45px"}
                            fallbackSrc="/assets/images/noimg.png"
                            borderRadius="8px"
                            boxShadow="0px 0px 9px rgb(18 17 17 / 15%)"
                            marginLeft="6px"
                            marginRight="10px"
                            padding="1px"
                          />
                          <Flex flexDir="column">
                            <Text
                              isTruncated
                              fontSize="sm"
                              color="#6A696E"
                              maxWidth={{
                                base: qty > 0 ? "180px" : "224px",
                                md: "300px",
                              }}
                            >
                              {product.name}
                            </Text>
                            <Flex>
                              <Text fontWeight={700}>
                                {formatMoney(parseFloat(product.price), CURRENCY_NAME)}{" "}
                              </Text>
                              {product.oldPrice > product.price && (
                                <Text pl={2} color="gray.500" fontSize="xs" as="del">
                                  {formatMoney(parseFloat(product.oldPrice), CURRENCY_NAME)}
                                </Text>
                              )}
                            </Flex>
                          </Flex>
                        </Flex>
                      </Link>
                    </NextLink>
                    <Box></Box>
                  </Flex>
                  <Spacer />
                  <Flex width={qty > 0 ? "35%" : "15%"} justifyContent="flex-end">
                    {qty > 0 ? (
                      <IncrementalButton
                        min={product.orderMinimumQuantity}
                        max={productMaxQuantity(
                          product.manageInventoryMethodId,
                          product.stockQuantity,
                          product.orderMaximumQuantity
                        )}
                        defaultValue={qty}
                        onAdd={() => onAddToBasketClick(product)}
                        onSubtract={() => onRemoveFromBasketClick(product)}
                      />
                    ) : (
                      <Button
                        data-testid={`add-button-${product.id}`}
                        disabled={productIsNotAvailable(
                          product.manageInventoryMethodId,
                          product.stockQuantity
                        )}
                        onClick={() => {
                          onAddToBasketClick(product);
                        }}
                        height={{ base: "30px", md: "30px" }}
                        width={{ base: "60px", md: "60px" }}
                        _hover={{ bgColor: "none" }}
                        _disabled={{ bgColor: "netaGray.300", cursor: "no-drop" }}
                        colorScheme="netaBlue"
                        borderRadius="full"
                        fontSize="0.8rem"
                      >
                        Añadir
                      </Button>
                    )}
                  </Flex>
                </li>
              );
            })}
          {hasMoreProducts && (
            <li style={{ backgroundColor: "#f3f3f3" }}>
              <Button
                data-testid="hasMoreProductsButton"
                borderRadius="full"
                color="netaBlue.500"
                bg="#E2E2E2"
                onClick={() => {
                  handleSearchProducts();
                }}
              >
                Ir a ver más resultados <AiOutlineArrowRight />
              </Button>
            </li>
          )}
        </ul>
      )}
    </StyledDropdown>
  );
};
