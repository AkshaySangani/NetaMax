import React, { useEffect, useState, FC, ReactElement, ReactNode } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { IMobileBasketButton } from "components/common/MobileBasketButton";
import { MobileBasketButton } from "components/common/MobileBasketButton/MobileBasketButton";
import { INavBarProps, NavBar } from "components/Layout/NavBar";
import {
  HOME_VIEWED,
  MONETAS_CATEGORY_PROGRESS_BAR_COMPLETED,
  MONETAS_CATEGORY_SUCCESS,
  MONETAS_GMV_SUCCESS,
  MONETAS_SKU_PROGRESS_BAR_COMPLETED,
  MONETAS_SKU_SUCCESS,
  SEARCH_VIEW_MORE,
  SEARCHBAR_CLICKED,
  TrackerApp,
  MONETAS_GMV_PROGRESS_BAR_COMPLETED,
} from "constants/amplitudeConstants";
import { OrderStatus } from "constants/checkoutConstants";
import { BasketButtonContainer } from "containers/Home/HomeContainer.styled";
import { selectCustomer } from "dataflows/Auth/AuthSelectors";
import {
  selectBasketItems,
  selectTotalAmount,
  selectTotalBasketItems,
  selectTotalBasketPrice,
} from "dataflows/Basket/BasketSelectors";
import { selectOnlyLoginSteps, selectOrderStatus } from "dataflows/Checkout/CheckoutSelectors";
import { onOpen as onOpenAction } from "dataflows/Checkout/CheckoutSlice";
import {
  markAmplitudeAsInitialized,
  markSegmentAsInitialized,
  markSegmentNodeAsInitialized,
} from "dataflows/EventTracking/EventTrackingSlice";
import {
  selectCategoryChallenges,
  selectGanaDinero,
  selectGMVChallenge,
  selectIsCategoryNotified,
  selectIsGMVNotified,
  selectIsSKUNotified,
  selectSKUChallenges,
} from "dataflows/GanaDinero/GanaDineroSelectors";
import {
  clearCategoryNotified,
  clearSKUNotified,
  notifyCategoryComplete,
  notifyGMVComplete,
  notifySKUComplete,
} from "dataflows/GanaDinero/GanaDineroSlice";
import { availableChallenges } from "dataflows/GanaDinero/GanaDineroThunks";
import { selectIsUserUnderLegalAge } from "dataflows/LegalAge/ILegalAgeSelectors";
import { IProduct } from "dataflows/Product/IProduct";
import {
  selectEmptySearchMessage,
  selectHasMoreProducts,
  selectIsLoadingSearchBarProducts,
  selectSearchBarProducts,
} from "dataflows/Product/Search/SearchSelectors";
import { clearSearchBarProducts } from "dataflows/Product/Search/SearchSlice";
import { getSearchBarProducts } from "dataflows/Product/Search/SearchThunks";
import { selectIsLoadingStore, selectStore } from "dataflows/Stores/StoreSelectors";
import { getStoreByName } from "dataflows/Stores/StoreThunks";
import { useBasket } from "hooks/basketHooks";
import { useSearchDebounce } from "hooks/useSearchDebounce";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { screenSizes } from "styled/screen";
import { initAmplitude } from "utils/amplitude";
import {
  cleverTapModifyUserProperties,
  clevertapPushNotificationsOptIn,
  initClevertap,
} from "utils/clevertap";
import { loadSegmentAnalytics } from "utils/segment";
import { loadSegmentNodeAnalytics } from "utils/segmentNode";
import { trackEvent } from "utils/tracker";

import { useDisclosure, useMediaQuery, Box, Center, Fade, Img } from "@chakra-ui/react";

import { ICheckoutContainerProps } from "./Checkout/ICheckoutContainerProps";
import { postInstanceCoreApi } from "utils/http";

const CheckoutContainer = dynamic<ICheckoutContainerProps>(() =>
  import(/* webpackChunkName: "Checkout" */ "./Checkout/CheckoutContainer").then(
    (mod) => mod.CheckoutContainer
  )
);

const LegalAgeModal = dynamic<ReactNode>(() =>
  import("./LegalAgeContainer/LegalAgeContainer").then((mod) => mod.LegalAgeContainer)
);

/**
 * The Layout container component
 * @param {ReactNode} param0 children
 * @returns {ReactElement} The layout container.
 */
export const LayoutContainer: FC = ({ children }): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { addToBasket, getQtyInBasket, removeFromBasket } = useBasket();
  const totalBasketItems = useSelector(selectTotalBasketItems);
  const store = useSelector(selectStore);
  const customer = useSelector(selectCustomer);
  const isLoadingStore = useSelector(selectIsLoadingStore);
  const isLoadingSearchProduct = useSelector(selectIsLoadingSearchBarProducts);
  const productSearch = useSelector(selectSearchBarProducts);
  const emptySearchMessage = useSelector(selectEmptySearchMessage);
  const hasMoreProducts = useSelector(selectHasMoreProducts);
  const totalBasketPrice = useSelector(selectTotalBasketPrice);
  const coins = useSelector(selectGanaDinero);
  const totalAmount = useSelector(selectTotalAmount);
  const isGMVNotified = useSelector(selectIsGMVNotified);
  const gmvChallenge = useSelector(selectGMVChallenge);
  const skuChallenges = useSelector(selectSKUChallenges);
  const categoryChallenges = useSelector(selectCategoryChallenges);
  const isSkuProgressBarCompletionNotified = useSelector(selectIsSKUNotified);
  const isCategoryProgressBarCompletionNotified = useSelector(selectIsCategoryNotified);
  const isUserUnderLegalAge = useSelector(selectIsUserUnderLegalAge);
  const basketItems = useSelector(selectBasketItems);
  const orderStatus = useSelector(selectOrderStatus);
  const onlyLoginSteps = useSelector(selectOnlyLoginSteps);

  const { isOpen, onToggle } = useDisclosure();
  const [isDesktop] = useMediaQuery(`(min-width: ${screenSizes.mdMin}px)`);
  const isHome =
    router.pathname === "/" ||
    router.pathname === "/mi-cuenta" ||
    router.pathname === "/en-grupo" ||
    router.pathname === "/gana-dinero";
  const searchQuery = (router.query.q as string | undefined) ?? "";
  const storeName = router.query.store as string | undefined;

  const [searchInputValue, setSearchInputValue] = useState<string>(searchQuery);
  const [isTrackerAppLoaded, setIsTrackerAppLoaded] = useState(false);
  const debouncedSearchTerm = useSearchDebounce(searchInputValue);

  useEffect(() => {
    initAmplitude();
    dispatch(markAmplitudeAsInitialized());
    loadSegmentAnalytics().then((response) => {
      setIsTrackerAppLoaded(!!response);
      dispatch(markSegmentAsInitialized());
    });
    loadSegmentNodeAnalytics().then((response) => {
      setIsTrackerAppLoaded(!!response);
      dispatch(markSegmentNodeAsInitialized());
    });
    initClevertap();
    clevertapPushNotificationsOptIn();
  }, []);

  /**
   * listen to whenever the customer netawallet changes and update profile in clevertap
   * @returns {void}
   */
  useEffect(() => {
    if (customer?.customerCurrentNetaWallet) {
      const propertyToUpdate = {
        currentNetaWallet: Number.parseFloat(customer?.customerCurrentNetaWallet as string).toFixed(
          2
        ),
      };
      cleverTapModifyUserProperties(propertyToUpdate);
    }
  }, [customer?.customerCurrentNetaWallet]);

  /**
   * listen to whenever the customer's referral code changes and updates the corresponding properties in clevertap
   * @returns {void}
   */
  useEffect(() => {
    if (customer?.referralCode) {
      cleverTapModifyUserProperties({ referralCode: customer?.referralCode });
    }
  }, [customer?.referralCode && customer?.referralCode]);

  /**
   * function to modify some user properties in clevertap related to the users' favorite store and last order store
   *  @param {string} storeId id of the new store that is going to be either a new favorite store or a new last order store
   *  @param {string} store string that says if the store id being passed is the customers favorite store or last order store
   * @returns {Promise<void>}updates the properties in clevertap
   */
  const clevertapUpdateStoreProperties = async (storeId: string, store: string): Promise<void> => {
    const storeData = (await postInstanceCoreApi("/tienda", {
      id: storeId,
    })) as any;
    const storeProperties = storeData.data;
    if (store == "lastOrderStore") {
      const propertiesToUpdate = {
        lastOrderStoreName: storeProperties.Name,
        lastOrderStoreStatus: storeProperties.DisplayOrder,
        lastOrderStoreShippingDaysScheduleId: storeProperties.ShippingDaysScheduleId,
      };
      cleverTapModifyUserProperties(propertiesToUpdate);
    }
    if (store == "favoriteStore") {
      const propertiesToUpdate = {
        favoriteStoreName: storeProperties.Name,
        favoriteStoreStatus: storeProperties.DisplayOrder,
        favoriteStoreShippingDaysScheduleId: storeProperties.ShippingDaysScheduleId,
      };
      cleverTapModifyUserProperties(propertiesToUpdate);
    }
  };

  /**
   * listen to whenever the customer's LastOrderCompletedStoreId changes and updates the corresponding properties in clevertap
   * @returns {void}
   */
  useEffect(() => {
    if (customer?.LastOrderCompletedStoreId) {
      clevertapUpdateStoreProperties(customer?.LastOrderCompletedStoreId, "lastOrderStore");
    }
  }, [customer?.LastOrderCompletedStoreId]);

  /**
   * listen to whenever the customer's favoriteStoreId changes and updates the corresponding properties in clevertap
   * @returns {void}
   */
  useEffect(() => {
    //TODO: REFACTOR THIS ONCE THE PROPERTY FavoriteStoreId is included in the endpoint
    if (customer?.FavoriteStoreId) {
      clevertapUpdateStoreProperties(customer?.FavoriteStoreId, "favoriteStore");
    } else if (customer?.LastOrderCompletedStoreId) {
      clevertapUpdateStoreProperties(customer?.LastOrderCompletedStoreId, "favoriteStore");
    }
  }, [customer?.FavoriteStoreId, customer?.LastOrderCompletedStoreId]);

  /**
   * listen to whenever the customer is a deleted user
   * @returns {void}
   */
  useEffect(() => {
    cleverTapModifyUserProperties({ deleted: customer?.deleted });
  }, [customer?.deleted]);

  useEffect(() => {
    if (isTrackerAppLoaded) {
      //TODO: Check if we need to identiy users on page load.
      //customer && identifyUser(customer.id);

      if (router.pathname === "/") {
        trackEvent(HOME_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment]);
      }
    }
  }, [isTrackerAppLoaded, router.pathname]);

  useEffect(() => {
    if (storeName) {
      dispatch(getStoreByName(storeName));
    }
  }, [storeName]);

  useEffect(() => {
    dispatch(availableChallenges());
  }, [customer]);

  useEffect(() => {
    if (debouncedSearchTerm.length >= 3) {
      dispatch(getSearchBarProducts(debouncedSearchTerm));
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm.length >= 3 && (productSearch.length > 0 || emptySearchMessage)) {
      trackEvent(SEARCHBAR_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment], {
        searchValue: searchInputValue,
        productDisplayed: productSearch.length > 0 ? "Si" : "No",
      });
    }
  }, [productSearch, emptySearchMessage]);

  useEffect(() => {
    if (totalBasketItems > 0 && !isOpen) {
      onToggle();
    }

    if (totalBasketItems === 0 && isOpen) {
      onToggle();
    }
  }, [totalBasketItems]);

  useEffect(() => {
    if (
      !isGMVNotified &&
      !gmvChallenge?.completed &&
      gmvChallenge?.isActive &&
      totalAmount >= gmvChallenge.GMVThreshold
    ) {
      trackEvent(MONETAS_GMV_PROGRESS_BAR_COMPLETED, [TrackerApp.Amplitude, TrackerApp.Segment]);
      dispatch(notifyGMVComplete());
    }
  }, [totalAmount]);

  /**
   * Handles checking if the sku challenge progress bar is completed and if it is, then an event is tracked
   * @param {string} event the name of the event that should be tracked
   * @param {bolean} eventHasBeenTriggered a flag that says if the event has already been triggered or not
   * @returns {void}
   **/
  const checkSkuProgressBarCompleted = (event: string, eventHasBeenTriggered: boolean): void => {
    if (skuChallenges) {
      skuChallenges.forEach((skuChallenge) => {
        if (skuChallenge.isActive && !skuChallenge.completed && !eventHasBeenTriggered) {
          const skuItemInBasket = basketItems.find(
            (basketItem) => basketItem.sku === skuChallenge?.Code
          );
          if (skuItemInBasket && skuItemInBasket.quantity >= skuChallenge.CodeThreshold) {
            //the SkuProgressBarCompleted
            trackEvent(event, [TrackerApp.Amplitude, TrackerApp.Segment], {
              challengeId: skuChallenge.Id,
            });
            if (event == MONETAS_SKU_PROGRESS_BAR_COMPLETED) {
              dispatch(notifySKUComplete());
            } else {
              dispatch(clearSKUNotified());
            }
          }
        }
      });
    }
  };

  /**
   * Handles checking if the category challenge progress bar is completed and if it is, then an event is tracked
   * @param {string} event the name of the event that should be tracked
   * @param {bolean} eventHasBeenTriggered a flag that says if the event has already been triggered or not
   * @returns {void}
   **/
  const checkCategoryProgressBarCompleted = (
    event: string,
    eventHasBeenTriggered: boolean
  ): void => {
    if (categoryChallenges) {
      categoryChallenges.forEach((categoryChallenge) => {
        if (categoryChallenge.isActive && !categoryChallenge.completed && !eventHasBeenTriggered) {
          let totalCategoryItems = 0;
          basketItems.forEach((basketItem) => {
            if (basketItem.categoryId === parseInt(categoryChallenge?.Code)) {
              totalCategoryItems = totalCategoryItems + basketItem.quantity;
            }
          });
          if (totalCategoryItems >= categoryChallenge.CodeThreshold) {
            trackEvent(event, [TrackerApp.Amplitude, TrackerApp.Segment], {
              challengeId: categoryChallenge.Id,
            });
            if (event == MONETAS_CATEGORY_PROGRESS_BAR_COMPLETED) {
              dispatch(notifyCategoryComplete());
            } else {
              dispatch(clearCategoryNotified());
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    checkCategoryProgressBarCompleted(
      MONETAS_CATEGORY_PROGRESS_BAR_COMPLETED,
      isCategoryProgressBarCompletionNotified
    );
    checkSkuProgressBarCompleted(
      MONETAS_SKU_PROGRESS_BAR_COMPLETED,
      isSkuProgressBarCompletionNotified
    );
  }, [basketItems]);

  useEffect(() => {
    if (orderStatus === OrderStatus.SUBMITTED) {
      checkCategoryProgressBarCompleted(MONETAS_CATEGORY_SUCCESS, false);
      checkSkuProgressBarCompleted(MONETAS_SKU_SUCCESS, false);
    }
  }, [orderStatus]);

  useEffect(() => {
    if (
      orderStatus === OrderStatus.SUBMITTED &&
      gmvChallenge?.isActive &&
      !gmvChallenge?.completed &&
      totalAmount >= gmvChallenge.GMVThreshold
    ) {
      trackEvent(MONETAS_GMV_SUCCESS, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [orderStatus]);

  /**
   * Handles on open action
   * @returns {void}
   **/
  const onOpen = (): void => {
    dispatch(onOpenAction({ onlyLoginSteps: false }));
  };

  /**
   * Cleans the searched products
   * @returns {void}
   */
  const clearSearch = () => {
    setSearchInputValue("");
    dispatch(clearSearchBarProducts());
  };

  /**
   * Input search handler
   * @param {string} event event
   * @returns {void}
   */
  const onSearchInputChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(clearSearchBarProducts());
    setSearchInputValue(event?.target.value || "");
  };

  /**
   * Go back action
   * @returns {void}
   */
  const goBack = () => {
    if (typeof window !== "undefined" && window.history.length > 2) {
      router.back();
    } else {
      router.push("/");
    }
  };

  /**
   * Submit search handle
   * @returns {void} nothing
   */
  const handleSearchProducts = (): void => {
    trackEvent(SEARCH_VIEW_MORE, [TrackerApp.Amplitude, TrackerApp.Segment], {
      searchValue: searchInputValue,
    });

    clearSearch();
    router.push({
      pathname: "/search",
      query: { q: searchInputValue },
    });
  };

  /**
   * Add to cart function
   * @param {IProduct} product to add to cart
   * @returns {void} position of product
   */
  const addToCart = (product: IProduct) => {
    addToBasket(product, {
      position: productSearch.map((c) => c.id).indexOf(product.id) + 1,
      isInSearchbar: "Si",
    });
  };

  const navBarProps: INavBarProps = {
    isHome,
    store,
    onSearchInputChange,
    searchInputValue,
    productSearch,
    onAddToBasketClick: addToCart,
    onRemoveFromBasketClick: removeFromBasket,
    getQtyInBasket,
    isLoadingSearchProduct,
    goBack,
    clearSearch,
    handleSearchProducts,
    emptySearchMessage,
    hasMoreProducts,
    onOpen,
    totalBasketItems,
    coins,
  };

  const basketButtonProps: IMobileBasketButton = {
    totalBasketPrice,
    totalBasketItems,
    onOpen,
  };

  return isLoadingStore ? (
    <Center h="100%" w="100%" position="fixed">
      <Box>
        <Box pb="25px">
          <Img src="/assets/images/logo.png" width="120px" />
        </Box>
        <Center>
          <Loader />
        </Center>
      </Box>
    </Center>
  ) : (
    // TODO: Remover el padding una vez que sea eliminado el boton de compra.
    <Box pb={isDesktop ? "0px" : "10px"}>
      <NavBar customer={customer} {...navBarProps} />
      <CheckoutContainer onlyLoginSteps={onlyLoginSteps} />
      <main>{children}</main>
      {totalBasketItems ? (
        <BasketButtonContainer>
          <Fade in={isOpen}>
            <MobileBasketButton {...basketButtonProps} />
          </Fade>
        </BasketButtonContainer>
      ) : null}
      {isUserUnderLegalAge === undefined && <LegalAgeModal />}
    </Box>
  );
};
