import React, { useEffect, ReactElement } from "react";

import { useSelector } from "react-redux";

import { BasketItems } from "components/Layout/Checkout/Basket/BasketItems";
import { IBasketItemsProps } from "components/Layout/Checkout/Basket/IBasketItemsProps";
import { CART_PAGE_VIEWED, TrackerApp } from "constants/amplitudeConstants";
import { selectSelectedCategory } from "dataflows/Category/CategorySelectors";
import { selectWinnerChallenges } from "dataflows/GanaDinero/GanaDineroSelectors";
import { useIsMounted } from "hooks/useIsMounted";
import { trackEvent } from "utils/tracker";

import { IBasketContainerProps } from "./IBasketContainerProps";

/**
 * The basket container component.
 * @param {IBasketContainerProps} props The component props.
 * @returns {ReactElement} The react element.
 */
export const BasketContainer = (props: IBasketContainerProps): ReactElement => {
  const {
    onAddToBasket,
    onRemoveFromBasket,
    basketItems,
    isClickingNextButton,
    setIsClickingNextButton,
    loadNextStep,
  } = props;
  const selectedCategory = useSelector(selectSelectedCategory);
  const statusChallenges = useSelector(selectWinnerChallenges);

  const isMounted = useIsMounted();

  useEffect(() => {
    trackEvent(CART_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      productName: basketItems.map((product) => product.name).join(";"),
      productID: basketItems.map((product) => product.id).join(";"),
      productSKU: basketItems.map((product) => product.sku).join(";"),
      productPrice: basketItems.map((product) => product.price).join(";"),
      categoryId: basketItems.map((product) => product.categoryId).join(";"),
      category: selectedCategory?.name,
    });
  }, []);

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      setIsClickingNextButton && setIsClickingNextButton(false);
      loadNextStep && loadNextStep();
    }
  }, [isClickingNextButton]);

  const basketProps: IBasketItemsProps = {
    onAddToBasket,
    onRemoveFromBasket,
    basketItems,
    statusChallenges,
  };
  return <BasketItems {...basketProps} />;
};
