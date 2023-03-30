import React, { ReactElement } from "react";

import { HistorialMonetasContainer } from "containers/HistorialMonetas/HistorialmonetasContainer";
import { LayoutContainer } from "containers/Layout/LayoutContainer";

/**
 * The Historial Monetas page
 * @returns {ReactElement} The historial monetas list
 */
const HistorialMonetas = (): ReactElement => {
  return <HistorialMonetasContainer />;
};

HistorialMonetas.Layout = LayoutContainer;

export default HistorialMonetas;
