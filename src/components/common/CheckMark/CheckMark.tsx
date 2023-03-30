import { ReactElement } from "react";

import { Circle, Path, Svg } from "./CheckMark.styled";
import { ICheckMarkProps } from "./ICheckMarkProps";

const PREDEFINED_SIZE_MAP = {
  xSmall: "16px",
  small: "24px",
  medium: "40px",
  large: "52px",
  xLarge: "72px",
  xxLarge: "96px",
};

/**
 *  The CheckMark component.
 * @param {ICheckMarkProps} props The props of the component.
 * @returns {ReactElement} The CheckMark component.
 */
export const Checkmark = (props: ICheckMarkProps): ReactElement => {
  const { size, color } = props;
  const computedSize = PREDEFINED_SIZE_MAP[size];
  const style: Record<string, string> = { width: computedSize, height: computedSize };
  if (color) {
    style["color"] = color;
  }

  return (
    <Svg className="checkmark" xmlns="http://www.w3.org/2000/svg" style={style} viewBox="0 0 52 52">
      <Circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
      <Path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </Svg>
  );
};
