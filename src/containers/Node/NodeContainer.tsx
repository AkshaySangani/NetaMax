import React, { useEffect, useState, ReactElement } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { Loader } from "components/common/Loader";
import { ProductCard } from "components/common/ProductCard";
import { GridSection } from "components/common/Sections";
import { HeaderContainer } from "components/ProductDetails/ProductDetails.styled";
import { selectAllNodes, selectSelectedNode } from "dataflows/Node/NodeSelectors";
import { selectNode } from "dataflows/Node/NodeSlice";
import { getNodes } from "dataflows/Node/NodeThunks";
import { IProduct } from "dataflows/Product/IProduct";
import {
  selectIsLoadingNodeProducts,
  selectNodeProducts,
  selectNodeProductsPageMetadata,
} from "dataflows/Product/NodeProducts/NodeProductsSelector";
import { clearNodeProducts } from "dataflows/Product/NodeProducts/NodeProductsSlice";
import { getNodeProductsPage } from "dataflows/Product/NodeProducts/NodeProductsThunks";
import { selectProduct } from "dataflows/Product/SelectedProduct/SelectedProductSlice";
import { useBasket } from "hooks/basketHooks";
import { useRouter } from "next/router";

import { Center, Container } from "@chakra-ui/react";

import { INodeContainerProps } from "./INodeContainerProps";

/**
 * The NodeContainer component.
 * @param {INodeContainerProps} props the component props.
 * @returns {ReactElement} the component element.
 */
export const NodeContainer = (props: INodeContainerProps): ReactElement => {
  const { nodeId } = props;
  const node = useSelector(selectSelectedNode);
  const nodes = useSelector(selectAllNodes);
  const nodeProducts = useSelector(selectNodeProducts);
  const nodeProductsMetadata = useSelector(selectNodeProductsPageMetadata);
  const isLoading = useSelector(selectIsLoadingNodeProducts);

  const [showInitialLoader, setShowInitialLoader] = useState(true);

  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (nodeId) {
      dispatch(
        getNodeProductsPage({
          npp: nodeProductsMetadata.perPage,
          page: nodeProductsMetadata.currentPage,
          nodeId: nodeId,
        })
      );
    }
    if (!node) {
      dispatch(getNodes());
    }

    return () => {
      dispatch(clearNodeProducts());
    };
  }, [nodeId]);

  useEffect(() => {
    if (nodes && nodeId) {
      dispatch(selectNode(nodeId));
    }
  }, [nodes]);

  useEffect(() => {
    if (nodeProducts.length > 0) {
      setShowInitialLoader(false);
    }
  }, [nodeProducts]);

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
    if (nodeId) {
      dispatch(
        getNodeProductsPage({
          npp: nodeProductsMetadata.perPage,
          page: nodeProductsMetadata.currentPage + 1,
          nodeId: nodeId,
        })
      );
    }
  };

  /**
   * Render the promotion containers
   * @returns {ReactElement} Promotion container lists;
   */

  const productElements = nodeProducts.map((node, index) => {
    return (
      <ProductCard
        key={node.id}
        product={node}
        onProductClick={onProductClick}
        addToCart={(product) =>
          addToBasket(product, {
            position: index + 1,
            isNode: "Si",
          })
        }
        removeFromCart={removeFromBasket}
        qtyOnBasket={getQtyInBasket(node)}
      />
    );
  });

  const hasMore = nodeProductsMetadata.totalPages > nodeProductsMetadata.currentPage;

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
        <GridSection title={node?.name || ""} elements={productElements} />
      </InfiniteScroll>
    </Container>
  );
};
