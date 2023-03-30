/**
 *  Generate a range of numbers.
 * @param {number} start start number
 * @param {number} end end number
 * @returns {number[]} array of numbers.
 */
export function range(start: number, end: number): number[] {
  const arr: number[] = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

/**
 * Description shffle function
 * @param {T[]} arr of elements
 * @returns {T[]} return shuffle array of elements
 */
export const shuffle = <T>(arr: T[]): T[] => {
  return arr
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};
