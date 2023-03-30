import { CATEGORIES_LEGAL_AGE_REQUIRED } from "constants/legalAgeConstants";
import { PROMOTIONS_LEGAL_AGE_REQUIRED } from "constants/promotionConstants";
import { IProduct } from "dataflows/Product/IProduct";
import { IPromotion } from "dataflows/Promotion/IPromotion";

/**
 * Checks the availability of a product in order to allow the user to buy it or not.
 * @param {number} manageInventoryMethodId indicates if the inventory is unlimited or not.
 * @param {number} stockQuantity the product's stock quantity.
 * @returns {boolean} the product is NOT availability.
 */
export const productIsNotAvailable = (
  manageInventoryMethodId: number,
  stockQuantity: number
): boolean => {
  return manageInventoryMethodId !== 0 && stockQuantity === 0;
};

/**
 * Gets the maximum quantity of a product that can be added to the basket.
 * @param {number} manageInventoryMethodId indicates if the inventory is unlimited or not.
 * @param {number} stockQuantity the product's stock quantity.
 * @param {number} orderMaximumQuantity the maximum quantity allowed for the product.
 * @returns {number} the maximum quantity allowed for the product.
 */
export const productMaxQuantity = (
  manageInventoryMethodId: number,
  stockQuantity: number,
  orderMaximumQuantity: number
): number => {
  return manageInventoryMethodId !== 0
    ? Math.min(stockQuantity, orderMaximumQuantity)
    : orderMaximumQuantity;
};

/**
 * Filters the products if the user is under legal age.
 * @param {IProduct[]} products array of products
 * @param {boolean} isUnderLegalAge flag indicating if the user is under legal age.
 * @returns {IProduct[]} the filtered products.
 */
export const filterProductsForUnderLegalAge = (
  products: IProduct[],
  isUnderLegalAge: boolean
): IProduct[] => {
  return products.filter((product) => {
    if (isUnderLegalAge) {
      return product && !CATEGORIES_LEGAL_AGE_REQUIRED.includes(product.categoryId);
    }
    return true;
  });
};

/**
 * Filters the promotions if the user is under legal age.
 * @param {IPromotion[]} promotions array of promotions
 * @param {boolean} isUnderLegalAge flag indicating if the user is under legal age.
 * @returns {IPromotion[]} the filtered promotions.
 */
export const filterPromotionsForUnderLegalAge = (
  promotions: IPromotion[],
  isUnderLegalAge: boolean
): IPromotion[] => {
  return promotions.filter((promotion) => {
    if (isUnderLegalAge) {
      return promotion && !PROMOTIONS_LEGAL_AGE_REQUIRED.includes(promotion.id);
    }
    return true;
  });
};
