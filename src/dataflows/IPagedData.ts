export interface IPagedData<T> {
  /**
   * The array of records.
   * @type {T[]}
   */
  records: Array<T>;

  /**
   * The metadata of the paged data.
   * @type {IPaginatedMetadata}
   */
  metadata: IPaginatedMetadata;
}

export interface IPaginatedMetadata {
  /**
   * The current page.
   * @type {number}
   */
  currentPage: number;

  /**
   * The items per page.
   * @type {number}
   **/
  perPage: number;

  /**
   * The total number of pages.
   * @type {number}
   */
  totalPages: number;
}
