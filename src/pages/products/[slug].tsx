import { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { ProductDetailsContainer } from "containers/ProductDetails/ProductDetailsContainer";
import { useRouter } from "next/router";

/**
 * The page with the details of any given product.
 * @returns {ReactElement} The product details page.
 */
const ProductDetails = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <ProductDetailsContainer productId={slug as string} />;
};

ProductDetails.Layout = LayoutContainer;

export default ProductDetails;
