import { ReactElement } from "react";

/**
 * The icon for the orders icon
 * @param {IconProps} props the component props
 * @returns {ReactElement} The Orders icon.
 */
export default function IconOrders(props: { isActive: boolean }): ReactElement {
  const opacityValue = props.isActive ? "1.0" : "0.4";

  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.16675 17H4.16675C3.61446 17 3.16675 16.5523 3.16675 16L3.16675 8C3.16675 7.44772 3.61446 7 4.16675 7L20.1667 7C20.719 7 21.1667 7.44771 21.1667 8V16C21.1667 16.5523 20.719 17 20.1667 17H18.1667"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.16675 21L17.1667 21C17.719 21 18.1667 20.5523 18.1667 20V16C18.1667 15.4477 17.719 15 17.1667 15L7.16675 15C6.61446 15 6.16675 15.4477 6.16675 16L6.16675 20C6.16675 20.5523 6.61446 21 7.16675 21Z"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.1667 11H14.1667"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.16675 7L17.1667 7C17.719 7 18.1667 6.55229 18.1667 6V4C18.1667 3.44772 17.719 3 17.1667 3L7.16675 3C6.61446 3 6.16675 3.44772 6.16675 4L6.16675 6C6.16675 6.55229 6.61446 7 7.16675 7Z"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
