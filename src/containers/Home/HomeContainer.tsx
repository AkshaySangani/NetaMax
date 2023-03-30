import React, { useEffect, useState, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { GanaDineroBanner } from "components/GanaDinero/GanaDineroBanner";
import {
  selectAllCategories,
  selectIsLoading as selectIsLoadingCategorySection,
} from "dataflows/Category/CategorySelectors";
import { getCategories } from "dataflows/Category/CategoryThunks";
import { selectAllNodes, selectIsLoadingNodeSection } from "dataflows/Node/NodeSelectors";
import { getNodes } from "dataflows/Node/NodeThunks";
import { IProduct } from "dataflows/Product/IProduct";
import {
  selectIsLoadingMegaPromosSection,
  selectMegaPromosSectionPageMetadata,
  selectMegaPromosSectionProducts,
} from "dataflows/Product/MegaPromosSection/MegaPromosSectionSelector";
import { getMegaPromosSectionPage } from "dataflows/Product/MegaPromosSection/MegaPromosSectionThunks";
import { selectProduct } from "dataflows/Product/SelectedProduct/SelectedProductSlice";
import {
  selectAllPromotions,
  selectIsLoadingPromotionSection,
} from "dataflows/Promotion/PromotionSelectors";
import { getPromotions } from "dataflows/Promotion/PromotionThunks";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

import { Box, Center } from "@chakra-ui/layout";

import { ICategoryProductSectionProps } from "./CategoryProductsSectionContainer/ICategoryProductSectionProps";
import { ICategorySectionContainerProps } from "./CategorySectionContainer/ICategorySectionContainerProps";
import { IMegaPromosContainerProps } from "./MegaPromoSectionContainer/IMegaPromosContainerProps";
import { INodeProductsSectionContainerProps } from "./NodeProductsSectionContainer/INodeProductsSectionContainerProps";
import { IPromotionSectionContainerProps } from "./PromotionSectionContainer/IPromotionSectionContainerProps";

const CategoryProductsSectionContainer = dynamic<ICategoryProductSectionProps>(() =>
  import(
    /* webpackChunkName: "CategoryProducts" */ "./CategoryProductsSectionContainer/CategoryProductsSectionContainer"
  ).then((mod) => mod.CategoryProductsSectionContainer)
);

const CategorySectionContainer = dynamic<ICategorySectionContainerProps>(() =>
  import(
    /* webpackChunkName: "Categories" */ "./CategorySectionContainer/CategorySectionContainer"
  ).then((mod) => mod.CategorySectionContainer)
);

const MegaPromosSectionContainer = dynamic<IMegaPromosContainerProps>(() =>
  import(
    /* webpackChunkName: "MegaPromos" */ "./MegaPromoSectionContainer/MegaPromosSectionContainer"
  ).then((mod) => mod.MegaPromosSectionContainer)
);

const NodeProductsSectionContainer = dynamic<INodeProductsSectionContainerProps>(() =>
  import(
    /* webpackChunkName: "NodeProducts" */ "./NodeProductsSectionContainer/NodeProductsSectionContainer"
  ).then((mod) => mod.NodeProductsSectionContainer)
);

const PromotionSectionContainer = dynamic<IPromotionSectionContainerProps>(() =>
  import(
    /* webpackChunkName: "Promotions" */ "./PromotionSectionContainer/PromotionSectionContainer"
  ).then((mod) => mod.PromotionSectionContainer)
);

/**
 * The home container.
 * @returns {ReactElement} The home container.
 */
export const HomeContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const router = useRouter();
  const categories = useSelector(selectAllCategories);
  const isLoadingCategorySection = useSelector(selectIsLoadingCategorySection);
  const nodes = useSelector(selectAllNodes);
  const isLoadingNodeSection = useSelector(selectIsLoadingNodeSection);
  const promotions = useSelector(selectAllPromotions);
  const isLoadingPromotionSection = useSelector(selectIsLoadingPromotionSection);
  const megaPromosSectionProducts = useSelector(selectMegaPromosSectionProducts);
  const megaPromosSectionPageMetadata = useSelector(selectMegaPromosSectionPageMetadata);
  const isLoadingMegaPromosSection = useSelector(selectIsLoadingMegaPromosSection);

  const [nodesAreDisplayed, setNodesAreDisplayed] = useState(false);

  useEffect(() => {
    if (nodes.length === 0) {
      dispatch(getNodes());
    }

    if (nodes.length === 0) {
      dispatch(getNodes());
    }

    if (categories.length === 0) {
      dispatch(getCategories());
    }

    if (promotions.length === 0) {
      dispatch(getPromotions());
    }

    if (megaPromosSectionProducts.length === 0) {
      dispatch(
        getMegaPromosSectionPage({
          npp: megaPromosSectionPageMetadata.perPage,
          page: megaPromosSectionPageMetadata.currentPage,
        })
      );
    }
  }, []);

  const isLoading =
    isLoadingCategorySection &&
    isLoadingPromotionSection &&
    isLoadingMegaPromosSection &&
    isLoadingNodeSection;

  /**
   * Action on product click.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const onProductClick = (product: IProduct): void => {
    dispatch(selectProduct(product));
    router.push(`products/${product.id}`);
  };

  return isLoading ? (
    <Center h="100%" w="100%" position="fixed">
      <Loader />
    </Center>
  ) : (
    <Box>
      <GanaDineroBanner />
      <Box minW="100%">
        {megaPromosSectionProducts.length > 0 && (
          <MegaPromosSectionContainer
            megaPromosSectionProducts={megaPromosSectionProducts}
            onProductClick={onProductClick}
          />
        )}
        {categories.length > 0 && <CategorySectionContainer categories={categories} />}
        {promotions.length > 0 && <PromotionSectionContainer promotions={promotions} />}
        {nodes.length > 0 && (
          <NodeProductsSectionContainer
            onProductClick={onProductClick}
            setNodesAreDisplayed={setNodesAreDisplayed}
          />
        )}
        {(nodesAreDisplayed || nodes.length === 0) && categories.length > 0 && (
          <CategoryProductsSectionContainer onProductClick={onProductClick} />
        )}
      </Box>
    </Box>
  );
};
