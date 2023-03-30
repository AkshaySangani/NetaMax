import { ReactElement } from "react";

/**
 * The icon for the circle pin to show with the address.
 * @returns {ReactElement} the icon
 */
export const AddressCirclePin = (): ReactElement => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#353535" fillOpacity="0.04" />
      <path
        d="M16 15.3327C16.7363 15.3327 17.3333 14.7357 17.3333 13.9993C17.3333 13.263 16.7363 12.666 16 12.666C15.2636 12.666 14.6666 13.263 14.6666 13.9993C14.6666 14.7357 15.2636 15.3327 16 15.3327Z"
        stroke="#353535"
        strokeOpacity="0.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 22C16 22 20.6667 18.7692 20.6667 14.6154C20.6667 13.3913 20.175 12.2174 19.2999 11.3518C18.4247 10.4863 17.2377 10 16 10C14.7624 10 13.5754 10.4863 12.7002 11.3518C11.825 12.2174 11.3334 13.3913 11.3334 14.6154C11.3334 18.7692 16 22 16 22Z"
        stroke="#353535"
        strokeOpacity="0.4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
