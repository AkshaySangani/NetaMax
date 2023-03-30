import { ReactElement } from "react";

/**
 * The icon for the clients icon.
 * @param {IconProps} props the component props
 * @returns {ReactElement} The clients icon.
 */
export default function IconClients(props: { isActive: boolean }): ReactElement {
  const opacityValue = props.isActive ? "1.0" : "0.4";

  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.83325 20C7.83325 18.3431 10.0718 17 12.8333 17C15.5947 17 17.8333 18.3431 17.8333 20"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8333 14.25C20.5992 14.7129 21.8333 15.7702 21.8333 17.0004"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.83325 14.25C5.06735 14.7129 3.83325 15.7702 3.83325 17.0004"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.8333 14C14.4901 14 15.8333 12.6569 15.8333 11C15.8333 9.34315 14.4901 8 12.8333 8C11.1764 8 9.83325 9.34315 9.83325 11C9.83325 12.6569 11.1764 14 12.8333 14Z"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.8333 10.2361C19.447 9.68679 19.8333 8.8885 19.8333 8C19.8333 6.34315 18.4901 5 16.8333 5C16.0649 5 15.364 5.28885 14.8333 5.76389"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.83325 10.2361C6.2195 9.68679 5.83325 8.8885 5.83325 8C5.83325 6.34315 7.1764 5 8.83325 5C9.60161 5 10.3025 5.28885 10.8333 5.76389"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
