import { ReactElement } from "react";

export interface IGridSectionProps {
  /**
   * The title of the section
   * @type {string}
   */
  title: string;

  /**
   * The elements to show in the grid.
   * @type {ReactElement[]}
   */
  elements: ReactElement[];
}
