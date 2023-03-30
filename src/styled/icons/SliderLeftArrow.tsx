import { ReactElement } from "react";

/**
 * The icon for the basket.
 * @param {Record<string, string>} props props
 * @returns {ReactElement} The icon.
 */
export default function SliderLeftArrowIcon(props: Record<string, string>): ReactElement {
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
      <path d="M0.879884 9.41512C0.879264 8.93493 1.09341 8.47775 1.46759 8.1604L9.8704 1.04065C10.4495 0.572643 11.3107 0.635483 11.8099 1.1822C12.3092 1.72892 12.264 2.55953 11.7081 3.05299L4.3602 9.27869C4.31939 9.31314 4.29599 9.36286 4.29599 9.41512C4.29599 9.46738 4.31939 9.5171 4.3602 9.55155L11.7081 15.7773C12.0949 16.0898 12.2756 16.5797 12.1802 17.0572C12.0848 17.5348 11.7284 17.9251 11.2488 18.0771C10.7692 18.2292 10.2417 18.1192 9.87041 17.7896L1.47061 10.672C1.09552 10.3541 0.880364 9.89633 0.879884 9.41512Z" />
    </svg>
  );
}
