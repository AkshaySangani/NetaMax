import { useDispatch, useSelector } from "react-redux";

import { PRODUCT_ADDED, TrackerApp } from "constants/amplitudeConstants";
import { selectBasketItems } from "dataflows/Basket/BasketSelectors";
import { addItem, removeItem } from "dataflows/Basket/BasketSlice";
import { IBasketItem } from "dataflows/Basket/IBasketItem";
import { IProduct } from "dataflows/Product/IProduct";
import { trackEvent, TrackerObject } from "utils/tracker";

/**
 * Basic hook to get the basket items
 * @returns {Object} The basket hook.
 */
export const useBasket = (): {
  addToBasket: (product: IProduct, trackerObject?: Partial<TrackerObject> | undefined) => void;
  removeFromBasket: (product: IProduct) => void;
  getQtyInBasket: (product: IProduct) => number;
} => {
  const basketItems: IBasketItem[] = useSelector(selectBasketItems);
  const dispatch = useDispatch();

  /**
   * Mapping of the product to the basket item
   * @param {IProduct} product The product to add to the basket.
   * @returns {IBasketItem} The basket item.
   */
  const mapProductToBasketItem = (product: IProduct): IBasketItem => {
    return {
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      oldPrice: parseFloat(product.oldPrice),
      pictureUrl: product.seoFilename,
      minQuantity: product.orderMinimumQuantity,
      maxQuantity: product.orderMaximumQuantity,
      sku: product.sku,
      categoryId: product.categoryId,
      quantity: 1,
      stockQuantity: product.stockQuantity,
      manageInventoryMethodId: product.manageInventoryMethodId,
      deliveryDateId: product.deliveryDateId,
      deliveryDateDisplayOrder: product.deliveryDateDisplayOrder,
      deliveryDateName: product.deliveryDateName,
    };
  };

  /**
   * Action to add product to cart.
   * @param {IProduct} product the product clicked.
   * @param {TrackerObject} trackerObject the tracker object.
   * @returns {void}
   */
  const addToBasket = (product: IProduct, trackerObject?: Partial<TrackerObject>): void => {
    trackEvent(PRODUCT_ADDED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      productName: product.name,
      productId: product.id,
      quantity: 1,
      totalPrice: product.price,
      originalPrice: product.oldPrice,
      productSKU: product.sku,
      categoryID: product.categoryId,
      ...trackerObject,
    });

    dispatch(addItem(mapProductToBasketItem(product)));
  };

  /**
   * Action to remove product from cart.
   * @param {IProduct} product the product clicked.
   * @returns {void}
   */
  const removeFromBasket = (product: IProduct): void => {
    dispatch(removeItem(mapProductToBasketItem(product)));
  };

  /**
   * Get the quantity of a product in the cart.
   * @param {IProduct} product the product clicked.
   * @returns {number} the quantity of the product in the cart.
   **/
  const getQtyInBasket = (product: IProduct): number => {
    const item = basketItems.find((item) => item.id === product.id);
    return item ? item.quantity : 0;
  };

  return {
    addToBasket,
    removeFromBasket,
    getQtyInBasket,
  };
};
