import React, { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { OrderDetailsContainer } from "containers/OrderDetails/OrderDetailsContainer";
import { useRouter } from "next/router";

/**
 * The page with the details of any given order.
 * @returns {ReactElement} The order's details page.
 */
const OrderDetails = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <OrderDetailsContainer orderId={slug as string} />;
};

OrderDetails.Layout = LayoutContainer;

export default OrderDetails;
