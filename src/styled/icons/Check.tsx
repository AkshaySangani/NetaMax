import { ReactElement } from "react";

/**
 * Check icon.
 * @returns {ReactElement} The icon.
 */
export default function Check(props: { width?: string; height?: string }): ReactElement {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6" cy="6" r="6" fill="#18AE11" />
      <path
        d="M4.61536 5.99985L5.53843 6.92293L7.38459 4.61523"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
