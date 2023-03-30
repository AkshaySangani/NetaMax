import { ReactElement } from "react";

/**
 * The icon for the basket button.
 * @param {any} props props
 * @returns {ReactElement} The icon.
 */
export default function ArrowTopBorder(props: { width?: string; height?: string }): ReactElement {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 11.0414L10 8.05692L13 11.0414M10 1.09314C14.9706 1.09314 19 5.10173 19 10.0466C19 14.9914 14.9706 19 10 19C5.02944 19 1 14.9914 1 10.0466C1 5.10173 5.02944 1.09314 10 1.09314Z"
        stroke="#F04D4B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
