import { ReactElement } from "react";

import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { PromotionContainer } from "containers/Promotion/PromotionContainer";
import { useRouter } from "next/router";

/**
 * The page with products per promotion.
 * @returns {ReactElement} The promotion details page.
 */
const PromotionsDetails = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <PromotionContainer promotionId={slug as string} />;
};

PromotionsDetails.Layout = LayoutContainer;

export default PromotionsDetails;
