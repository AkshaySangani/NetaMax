import { ReactElement } from "react";

import { CategoriesContainer } from "containers/Categories/CategoriesContainer";
import { LayoutContainer } from "containers/Layout/LayoutContainer";

/**
 * The home page of Neta.
 * @returns {ReactElement} The home page.
 */
const Category = (): ReactElement => {
  return <CategoriesContainer />;
};

Category.Layout = LayoutContainer;

export default Category;
