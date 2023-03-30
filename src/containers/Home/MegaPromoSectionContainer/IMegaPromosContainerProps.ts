import { IProduct } from "dataflows/Product/IProduct";

import { ISectionContainerProps } from "../ISectionContainerProps";

export interface IMegaPromosContainerProps extends ISectionContainerProps {
  /**
   * The products to display
   * @type {IProduct[]}
   **/
  megaPromosSectionProducts?: IProduct[];
}
