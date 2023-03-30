/**
 * Generates random OTP code
 * @returns {number} otp code
 */
export const generateRandomOtpCode = (): string => {
  return Math.floor(Math.random() * (9999 - 1000) + 1000).toString();
};

/**
 * Gets progress bar value based on basket total
 * @returns {number} progress bar value
 * @param {number} totalBasketPrice total basket price
 * @param {number} GMVThreshold value
 *
 */
export const getProgressBasedOnBasketTotal = (
  totalBasketPrice: number,
  GMVThreshold: number
): number => {
  return totalBasketPrice >= GMVThreshold ? GMVThreshold : totalBasketPrice;
};

/**
 * Formats value to specific number
 * @param {number} value value to format. Ex: '10.2354'
 * @returns {number | string} formatted value number. Ex: '10.23'
 */
export const toFixed = (value: number): number | string => {
  if (value % 1 !== 0) {
    return value.toFixed(2);
  } else {
    return value;
  }
};
