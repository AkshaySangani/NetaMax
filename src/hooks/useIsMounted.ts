import { useEffect, useRef } from "react";

/**
 * Hook that returns a boolean value indicating if the component is mounted.
 * @returns {Function} - Boolean value indicating if the component is mounted.
 */
export const useIsMounted = (): boolean => {
  const isMounted = useRef(false);
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted.current;
};
