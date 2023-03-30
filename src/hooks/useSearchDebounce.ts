import { useEffect, useState } from "react";

/**
 * Function to debounce the searchbar
 * @param {string} searchValue input value
 * @returns {[]} hook
 */
export const useSearchDebounce = (searchValue: string) => {
  const delay = 500;
  const [debouncedValue, setDebouncedValue] = useState(searchValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchValue, delay]);

  return debouncedValue;
};
