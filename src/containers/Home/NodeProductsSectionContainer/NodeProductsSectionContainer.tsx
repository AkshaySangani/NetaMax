import { useEffect, useState, ReactElement } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { ProductCard } from "components/common/ProductCard";
import { CarouselSection } from "components/common/Sections/CarouselSection/CarouselSection";
import {
  NODE_PRODUCT_SCROLLED,
  NODE_VER_TODOS_CLICKED,
  TrackerApp,
} from "constants/amplitudeConstants";
import {
  MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_DESKTOP,
  MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_MOBILE,
  MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
} from "constants/productConstants";
import { INode } from "dataflows/Node/INode";
import { selectAllNodes } from "dataflows/Node/NodeSelectors";
import { selectNode } from "dataflows/Node/NodeSlice";
import { IProduct } from "dataflows/Product/IProduct";
import { selectHomeNodeProducts } from "dataflows/Product/NodeProducts/NodeProductsSelector";
import { getHomeNodeProductsPage } from "dataflows/Product/NodeProducts/NodeProductsThunks";
import { useBasket } from "hooks/basketHooks";
import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";
import { trackEvent } from "utils/tracker";

import { Box, Center, Container } from "@chakra-ui/react";

import { INodeProductsSectionContainerProps } from "./INodeProductsSectionContainerProps";

/**
 * The node products section container.
 * @returns {ReactElement} The element.
 */
export const NodeProductsSectionContainer = ({
  onProductClick,
  setNodesAreDisplayed,
}: INodeProductsSectionContainerProps): ReactElement => {
  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();
  const dispatch = useDispatch();
  const router = useRouter();
  const nodes = useSelector(selectAllNodes);

  const homeNodeProducts = useSelector(selectHomeNodeProducts);
  const [displayedNodes, setDisplayedNodes] = useState<INode[]>(
    nodes.slice(0, Math.max(3, nodes.length))
  );

  useEffect(() => {
    displayedNodes.forEach((node) => {
      dispatch(getHomeNodeProductsPage({ nodeId: node.id, page: 1, npp: 20 }));
    });
  }, []);

  useEffect(() => {
    setNodesAreDisplayed(displayedNodes.length >= nodes.length);
  }, [displayedNodes]);

  const breakpoints = {
    [screenSizes.xs]: {
      slidesPerView: MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_MOBILE,
      spaceBetween: MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.sm]: {
      slidesPerView: MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_MOBILE,
      spaceBetween: MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
    },
    [screenSizes.md]: {
      slidesPerView: MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
    [screenSizes.lg]: {
      slidesPerView: MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_DESKTOP,
      spaceBetween: MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
    },
  };

  /**
   * Creates an array of product cards.
   * @param {IProduct[]} products The products.
   * @returns {ReactElement} Product cards.
   */
  const createProductCard = (products: IProduct[]): ReactElement[] => {
    return products.map((product, index) => (
      <ProductCard
        key={product.id}
        product={product}
        onProductClick={onProductClick}
        addToCart={(product) =>
          addToBasket(product, {
            position: index + 1,
            isHomeNode: "Si",
          })
        }
        removeFromCart={removeFromBasket}
        qtyOnBasket={getQtyInBasket(product)}
      />
    ));
  };

  /**
   * Action on node scroll.
   * @param {string} nodeId The node id.
   * @returns {void}
   */
  const onNodeProductSectionSlide = (nodeId: string): void => {
    trackEvent(NODE_PRODUCT_SCROLLED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      nodeId,
    });
  };

  /**
   * Action on node click.
   * @param {INode} node the node clicked.
   * @returns {void}
   */
  const onShowAllClick = (node: INode): void => {
    trackEvent(NODE_VER_TODOS_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      node: node.name,
    });
    dispatch(selectNode(node.id));
    router.push(`/nodes/${node.id}`);
  };

  /**
   * Loads the next page of node products.
   * @returns {void}
   */
  const loadNextPage = () => {
    const nextNodePageIndex = displayedNodes.length - 1;
    const nextNodes = nodes.slice(
      nextNodePageIndex + 1,
      Math.min(nextNodePageIndex + 3, nodes.length)
    );
    nextNodes.forEach((node) => {
      dispatch(getHomeNodeProductsPage({ nodeId: node.id, page: 1, npp: 20 }));
    });
    setDisplayedNodes([...displayedNodes, ...nextNodes]);
  };

  const hasMore = displayedNodes.length < nodes.length;

  return (
    <InfiniteScroll
      dataLength={displayedNodes.length}
      style={{ overflow: "hidden" }}
      next={loadNextPage}
      hasMore={hasMore}
      loader={
        <Center pt="30px">
          <Loader />
        </Center>
      }
    >
      {displayedNodes &&
        displayedNodes.flatMap((node) => {
          const sections: ReactElement[] = [];
          const products = homeNodeProducts[node.id]?.records;

          if (products && products.length > 0) {
            sections.push(
              <Box key={node.id} p="10px 0">
                <Container minW="100%">
                  <CarouselSection
                    title={node.name}
                    elements={createProductCard(products)}
                    breakpoints={breakpoints}
                    onClickSection={() => onShowAllClick(node)}
                    slidesPerGroup={1}
                    onSlideChange={() => onNodeProductSectionSlide(node.id)}
                  />
                </Container>
              </Box>
            );
          } else {
            return null;
          }

          return sections;
        })}
    </InfiniteScroll>
  );
};
