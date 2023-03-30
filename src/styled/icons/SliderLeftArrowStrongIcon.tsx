import { ReactElement } from "react";

/**
 * The icon for the basket.
 * @param {Record<string, string>} props props
 * @returns {ReactElement} The icon.
 */
export default function SliderLeftArrowStrongIcon(props: Record<string, string>): ReactElement {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M3.95151 9.63345C4.42066 10.1222 5.17898 10.1222 5.64814 9.63345C6.11729 9.14471 6.11729 8.35474 5.64814 7.866L2.89681 4.99984L5.64814 2.13368C6.11729 1.64495 6.11729 0.854973 5.64814 0.366239C5.41416 0.122496 5.10699 -7.80695e-08 4.79982 -1.04923e-07C4.49265 -1.31777e-07 4.18548 0.122495 3.95151 0.366238L0.351865 4.11612C-0.117288 4.60486 -0.117288 5.39483 0.351865 5.88357L3.95151 9.63345Z" />
    </svg>
  );
}
