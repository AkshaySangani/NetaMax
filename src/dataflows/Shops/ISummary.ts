export interface ISummary {
  /**
   * The Orders's Id
   * @type {string}
   * */
  id: string;
  /**
   * The invoice's Id
   * @type {string}
   * */
  invoiceId: string;
  /**
   * The earnings amount
   * @type {number}
   * */
  earningsAmount: number;
  /**
   * The driver amount
   * @type {number}
   * */
  driverAmount: number;
  /**
   * The orders amount
   * @type {number}
   * */
  ordersAmount: number;
  /**
   * Quantity of orders
   * @type {number}
   * */
  qtyOrders: number;
  /**
   * Quantity of products
   * @type {number}
   * */
  qtyProducts: number;
  /**
   * The Inovie status
   * @type {String}
   * */
  invoiceStatus: string;
  /**
   * The Url for pdf
   * @type {String}
   * */
  invoiceUrl: string;
  /**
   * The Tracking status
   * @type {String}
   * */
  trackStatus: string;
  /**
   * The Url for Tracking service
   * @type {String}
   * */
  trackUrl: string;
  /**
   * The Url for Tracking service
   * @type {String}
   * */
  storeStatus: string;
  /**
   * The Date
   * @type {Date}
   * */
  dateFrom: Date;
  /**
   * The Date
   * @type {Date}
   * */
  dateTo: Date;
  /**
   * handleOnInvoiceClick action
   * @type {void}
   *
   * */
  handleOnInvoiceClick: () => void;
  /**
   * handleOnTrackClick action
   * @type {void}
   *
   * */
  handleOnTrackClick: () => void;
  /**
   * Url of invoice on pdf
   * @type {String}
   *
   * */
  pdfUrl: string;
  /**
   * function to close the ModalInvoice
   * @type {void}
   *
   * */
  onClose: () => void;

  /**
   * indicate if Modal is open
   * @type {boolean}
   *
   * */
  isOpenModal: boolean;
  /**
   * function to open the ModalInvoice
   * @type {void}
   *
   * */
  onOpen: () => void;
}
