import React, { ReactElement } from "react";

import { GanaDineroContainer } from "containers/GanaDinero/GanaDineroContainer";
import { LayoutContainer } from "containers/Layout/LayoutContainer";

/**
 * The page with the details of any given order.
 * @returns {ReactElement} The order's details page.
 */
const GanaDinero = (): ReactElement => {
  return <GanaDineroContainer />;
};

GanaDinero.Layout = LayoutContainer;

export default GanaDinero;
