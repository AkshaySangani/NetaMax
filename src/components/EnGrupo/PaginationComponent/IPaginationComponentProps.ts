export interface IPaginationComponentProps {
  /**
   * Page for accordion.
   * @type {number}
   */
  page: number;

  /**
   * TotalPage for accordion.
   * @type {number}
   */
  totalPage: number;

  /**
   * OnChangePage for accordion.
   * @type {(page: number) => void}
   */
  onChangePage: (page: number) => void;
}
