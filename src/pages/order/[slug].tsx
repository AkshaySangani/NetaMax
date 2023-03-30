import React, { ReactElement } from "react";

import withAuth from "components/Shops/withAuth";
import { OrderDetailsContainer } from "containers/Shops/AdminOrderDetails/OrderDetailsContainer";
import { useRouter } from "next/router";

/**
 * The page with the details of any given shop's order.
 * @returns {ReactElement} The shop's orders details page.
 */
const OrderShopsDetails = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <OrderDetailsContainer orderId={slug as string} />;
};

export default withAuth(OrderShopsDetails);
