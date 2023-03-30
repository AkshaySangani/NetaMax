/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ReactElement } from "react";

interface IBusDeliveryProps {
  colorImage: string;
}

/**
 *  The BusDelivery  component
 * @param {colorImage} props the component props
 * @returns {ReactElement} The order review screen component
 */
export default function BusDelivery({ colorImage }: IBusDeliveryProps): ReactElement {
  return (
    <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M38.5311 22H37.543V15.2437C37.543 14.45 37.228 13.6875 36.6723 13.125L30.503 6.88125C29.9473 6.31875 29.1939 6 28.4096 6H25.6862V3C25.6862 1.34375 24.3585 0 22.722 0H2.96077C1.32429 0 -0.00341797 1.34375 -0.00341797 3V23C-0.00341797 24.6562 1.32429 26 2.96077 26H3.94884C3.94884 29.3125 6.60426 32 9.87722 32C13.1502 32 15.8056 29.3125 15.8056 26H23.7101C23.7101 29.3125 26.3655 32 29.6385 32C32.9114 32 35.5669 29.3125 35.5669 26H38.5311C39.0745 26 39.5191 25.55 39.5191 25V23C39.5191 22.45 39.0745 22 38.5311 22ZM9.87722 29C8.24074 29 6.91303 27.6562 6.91303 26C6.91303 24.3438 8.24074 23 9.87722 23C11.5137 23 12.8414 24.3438 12.8414 26C12.8414 27.6562 11.5137 29 9.87722 29ZM29.6385 29C28.002 29 26.6743 27.6562 26.6743 26C26.6743 24.3438 28.002 23 29.6385 23C31.275 23 32.6027 24.3438 32.6027 26C32.6027 27.6562 31.275 29 29.6385 29ZM34.5788 16H25.6862V9H28.4096L34.5788 15.2437V16Z"
        fill={colorImage}
        fillOpacity="0.6"
      />
    </svg>
  );
}
