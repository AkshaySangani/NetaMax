import { useEffect, useState, ReactElement } from "react";

import { Spinner } from "@chakra-ui/react";

import { ILoaderProps } from "./ILoaderProps";

/**
 * Loader component
 * @param {ILoaderProps} props the component props
 * @returns {ReactElement} the component element
 */
export const Loader = (props: ILoaderProps): ReactElement => {
  const { thickness, speed, emptyColor, color, size, delay = 0 } = props;

  const [ready, setReady] = useState(delay === 0);

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (!ready) {
      timeout = setTimeout(() => setReady(true), delay);
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  if (!ready) return <></>;

  const loaderProps = {
    thickness: thickness || "4px",
    speed: speed || "0.65s",
    emptyColor: emptyColor || "gray.200",
    color: color || "netaRed.500",
    size: size || "xl",
  };

  return <Spinner {...loaderProps} />;
};
