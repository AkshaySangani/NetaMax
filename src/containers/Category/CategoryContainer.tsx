import React, { useEffect, ReactElement } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { Loader } from "components/common/Loader";
import { ProductCard } from "components/common/ProductCard";
import { GridSection } from "components/common/Sections";
import { GanaDineroBanner } from "components/GanaDinero/GanaDineroBanner";
import { HeaderContainer } from "components/ProductDetails/ProductDetails.styled";
import { CATEGORIES_LEGAL_AGE_REQUIRED } from "constants/legalAgeConstants";
import { selectAllCategories, selectSelectedCategory } from "dataflows/Category/CategorySelectors";
import { selectCategory } from "dataflows/Category/CategorySlice";
import { getCategories } from "dataflows/Category/CategoryThunks";
import { selectIsUserUnderLegalAge } from "dataflows/LegalAge/ILegalAgeSelectors";
import {
  selectCategoryProducts,
  selectCategoryProductsPageMetadata,
  selectIsLoadingCategoryProducts,
} from "dataflows/Product/CategoryProducts/CategoryProductSelector";
import { clearCategoryProducts } from "dataflows/Product/CategoryProducts/CategoryProductsSlice";
import { getCategoryProductsPage } from "dataflows/Product/CategoryProducts/CategoryProductsThunk";
import { IProduct } from "dataflows/Product/IProduct";
import { selectProduct } from "dataflows/Product/SelectedProduct/SelectedProductSlice";
import { useBasket } from "hooks/basketHooks";
import { useRouter } from "next/router";

import { Center, Container } from "@chakra-ui/react";

import { ICategoryContainerProps } from "./ICategoryContainerProps";

/**
 * The CategoryContainer component.
 * @param {ICategoryContainerProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const CategoryContainer = (props: ICategoryContainerProps): ReactElement => {
  const { categoryId } = props;
  const category = useSelector(selectSelectedCategory);
  const categories = useSelector(selectAllCategories);
  const categoryProducts = useSelector(selectCategoryProducts);
  const categoryProductsMetadata = useSelector(selectCategoryProductsPageMetadata);
  const isLoading = useSelector(selectIsLoadingCategoryProducts);
  const isUserUnderLegalAge = useSelector(selectIsUserUnderLegalAge);

  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (categoryId) {
      if (isUserUnderLegalAge && CATEGORIES_LEGAL_AGE_REQUIRED.includes(categoryId)) {
        router.push("/");
      }

      dispatch(
        getCategoryProductsPage({
          npp: categoryProductsMetadata.perPage,
          page: categoryProductsMetadata.currentPage,
          categoryId: categoryId,
        })
      );
    }

    dispatch(getCategories());

    return () => {
      dispatch(clearCategoryProducts());
    };
  }, [categoryId]);

  useEffect(() => {
    dispatch(clearCategoryProducts());
  }, []);

  useEffect(() => {
    if (categories && categoryId) {
      dispatch(selectCategory(categoryId));
    }
  }, [categories]);

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
    if (categoryId) {
      dispatch(
        getCategoryProductsPage({
          npp: categoryProductsMetadata.perPage,
          page: categoryProductsMetadata.currentPage + 1,
          categoryId: categoryId,
        })
      );
    }
  };

  const productElements = categoryProducts.map((product, index) => {
    return (
      <ProductCard
        key={product.id}
        product={product}
        onProductClick={onProductClick}
        addToCart={(product) => addToBasket(product, { position: index + 1, isCategory: "Si" })}
        removeFromCart={removeFromBasket}
        qtyOnBasket={getQtyInBasket(product)}
      />
    );
  });

  const hasMore = categoryProductsMetadata.totalPages > categoryProductsMetadata.currentPage;

  return isLoading && categoryProducts.length === 0 ? (
    <Center h="100%" w="100%" position="fixed">
      <Loader />
    </Center>
  ) : (
    <>
      <GanaDineroBanner />
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
          <GridSection title={category?.name || ""} elements={productElements} />
        </InfiniteScroll>
      </Container>
    </>
  );
};
