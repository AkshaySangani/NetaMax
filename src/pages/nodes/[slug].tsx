import { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { NodeContainer } from "containers/Node/NodeContainer";
import { useRouter } from "next/router";

/**
 * The page with products per promotion.
 * @returns {ReactElement} The promotion details page.
 */
const NodesDetails = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <NodeContainer nodeId={slug as string} />;
};

NodesDetails.Layout = LayoutContainer;

export default NodesDetails;
