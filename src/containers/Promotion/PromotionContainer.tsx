import React, { useEffect, useState, ReactElement } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { Loader } from "components/common/Loader";
import { ProductCard } from "components/common/ProductCard";
import { GridSection } from "components/common/Sections";
import { HeaderContainer } from "components/ProductDetails/ProductDetails.styled";
import { PROMOTIONS_LEGAL_AGE_REQUIRED } from "constants/promotionConstants";
import { selectIsUserUnderLegalAge } from "dataflows/LegalAge/ILegalAgeSelectors";
import { IProduct } from "dataflows/Product/IProduct";
import {
  selectIsLoadingPromotionProducts,
  selectPromotionProducts,
  selectPromotionProductsPageMetadata,
} from "dataflows/Product/PromotionProducts/PromotionProductsSelector";
import { clearPromotionProducts } from "dataflows/Product/PromotionProducts/PromotionProductsSlice";
import { getPromotionProductsPage } from "dataflows/Product/PromotionProducts/PromotionProductsThunks";
import { selectProduct } from "dataflows/Product/SelectedProduct/SelectedProductSlice";
import {
  selectAllPromotions,
  selectSelectedPromotion,
} from "dataflows/Promotion/PromotionSelectors";
import { selectPromotion } from "dataflows/Promotion/PromotionSlice";
import { getPromotions } from "dataflows/Promotion/PromotionThunks";
import { useBasket } from "hooks/basketHooks";
import { useRouter } from "next/router";

import { Box, Center, Container, Flex, Image, Link, Text } from "@chakra-ui/react";

import { IPromotionContainerProps } from "./IPromotionContainerProps";
import { CustomText, CustomTextLink } from "./PromotionContainer.styled";

/**
 * The PromotionContainer component.
 * @param {IPromotionContainerProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const PromotionContainer = (props: IPromotionContainerProps): ReactElement => {
  const { promotionId } = props;
  const promotion = useSelector(selectSelectedPromotion);
  const promotions = useSelector(selectAllPromotions);
  const promotionProducts = useSelector(selectPromotionProducts);
  const promotionProductsMetadata = useSelector(selectPromotionProductsPageMetadata);
  const isLoading = useSelector(selectIsLoadingPromotionProducts);
  const isUserUnderLegalAge = useSelector(selectIsUserUnderLegalAge);
  const aurreraBannerId = "46";

  const [showInitialLoader, setShowInitialLoader] = useState(true);

  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (promotionId) {
      if (isUserUnderLegalAge && PROMOTIONS_LEGAL_AGE_REQUIRED.includes(promotionId)) {
        router.push("/");
      }

      dispatch(
        getPromotionProductsPage({
          npp: promotionProductsMetadata.perPage,
          page: promotionProductsMetadata.currentPage,
          promotionId: promotionId,
        })
      );
    }
    if (!promotion) {
      dispatch(getPromotions());
    }

    return () => {
      dispatch(clearPromotionProducts());
    };
  }, [promotionId]);

  useEffect(() => {
    if (promotions && promotionId) {
      dispatch(selectPromotion(promotionId));
    }
  }, [promotions]);

  useEffect(() => {
    if (promotionProducts.length > 0) {
      setShowInitialLoader(false);
    }
  }, [promotionProducts]);

  /**
   * Action on product click.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const onProductClick = (product: IProduct): void => {
    dispatch(selectProduct(product));
    router.push(`/products/${product.id}`);
  };

  /**
   * Action to fetch more products.
   * @returns {void}
   */
  const fetchMoreData = () => {
    if (promotionId) {
      dispatch(
        getPromotionProductsPage({
          npp: promotionProductsMetadata.perPage,
          page: promotionProductsMetadata.currentPage + 1,
          promotionId: promotionId,
        })
      );
    }
  };

  /**
   * Render Aurrera Banner component.
   * @returns {ReactElement} Aurrera Banner
   */
  const renderAurreraBanner = (): ReactElement => {
    return (
      <Box p="40px 20px">
        <Container maxW="container.xl">
          <HeaderContainer>
            <BackToHome size={20} weight={700} />
          </HeaderContainer>
        </Container>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <Image src={promotion?.seoFilename} alt={promotion?.name} borderRadius="8px" />
          <Flex flexDirection="column" alignItems="center" justifyContent="center" pt="20px">
            <CustomText>Encontraste un producto mas barato en Bodega Aurrerá?</CustomText>
            <CustomTextLink color="#169179" fontSize="26px">
              <Link
                color="#169179"
                href={"https://wa.me/525545439866"}
                target="_blank"
                rel="noopener"
              >
                Haz click aquí
              </Link>
            </CustomTextLink>
            <Box>
              <Text color="#000000" fontSize="10px">
                Aplican términos y condiciones
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Box>
    );
  };

  /**
   * Render the promotion containers
   * @returns {ReactElement} Promotion container lists;
   */
  const renderPromotionContainer = (): ReactElement => {
    const productElements = promotionProducts.map((promotion, index) => {
      return (
        <ProductCard
          key={promotion.id}
          product={promotion}
          onProductClick={onProductClick}
          addToCart={(product) =>
            addToBasket(product, {
              position: index + 1,
              isBanner: "Si",
            })
          }
          removeFromCart={removeFromBasket}
          qtyOnBasket={getQtyInBasket(promotion)}
        />
      );
    });

    const hasMore = promotionProductsMetadata.totalPages > promotionProductsMetadata.currentPage;

    return isLoading && showInitialLoader ? (
      <Center h="100%" w="100%" position="fixed">
        <Loader />
      </Center>
    ) : (
      <Container maxW="container.xl">
        <HeaderContainer>
          <BackToHome size={18} weight={700} />
        </HeaderContainer>
        <InfiniteScroll
          dataLength={productElements.length}
          style={{ overflow: "hidden" }}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            <Center pt="30px">
              <Loader />
            </Center>
          }
        >
          <GridSection title={promotion?.name || ""} elements={productElements} />
        </InfiniteScroll>
      </Container>
    );
  };

  if (promotion && promotion.id === aurreraBannerId) {
    return renderAurreraBanner();
  } else {
    return renderPromotionContainer();
  }
};
