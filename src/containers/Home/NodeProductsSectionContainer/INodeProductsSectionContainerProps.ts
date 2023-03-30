import { ISectionContainerProps } from "../ISectionContainerProps";

export interface INodeProductsSectionContainerProps
  extends Pick<ISectionContainerProps, "onProductClick"> {
  /**
   * Set to true the flag once all node products are displayed.
   * @type {(nodesAreDisplayed: boolean) => void}
   */
  setNodesAreDisplayed: (nodesAreDisplayed: boolean) => void;
}
