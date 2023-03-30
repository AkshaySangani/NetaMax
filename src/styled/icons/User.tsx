import { ReactElement } from "react";

/**
 * The icon for the user.
 * @param {IconProps} props The props of the component.
 * @returns {ReactElement} the icon
 */
export default function IconUser(props: { isActive: boolean }): ReactElement {
  const opacityValue = props.isActive ? "1.0" : "0.4";

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 19C6 16.7909 8.68629 15 12 15C15.3137 15 18 16.7909 18 19"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
