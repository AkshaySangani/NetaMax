import { ICategory } from "dataflows/Category/ICategory";

export interface ICategoryCardProps {
  /**
   * The categories to display
   * @type {ICategory}
   */
  category: ICategory;

  /**
   * On category click action.
   * @type {(category: ICategory) => void}
   */
  onCategoryClick: (category: ICategory) => void;
}
