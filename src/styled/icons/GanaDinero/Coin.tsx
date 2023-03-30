import { ReactElement } from "react";

/**
 * The icon for the coin icon.
 * @returns {ReactElement} The icon.
 */
export default function Coin(): ReactElement {
  return (
    <svg
      width="85"
      height="86"
      viewBox="0 0 85 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect y="0.5" width="85" height="85" fill="url(#pattern0)" />
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_951_17451" transform="scale(0.000333333)" />
        </pattern>
        <image
          id="image0_951_17451"
          width="3000"
          height="3000"
        />
      </defs>
    </svg>
  );
}