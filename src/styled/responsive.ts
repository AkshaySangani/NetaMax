import { screenSizes } from "./screen";

// Ready made media queries
export const responsive = {
  xsAndMin: `@media (max-width: ${screenSizes.xsMin}px)`,
  xs: `@media (max-width: ${screenSizes.xsMax}px)`,
  smAndLess: `@media (max-width: ${screenSizes.smMax}px)`,
  smPlus: `@media (min-width: ${screenSizes.smMin}px)`,
  sm: `@media (min-width: ${screenSizes.smMin}px) and (max-width: ${screenSizes.smMax}px)`,
  mdAndLess: `@media (max-width: ${screenSizes.mdMax}px)`,
  mdPlus: `@media (min-width: ${screenSizes.mdMin}px)`,
  md: `@media (min-width: ${screenSizes.mdMin}px) and (max-width: ${screenSizes.mdMax}px)`,
  lg: `@media (min-width: ${screenSizes.lgMin}px) and (max-width: ${screenSizes.lgMax}px)`,
  lgPlus: `@media (min-width: ${screenSizes.lgMin}px)`,
  xl: `@media (min-width: ${screenSizes.xlMin}px)`,
};
