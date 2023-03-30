export interface IAccordionItemComponentProps {
  /**
   * Title for accordion.
   * @type {string}
   */
  title: string;

  /**
   * Products for accordion.
   * @type {Array<{name: string}}}
   */
  products: Array<{ name: string }>;

  /**
   * Page for accordion pagination.
   * @type {number}
   */
  page: number;

  /**
   * TotalPage for accordion pagination.
   * @type {number}
   */
  totalPage: number;
}

export interface IAccordionComponentProps {
  /**
   * Items for accordion.
   * @type {Array<IAccordionItemComponentProps>}
   */
  items: Array<IAccordionItemComponentProps>;

  /**
   * OnChangePagination for accordion pagination.
   * @type {(categoryIndex: number, page: number) => void}
   */
  onChangePagination: (categoryIndex: number, page: number) => void;
}
