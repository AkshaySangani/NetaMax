import React, { useEffect, ReactElement } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { Loader } from "components/common/Loader";
import { ProductCard } from "components/common/ProductCard";
import { GridSection } from "components/common/Sections";
import { HeaderContainer } from "components/ProductDetails/ProductDetails.styled";
import { IProduct } from "dataflows/Product/IProduct";
import {
  selectSearchMetadata,
  selectSearchProducts,
} from "dataflows/Product/Search/SearchSelectors";
import { clearSearchProducts } from "dataflows/Product/Search/SearchSlice";
import { getSearchProducts } from "dataflows/Product/Search/SearchThunks";
import { selectProduct } from "dataflows/Product/SelectedProduct/SelectedProductSlice";
import { useBasket } from "hooks/basketHooks";
import router from "next/router";

import { Center, Container } from "@chakra-ui/react";

import { ISearchContainerProps } from "./SearchContainterProps";

/**
 * The SearchContainer component.
 * @param {ISearchContainerProps} props props
 * @returns {ReactElement} the component element.
 */
export const SearchContainer = ({ search }: ISearchContainerProps): ReactElement => {
  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();
  const dispatch = useDispatch();

  const productsSearched = useSelector(selectSearchProducts);
  const productSearchedMetadata = useSelector(selectSearchMetadata);
  const perPage = 20;

  const title = `Resultados de "${search}"`;

  const hasMore = Boolean(productSearchedMetadata.totalPages > productSearchedMetadata.currentPage);

  useEffect(() => {
    if (search) {
      dispatch(getSearchProducts({ nameProduct: search, perPage, currentPage: 1 }));
    }
    return () => {
      dispatch(clearSearchProducts());
    };
  }, [search]);

  /**
   * Action to load the next page of searched products..
   * @returns {void}
   */
  const loadNextProductsSearched = (): void => {
    if (search) {
      dispatch(
        getSearchProducts({
          nameProduct: search,
          perPage,
          currentPage: productSearchedMetadata.currentPage + 1,
        })
      );
    }
  };

  /**
   * Action on product click.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const onProductClick = (product: IProduct): void => {
    dispatch(selectProduct(product));
    router.push(`products/${product.id}`);
  };

  const productElements = Array.isArray(productsSearched)
    ? productsSearched.map((product, index) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            onProductClick={onProductClick}
            addToCart={() =>
              addToBasket(product, {
                position: index + 1,
                isInSearchDetailPage: "Si",
              })
            }
            removeFromCart={removeFromBasket}
            qtyOnBasket={getQtyInBasket(product)}
          />
        );
      })
    : [];

  return (
    <>
      <Container maxW="container.xl">
        <HeaderContainer>
          <BackToHome size={18} weight={700} />
        </HeaderContainer>
      </Container>
      <InfiniteScroll
        dataLength={productElements.length}
        style={{ overflow: "hidden" }}
        next={loadNextProductsSearched}
        hasMore={hasMore}
        loader={
          <Center pt="30px">
            <Loader />
          </Center>
        }
      >
        <GridSection title={title} elements={productElements} />
      </InfiniteScroll>
    </>
  );
};
