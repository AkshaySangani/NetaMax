import React, { ReactElement } from "react";

import { EnGrupoContainer } from "containers/EnGrupo/EnGrupoContainer";
import { LayoutContainer } from "containers/Layout/LayoutContainer";

/**
 * The page with product list avalialable for Group Buying.
 * @returns {ReactElement} The product list avalialable for Group Buying
 */
const EnGrupo = (): ReactElement => {
  return <EnGrupoContainer />;
};

EnGrupo.Layout = LayoutContainer;

export default EnGrupo;
