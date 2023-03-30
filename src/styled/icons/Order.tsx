import { ReactElement } from "react";

/**
 * The icon for the arrow full top.
 * @param {any} props props
 * @returns {ReactElement} The icon.
 */
export default function Order(props: { display?: string; fill?: string }): ReactElement {
  return (
    <svg
      width="15"
      height="18"
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.83276 9.87623C5.44223 9.4857 4.80907 9.4857 4.41854 9.87623C4.02802 10.2668 4.02802 10.8999 4.41854 11.2904L5.83276 9.87623ZM6.70898 12.1667L6.00188 12.8738C6.3924 13.2643 7.02557 13.2643 7.41609 12.8738L6.70898 12.1667ZM10.5828 9.70711C10.9733 9.31658 10.9733 8.68342 10.5828 8.29289C10.1922 7.90237 9.55907 7.90237 9.16854 8.29289L10.5828 9.70711ZM12.0423 5.04167V14.5417H14.0423V5.04167H12.0423ZM11.459 15.125H3.54232V17.125H11.459V15.125ZM2.95898 14.5417V5.04167H0.958984V14.5417H2.95898ZM3.54232 4.45833H5.12565V2.45833H3.54232V4.45833ZM9.87565 4.45833H11.459V2.45833H9.87565V4.45833ZM3.54232 15.125C3.22015 15.125 2.95898 14.8638 2.95898 14.5417H0.958984C0.958984 15.9684 2.11558 17.125 3.54232 17.125V15.125ZM12.0423 14.5417C12.0423 14.8638 11.7812 15.125 11.459 15.125V17.125C12.8857 17.125 14.0423 15.9684 14.0423 14.5417H12.0423ZM14.0423 5.04167C14.0423 3.61493 12.8857 2.45833 11.459 2.45833V4.45833C11.7812 4.45833 12.0423 4.7195 12.0423 5.04167H14.0423ZM2.95898 5.04167C2.95898 4.7195 3.22015 4.45833 3.54232 4.45833V2.45833C2.11558 2.45833 0.958984 3.61493 0.958984 5.04167H2.95898ZM4.41854 11.2904L6.00188 12.8738L7.41609 11.4596L5.83276 9.87623L4.41854 11.2904ZM7.41609 12.8738L10.5828 9.70711L9.16854 8.29289L6.00188 11.4596L7.41609 12.8738ZM6.70898 2.875H8.29232V0.875H6.70898V2.875ZM8.29232 4.04167H6.70898V6.04167H8.29232V4.04167ZM6.70898 4.04167C6.38682 4.04167 6.12565 3.7805 6.12565 3.45833H4.12565C4.12565 4.88507 5.28225 6.04167 6.70898 6.04167V4.04167ZM8.87565 3.45833C8.87565 3.7805 8.61448 4.04167 8.29232 4.04167V6.04167C9.71905 6.04167 10.8757 4.88507 10.8757 3.45833H8.87565ZM8.29232 2.875C8.61448 2.875 8.87565 3.13617 8.87565 3.45833H10.8757C10.8757 2.0316 9.71905 0.875 8.29232 0.875V2.875ZM6.70898 0.875C5.28225 0.875 4.12565 2.0316 4.12565 3.45833H6.12565C6.12565 3.13617 6.38682 2.875 6.70898 2.875V0.875Z"
        fill="#2F3346"
      />
    </svg>
  );
}
