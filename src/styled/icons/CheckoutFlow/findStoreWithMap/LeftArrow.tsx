import { ReactElement } from "react";

/**
 * The icon for the left arrow to show in the address search input.
 * @returns {ReactElement} the icon
 */
export const LeftArrow = (): ReactElement => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 9C14.5523 9 15 8.55229 15 8C15 7.44772 14.5523 7 14 7L14 9ZM2 7C1.44772 7 1 7.44772 1 8C1 8.55228 1.44772 9 2 9L2 7ZM14 7L2 7L2 9L14 9L14 7Z"
        fill="#353535"
      />
      <path
        d="M4.62623 12.0404C5.01675 12.4309 5.64992 12.4309 6.04044 12.0404C6.43096 11.6499 6.43096 11.0167 6.04044 10.6262L4.62623 12.0404ZM2 7.99996L1.29289 7.29285C0.902369 7.68338 0.902369 8.31654 1.29289 8.70707L2 7.99996ZM6.04044 5.37373C6.43096 4.98321 6.43096 4.35004 6.04044 3.95952C5.64992 3.56899 5.01675 3.56899 4.62623 3.95952L6.04044 5.37373ZM6.04044 10.6262L2.70711 7.29285L1.29289 8.70707L4.62623 12.0404L6.04044 10.6262ZM2.70711 8.70707L6.04044 5.37373L4.62623 3.95952L1.29289 7.29285L2.70711 8.70707Z"
        fill="#353535"
      />
    </svg>
  );
};
