import { ReactElement } from "react";

/**
 * The icon for the arrow full top.
 * @param {any} props props
 * @returns {ReactElement} The icon.
 */
export default function ArrowFullTop(props: {
  width?: string;
  height?: string;
  fill?: string;
  transform?: string;
}): ReactElement {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="#04A940"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M4.24407 0.372871C4.64284 -0.0875905 5.35716 -0.0875904 5.75593 0.372871L8.76318 3.84535C9.32406 4.49299 8.864 5.5 8.00725 5.5L1.99275 5.5C1.136 5.5 0.675944 4.49299 1.23682 3.84535L4.24407 0.372871Z" />
    </svg>
  );
}
