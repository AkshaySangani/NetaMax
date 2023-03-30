import React, { ReactElement } from "react";

import withAuth from "components/Shops/withAuth";
import { InfoContainer } from "containers/Shops/Info/InfoContainer";

/**
 * The page with the shop user's information
 * @returns {ReactElement} The InfoContainer
 */
const Info = (): ReactElement => {
  return <InfoContainer />;
};

export default withAuth(Info);
