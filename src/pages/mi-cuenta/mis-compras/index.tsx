import React, { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { MisComprasContainer } from "containers/MisCompras/MisComprasContainer";

/**
 * The page with user order's list and tutorial to buy in Neta.
 * @returns {ReactElement} The order's list and tutorial page.
 */
const MisCompras = (): ReactElement => {
  return <MisComprasContainer />;
};

MisCompras.Layout = LayoutContainer;

export default MisCompras;
