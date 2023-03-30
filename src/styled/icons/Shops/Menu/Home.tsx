import { ReactElement } from "react";

/**
 * The icon for the home icon.
 * @param {IconProps} props the component props
 * @returns {ReactElement} The home icon.
 */
export default function IconHome(props: { isActive: boolean }): ReactElement {
  const opacityValue = props.isActive ? "1.0" : "0.4";

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.6585 9.70153L12.6585 3.57653C12.2815 3.24663 11.7185 3.24663 11.3415 3.57652L4.3415 9.70153C4.12448 9.89141 4 10.1657 4 10.4541V19.0003C4 19.5526 4.44772 20.0003 5 20.0003H9C9.55228 20.0003 10 19.5526 10 19.0003V15.0003C10 14.448 10.4477 14.0003 11 14.0003H13C13.5523 14.0003 14 14.448 14 15.0003V19.0003C14 19.5526 14.4477 20.0003 15 20.0003H19C19.5523 20.0003 20 19.5526 20 19.0003V10.4541C20 10.1657 19.8755 9.89141 19.6585 9.70153Z"
        stroke="#353535"
        strokeOpacity={opacityValue}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
