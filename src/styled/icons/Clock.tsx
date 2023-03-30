import { ReactElement } from "react";

/**
 * The icon for the clock.
 * @param {any} props props
 * @returns {ReactElement} The icon.
 */
export default function Clock(props: { display?: string }): ReactElement {
  return (
    <svg
      width="16"
      height="17"
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8 5.5V8.5L10.25 10.75M14.75 8.5C14.75 12.2279 11.7279 15.25 8 15.25C4.27208 15.25 1.25 12.2279 1.25 8.5C1.25 4.77208 4.27208 1.75 8 1.75C11.7279 1.75 14.75 4.77208 14.75 8.5Z"
        stroke="#2F3346"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
