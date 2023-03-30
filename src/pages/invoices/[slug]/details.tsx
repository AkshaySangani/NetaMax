import React, { ReactElement } from "react";

import withAuth from "components/Shops/withAuth";
import { OrderContainer } from "containers/Shops/Orders/OrderContainer";
import { useRouter } from "next/router";

/**
 * The page with the orders data
 * @returns {ReactElement} The order's data page.
 */
const Orders = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <OrderContainer orderId={slug as string} />;
};

export default withAuth(Orders);
