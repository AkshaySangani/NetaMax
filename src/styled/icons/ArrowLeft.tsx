import { ReactElement } from "react";

/**
 * The icon for the basket button.
 * @returns {ReactElement} The icon.
 */
export default function LeftArrow(): ReactElement {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0.714528 7.62962L9.44479 7.62962C9.49765 7.63013 9.54476 7.66306 9.5634 7.71253C9.58204 7.762 9.56836 7.81783 9.52898 7.85309L5.12227 11.7307C4.83432 12.0022 4.81315 12.453 5.07441 12.7503C5.33566 13.0476 5.78544 13.0845 6.09168 12.8338L11.7964 7.8138C12.0599 7.58135 12.2109 7.24685 12.2109 6.89542C12.2109 6.54398 12.0599 6.20949 11.7964 5.97704L6.0927 0.958069C5.78633 0.710609 5.33933 0.748739 5.07929 1.0445C4.81925 1.34026 4.83866 1.78846 5.1233 2.06064L9.53001 5.93826C9.5694 5.97352 9.58307 6.02935 9.56444 6.07882C9.5458 6.12829 9.49869 6.16122 9.44583 6.16173L0.714548 6.16173C0.316468 6.17223 -0.000791935 6.49796 -0.00079197 6.89618C-0.000792005 7.2944 0.316458 7.62013 0.714548 7.63063L0.714528 7.62962Z"
        fill="#F7F7F7"
      />
    </svg>
  );
}
