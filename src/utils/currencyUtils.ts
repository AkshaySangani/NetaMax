import { LANG_CODE } from "constants/localeFormatConstants";

/**
 * Formats a number as a currency string.
 * @param {number} amount the amount to format.
 * @param {string} currency the currency to format the amount in.
 * @returns {string} the formatted currency string.
 */
export const formatMoney = (amount: number, currency: string): string => {
  const formatter = new Intl.NumberFormat(LANG_CODE, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  });
  return formatter.format(amount);
};
/**
 * Gets the discount of an item.
 * @param {number} oldPrice the previous price of the item.
 * @param {number} newPrice the current price of the item.
 * @param {string} currency the currency of the amount.
 * @returns {string} the actual price string.
 */
export const getDiscount = (oldPrice: number, newPrice: number, currency: string): string => {
  const discount = formatMoney(oldPrice - newPrice, currency);
  return discount;
};
