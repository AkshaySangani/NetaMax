import { ReactElement } from "react";

/**
 * The icon for Mis Compras banner.
 * @returns {ReactElement} The icon.
 */
export default function MisComprasBackground(): ReactElement {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 326 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0.5" y="0.5" width="325" height="79" rx="9.5" fill="#DBE0FF" stroke="#5438FF" />
      <mask id="mask0_1202_13676" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
        <rect width="80" height="80" rx="10" fill="#BDEAC1" />
      </mask>
      <g mask="url(#mask0_1202_13676)">
        <circle cx="-8" cy="40" r="40" fill="#5438FF" fillOpacity="0.1" />
      </g>
    </svg>
  );
}
