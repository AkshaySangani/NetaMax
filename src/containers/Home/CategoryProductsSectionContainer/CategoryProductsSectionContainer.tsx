import { useEffect, useState, ReactElement } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { ProductCard } from "components/common/ProductCard";
import { CarouselSection } from "components/common/Sections/CarouselSection/CarouselSection";
import {
  CATEGORY_PRODUCT_SCROLLED,
  CATEGORY_VER_TODOS_CLICKED,
  TrackerApp,
} from "constants/amplitudeConstants";
import { bannerNames, categoryColors } from "constants/categoryConstants";
import {
  MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_DESKTOP,
  MAX_MEGA_PROMO_PRODUCTS_PER_SLIDE_MOBILE,
  MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_DESKTOP,
  MEGA_PROMO_SLIDE_SPACE_BETWEEN_ITEMS_MOBILE,
} from "constants/productConstants";
import { selectAllCategories } from "dataflows/Category/CategorySelectors";
import { selectCategory } from "dataflows/Category/CategorySlice";
import { ICategory } from "dataflows/Category/ICategory";
import { selectHomeCategoryProducts } from "dataflows/Product/CategoryProducts/CategoryProductSelector";
import { getHomeCategoryProductsPage } from "dataflows/Product/CategoryProducts/CategoryProductsThunk";
import { IProduct } from "dataflows/Product/IProduct";
import { useBasket } from "hooks/basketHooks";
import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";
import { shuffle } from "utils/arrayUtils";
import { trackEvent } from "utils/tracker";
import { v4 as uuidv4 } from "uuid";

import { useMediaQuery, Box, Center, Container, Image } from "@chakra-ui/react";

import { ICategoryProductSectionProps } from "./ICategoryProductSectionProps";

/**
 * The category products section container.
 * @param {ICategoryProductSectionProps} props The props.
 * @returns {ReactElement} the category products section container
 */
export const CategoryProductsSectionContainer = (
  props: ICategoryProductSectionProps
): ReactElement => {
  const { onProductClick } = props;
  const { addToBasket, removeFromBasket, getQtyInBasket } = useBasket();
  const dispatch = useDispatch();
  const router = useRouter();
  const categories = useSelector(selectAllCategories);
  const homeCategoryProducts = useSelector(selectHomeCategoryProducts);
  const [displayedCategories, setDisplayedCategories] = useState<ICategory[]>(
    categories.slice(0, 3)
  );
  const [isLargerThanSm] = useMediaQuery(`(min-width: ${screenSizes.sm}px)`);
  const [bannerNameArray, setBannerNameArray] = useState(bannerNames);

  useEffect(() => {
    displayedCategories.forEach((category) => {
      dispatch(getHomeCategoryProductsPage({ categoryId: category.id, page: 1, npp: 10 }));
    });
    setBannerNameArray(shuffle(bannerNameArray));
  }, []);

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

  const bannerSrc = bannerNameArray.map((name) => {
    const folderName = isLargerThanSm ? "banner-desktop" : "banner-mobile";
    return `/assets/images/banners/${folderName}/${name}`;
  });

  /**
   * Gets random promotional banner as category product section.
   * @param {number} index number
   * @returns {ICategoryProduct} the category product section.
   */
  const getPromotionalBanner = (index: number): ReactElement => {
    return (
      <Box p="8px 0" key={uuidv4()}>
        <Image w="100%" src={bannerSrc[index]} />
      </Box>
    );
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
            isHomeCategory: "Si",
          })
        }
        removeFromCart={removeFromBasket}
        qtyOnBasket={getQtyInBasket(product)}
      />
    ));
  };

  /**
   * Action on category scroll.
   * @param {string} categoryId The category id.
   * @returns {void}
   */
  const onCategoryProductSectionSlide = (categoryId: string) => {
    trackEvent(CATEGORY_PRODUCT_SCROLLED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      categoryId: categoryId,
    });
  };

  /**
   * Action on category click.
   * @param {ICategory} category the category clicked.
   * @returns {void}
   */
  const onShowAllClick = (category: ICategory): void => {
    trackEvent(CATEGORY_VER_TODOS_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      category: category.name,
    });
    dispatch(selectCategory(category.id));
    router.push(`/category/${category.id}`);
  };

  /**
   * Loads the next page of category products.
   * @returns {void}
   */
  const loadNextPage = () => {
    const nextCategoryPageIndex = displayedCategories.length - 1;
    const nextCategories = categories.slice(
      nextCategoryPageIndex + 1,
      Math.min(nextCategoryPageIndex + 3, categories.length)
    );
    nextCategories.forEach((category) => {
      dispatch(getHomeCategoryProductsPage({ categoryId: category.id, page: 1, npp: 20 }));
    });
    setDisplayedCategories([...displayedCategories, ...nextCategories]);
  };

  const hasMore = displayedCategories.length < categories.length;

  return (
    <InfiniteScroll
      dataLength={displayedCategories.length}
      style={{ overflow: "hidden" }}
      next={loadNextPage}
      hasMore={hasMore}
      loader={
        <Center pt="30px">
          <Loader />
        </Center>
      }
    >
      {displayedCategories &&
        displayedCategories.flatMap((category, index) => {
          const sections: ReactElement[] = [];
          const products = homeCategoryProducts[category.id]?.records;

          if (index !== 0 && index % 2 === 0) {
            sections.push(getPromotionalBanner(index / 2 - 1));
          }

          if (products && products.length > 0) {
            sections.push(
              <Box
                key={category.id}
                p="10px 0"
                bg={categoryColors[category?.id]?.color || "#FFFFF"}
              >
                <Container minW="100%">
                  <CarouselSection
                    title={category.name}
                    elements={createProductCard(products)}
                    breakpoints={breakpoints}
                    onClickSection={() => onShowAllClick(category)}
                    slidesPerGroup={1}
                    onSlideChange={() => onCategoryProductSectionSlide(category.id)}
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
