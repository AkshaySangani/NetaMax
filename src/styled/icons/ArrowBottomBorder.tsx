import { ReactElement } from "react";

/**
 * The icon for the basket button.
 * @param {any} props props
 * @returns {ReactElement} The icon.
 */
export default function ArrowBottomBorder(props: {
  width?: string;
  height?: string;
}): ReactElement {
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
        d="M13 8.9586L10 11.9431L7 8.9586M10 18.9069C5.02944 18.9069 0.999999 14.8983 1 9.95343C1 5.00859 5.02944 0.999999 10 0.999999C14.9706 1 19 5.00859 19 9.95343C19 14.8983 14.9706 18.9069 10 18.9069Z"
        stroke="#F04D4B"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
