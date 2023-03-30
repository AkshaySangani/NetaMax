import React, { ReactElement } from "react";

import withAuth from "components/Shops/withAuth";
import { ClientsContainer } from "containers/Shops/Clients/ClientsContainer";

/**
 * The page with the shop user's clients
 * @returns {ReactElement} The clients user page.
 */
const Clients = (): ReactElement => {
  return <ClientsContainer />;
};

export default withAuth(Clients);
