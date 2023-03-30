import React, { useEffect, ReactElement } from "react";

import { useDispatch, useSelector } from "react-redux";

import { BackToHome } from "components/common/BackHomeComponent/BackToHome";
import { Loader } from "components/common/Loader";
import { GridSection } from "components/common/Sections";
import { HeaderContainer } from "components/ProductDetails/ProductDetails.styled";
import { GanaDineroBanner } from "components/GanaDinero/GanaDineroBanner";
import { selectAllCategories } from "dataflows/Category/CategorySelectors";
import { selectCategory } from "dataflows/Category/CategorySlice";
import { getCategories } from "dataflows/Category/CategoryThunks";
import { ICategory } from "dataflows/Category/ICategory";
import { selectIsLoadingCategoryProducts } from "dataflows/Product/CategoryProducts/CategoryProductSelector";
import { useRouter } from "next/router";

import { Box, Center, Container, Image } from "@chakra-ui/react";

/**
 * The CategoryContainer component.
 * @returns {ReactElement} the component element.
 */
export const CategoriesContainer = (): ReactElement => {
  const categories = useSelector(selectAllCategories);
  const isLoading = useSelector(selectIsLoadingCategoryProducts);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, []);

  /**
   * Action on product click.
   * @param {ICategory} category the product clicked.
   * @returns {void}
   */
  const onCategoryClick = (category: ICategory) => {
    dispatch(selectCategory(category.id));
    router.push(`/category/${category.id}`);
  };

  const categoriesElements = categories.map((categorySection) => {
    return (
      <Box maxW="sm" height="100%" overflow="hidden" key={categorySection.id}>
        <Image
          src={categorySection.seoFilename}
          draggable="false"
          alt={categorySection.name}
          onClick={() => onCategoryClick(categorySection)}
          fallbackSrc="/assets/images/noimg.png"
          cursor="pointer"
        />
      </Box>
    );
  });

  return isLoading ? (
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
        <GridSection title="Secciones" elements={categoriesElements} />
      </Container>
    </>
  );
};
