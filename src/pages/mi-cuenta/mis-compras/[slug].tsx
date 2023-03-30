import { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { MisComprasDetailContainer } from "containers/MisCompras/Detail/MisComprasDetailContainer";
import { useRouter } from "next/router";

/**
 * The Mis Compras Detail page.
 * @returns {ReactElement} The MisComprasDetail.
 */
const MisComprasDetail = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <MisComprasDetailContainer orderId={slug as string} />;
};

MisComprasDetail.Layout = LayoutContainer;

export default MisComprasDetail;
