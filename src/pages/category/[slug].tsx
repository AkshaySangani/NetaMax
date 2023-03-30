import { ReactElement } from "react";

import { CategoryContainer } from "containers/Category/CategoryContainer";
import { LayoutContainer } from "containers/Layout/LayoutContainer";
import { useRouter } from "next/router";

/**
 * The home page of Neta.
 * @returns {ReactElement} The home page.
 */
const Category = (): ReactElement => {
  const router = useRouter();
  const { slug } = router.query;

  return <CategoryContainer categoryId={slug as string} />;
};

Category.Layout = LayoutContainer;

export default Category;
