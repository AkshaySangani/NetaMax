import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { ProductCard } from "components/common/ProductCard";
import { CarouselSection } from "components/common/Sections/CarouselSection/CarouselSection";
import { PRODUCT_DETAIL_VIEWED, TrackerApp } from "constants/amplitudeConstants";
import { CATEGORIES_LEGAL_AGE_REQUIRED } from "constants/legalAgeConstants";
import {
  MAX_SUGGESTED_PRODUCTS_PER_SLIDE_DESKTOP,
  MAX_SUGGESTED_PRODUCTS_PER_SLIDE_MOBILE,
  PRODUCT_SUGGESTED_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  PRODUCT_SUGGESTED_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
  SUGGESTED_PRODUCTS_SECTION_TITLE,
} from "constants/productConstants";
import { selectIsUserUnderLegalAge } from "dataflows/LegalAge/ILegalAgeSelectors";
import {
  selectCategoryProducts,
  selectCategoryProductsPageMetadata,
} from "dataflows/Product/CategoryProducts/CategoryProductSelector";
import { clearCategoryProducts } from "dataflows/Product/CategoryProducts/CategoryProductsSlice";
import { getCategoryProductsPage } from "dataflows/Product/CategoryProducts/CategoryProductsThunk";
import { IProduct } from "dataflows/Product/IProduct";
import { selectRecommendedProducts } from "dataflows/Product/RecommendedProducts/RecommendedProductsSelector";
import { clearRecommendedProducts } from "dataflows/Product/RecommendedProducts/RecommendedProductsSlice";
import { getProductRecommendations } from "dataflows/Product/RecommendedProducts/RecommendedProductsThunk";
import {
  selectIsLoadingSelectedProduct,
  selectSelectedProduct,
} from "dataflows/Product/SelectedProduct/SelectedProductSelectors";
import { selectProduct } from "dataflows/Product/SelectedProduct/SelectedProductSlice";
import { getProductById } from "dataflows/Product/SelectedProduct/SelectedProductThunks";
import { useBasket } from "hooks/basketHooks";
import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";
import { trackEvent } from "utils/tracker";

import { Container } from "@chakra-ui/layout";
import { Box, Center } from "@chakra-ui/react";

import { IProductDetailsContainerProps } from "./IProductDetailsContainerProps";
import { GanaDineroBanner } from "components/GanaDinero/GanaDineroBanner";

/**
 * The product details container.
 * @param { IProductDetailsContainerProps } props The container props
 * @returns { ReactElement } The product details container.
 */
export const ProductDetailsContainer = (props: IProductDetailsContainerProps): ReactElement => {
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedProduct);
  const isLoading = useSelector(selectIsLoadingSelectedProduct);
  const categoryProducts = useSelector(selectCategoryProducts);
  const categoryProductsMetadata = useSelector(selectCategoryProductsPageMetadata);
  const recommendedProducts = useSelector(selectRecommendedProducts);
  const isUserUnderLegalAge = useSelector(selectIsUserUnderLegalAge);
  const { addToBasket, getQtyInBasket, removeFromBasket } = useBasket();
  const [isEventTracked, setIsEventTracked] = React.useState(false);
  const router = useRouter();

  useEffect(() => {
    dispatch(clearRecommendedProducts());
    dispatch(clearCategoryProducts());
  }, []);

  useEffect(() => {
    if (props.productId !== undefined && props.productId !== "") {
      dispatch(getProductById(props.productId));
      dispatch(getProductRecommendations(props.productId));
    }
  }, [props.productId]);

  useEffect(() => {
    if (product) {
      if (isUserUnderLegalAge && CATEGORIES_LEGAL_AGE_REQUIRED.includes(product.categoryId)) {
        router.push("/");
      }

      if (recommendedProducts.length === 0) {
        dispatch(
          getCategoryProductsPage({
            npp: categoryProductsMetadata.perPage,
            page: categoryProductsMetadata.currentPage,
            categoryId: product.categoryId,
          })
        );
      }

      if (!isEventTracked) {
        trackEvent(PRODUCT_DETAIL_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment], {
          productName: product.name,
          productSKU: product.sku,
          productPrice: product.price,
          category: product.categoryId,
          categoryId: product.categoryId,
        });
        setIsEventTracked(true);
      }
    }
  }, [product]);

  const breakpoints = {
    [screenSizes.xs]: {
      slidesPerView: MAX_SUGGESTED_PRODUCTS_PER_SLIDE_MOBILE,
      spaceBetween: PRODUCT_SUGGESTED_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.md]: {
      slidesPerView: MAX_SUGGESTED_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: PRODUCT_SUGGESTED_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
    [screenSizes.lg]: {
      slidesPerView: MAX_SUGGESTED_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: PRODUCT_SUGGESTED_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
  };

  /**
   * Action on product click.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const onSuggestedProductClick = (product: IProduct): void => {
    dispatch(selectProduct(product));
    router.push(`${product.id}`);
  };

  /**
   * Function to get the rendered products on Carrousel
   * @returns {ReactElement[]} ProductCard elements to render in the carrousel
   */
  const getProductElements = (): ReactElement[] => {
    let products: IProduct[] = [];
    if (recommendedProducts.length > 0) {
      products = recommendedProducts.filter((product) => product !== null);
    } else if (categoryProducts.length > 0) {
      products = categoryProducts;
    }
    return products
      .filter((product) => product.id !== props.productId)
      .map((product, index) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onSuggestedProductClick}
            addToCart={(product) =>
              addToBasket(product, {
                position: index + 1,
                isRecommendedDetailPage: "Si",
              })
            }
            removeFromCart={removeFromBasket}
            qtyOnBasket={getQtyInBasket(product)}
          />
        );
      });
  };

  return product === undefined || isLoading ? (
    <Center h="100%" w="100%" position="fixed">
      <Loader />
    </Center>
  ) : (
    <>
      <GanaDineroBanner />
      <Container maxW="container.xl">
        <ProductCard
          productDetail
          product={product}
          onProductClick={onSuggestedProductClick}
          addToCart={(product) =>
            addToBasket(product, {
              isInDetailPage: "Si",
            })
          }
          removeFromCart={removeFromBasket}
          qtyOnBasket={getQtyInBasket(product)}
        />

        <Box p="20px 0">
          <CarouselSection
            title={SUGGESTED_PRODUCTS_SECTION_TITLE}
            elements={getProductElements()}
            breakpoints={breakpoints}
            slidesPerGroup={1}
          />
        </Box>
      </Container>
    </>
  );
};
