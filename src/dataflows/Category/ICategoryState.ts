import { ICategory } from "./ICategory";

export interface ICategoryState {
  /**
   * The array categories.
   * @type {ICategory[]}
   */
  categoryItems: ICategory[];

  /**
   * Indicates if the categories are loading.
   * @type {boolean}
   */
  isLoading: boolean;

  /**
   * Category selected
   * @type {ICategory}
   **/
  selectedCategory?: ICategory;
}
