import { ReactElement } from "react";

/**
 * The icon for the Mi Cuenta section.
 * @param {Record<string, unknown>} props props.
 * @returns {ReactElement} The icon.
 */
export default function UserIcon(props: Record<string, unknown>): ReactElement {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1998 12C23.1998 18.1856 18.1854 23.2 11.9998 23.2C5.8142 23.2 0.799805 18.1856 0.799805 12C0.799805 5.8144 5.8142 0.799988 11.9998 0.799988C18.1854 0.799988 23.1998 5.8144 23.1998 12ZM14.7998 7.79999C14.7998 9.34639 13.5462 10.6 11.9998 10.6C10.4534 10.6 9.19979 9.34639 9.19979 7.79999C9.19979 6.25359 10.4534 4.99999 11.9998 4.99999C13.5462 4.99999 14.7998 6.25359 14.7998 7.79999ZM11.9997 13.4C9.17513 13.4 6.74131 15.0729 5.63502 17.482C7.17543 19.2688 9.4555 20.4 11.9998 20.4C14.544 20.4 16.824 19.2689 18.3644 17.4821C17.2581 15.073 14.8243 13.4 11.9997 13.4Z"
        fill={props.fill as string}
      />
    </svg>
  );
}
