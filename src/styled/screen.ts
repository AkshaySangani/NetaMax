/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable require-jsdoc */

export const screenSizes = {
  xs: 320,
  sm: 768,
  md: 1024,
  lg: 1440,
  xl: 1800,
  get xsMin() {
    return this.xs;
  },
  get xsMax() {
    return this.sm - 1;
  },
  get smMin() {
    return this.sm;
  },
  get smMax() {
    return this.md - 1;
  },
  get mdMin() {
    return this.md;
  },
  get mdMax() {
    return this.lg - 1;
  },
  get lgMin() {
    return this.lg;
  },
  get lgMax() {
    return this.xl - 1;
  },
  get xlMin() {
    return this.xl;
  },
};
