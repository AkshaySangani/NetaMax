import { ReactElement } from "react";

/**
 * The icon for the basket.
 * @param {Record<string, unknown>} props props
 * @returns {ReactElement} The icon.
 */
export default function SliderRightArrowIcon(props: Record<string, unknown>): ReactElement {
  return (
    <svg
      width="13"
      height="19"
      viewBox="0 0 13 19"
      xmlns="http://www.w3.org/2000/svg"
      fill="current"
      stroke="current"
      {...props}
    >
      <path d="M12.0517 9.37614C12.0524 9.85633 11.8382 10.3135 11.464 10.6309L3.06123 17.7506C2.48211 18.2186 1.62098 18.1558 1.12169 17.6091C0.622408 17.0623 0.667608 16.2317 1.22349 15.7383L8.57143 9.51257C8.61224 9.47812 8.63564 9.4284 8.63564 9.37614C8.63564 9.32388 8.61224 9.27416 8.57143 9.23971L1.22349 3.01402C0.836708 2.70143 0.656048 2.21159 0.751438 1.73406C0.846818 1.25652 1.20328 0.866196 1.68287 0.714127C2.16246 0.562057 2.68995 0.672106 3.06123 1.00168L11.461 8.11925C11.8361 8.43714 12.0513 8.89494 12.0518 9.37615L12.0517 9.37614Z" />
    </svg>
  );
}
