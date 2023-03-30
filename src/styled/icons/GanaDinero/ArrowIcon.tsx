import { ReactElement } from "react";

/**
 * The icon for the arrow icon.
 * @returns {ReactElement} The Truck icon.
 */
export default function ArrowIcon(): ReactElement {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9 7.46895L12 10.4534L9 13.4379M19 10.4534C19 15.3983 14.9706 19.4069 10 19.4069C5.02944 19.4069 1 15.3983 1 10.4534C1 5.50859 5.02944 1.5 10 1.5C14.9706 1.5 19 5.50859 19 10.4534Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
