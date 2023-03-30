import React, { ReactElement } from "react";

import withAuth from "components/Shops/withAuth";
import { InvoicesContainer } from "containers/Shops/Invoices/InvoicesContainer";

/**
 * The page with the shop user's invoices
 * @returns {ReactElement} The InvoicesContainer
 */
const Invoices = (): ReactElement => {
  return <InvoicesContainer />;
};

export default withAuth(Invoices);
