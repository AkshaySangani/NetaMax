import React, { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { MiCuentaContainer } from "containers/MiCuenta/MiCuentaContainer";

/**
 * The page with user admin.
 * @returns {ReactElement} The order's list and tutorial page.
 */
const MiCuenta = (): ReactElement => {
  return <MiCuentaContainer />;
};

MiCuenta.Layout = LayoutContainer;

export default MiCuenta;
