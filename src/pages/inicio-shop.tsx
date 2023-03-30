import React, { ReactElement } from "react";

import withAuth from "components/Shops/withAuth";
import { InicioShopContainer } from "containers/Shops/InicioShop/InicioShopContainer";

/**
 * The page with the shop user's invoices
 * @returns {ReactElement} The InvoicesContainer
 */
const InicioShop = (): ReactElement => {
  return <InicioShopContainer />;
};

export default withAuth(InicioShop);
