import { ReactElement } from "react";

/**
 * The icon for the basket.
 * @param {Record<string, string>} props props
 * @returns {ReactElement} The icon.
 */
export default function SliderRightArrowStrongIcon(props: Record<string, string>): ReactElement {
  return (
    <svg
      width="6"
      height="10"
      viewBox="0 0 6 10"
      fill="current"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M2.04849 0.366551C1.57934 -0.122184 0.821018 -0.122184 0.351865 0.366551C-0.117288 0.855286 -0.117288 1.64526 0.351865 2.134L3.10319 5.00016L0.351865 7.86632C-0.117288 8.35505 -0.117288 9.14503 0.351865 9.63376C0.585841 9.8775 0.89301 10 1.20018 10C1.50735 10 1.81452 9.8775 2.04849 9.63376L5.64814 5.88388C6.11729 5.39514 6.11729 4.60517 5.64814 4.11643L2.04849 0.366551Z" />
    </svg>
  );
}
