export interface IInvoiceProps {
  /**
   * The Orders's Id
   * @type {string}
   *
   * */
  id: string;

  /**
   * The Url PDF Invoice
   * @type {String}
   *
   * */
  pdfUrl: string;

  /**
   * The Order's delivery date
   * @type {String}
   *
   * */
  invoiceDate: string;

  /**
   * The Order's list
   * @type {String}
   *
   * */
  orders: string;

  /**
   * The Invoice created Date
   * @type {String}
   *
   * */
  createdOnUtc: string;

  /**
   * The StoreId owner of invoice
   * @type {String}
   *
   * */
  storeId: string;

  /**
   * The Delivery Status
   * @type {String}
   *
   * */
  deliveryStatus: string;

  /**
   * The subtotal Invoice
   * @type {String}
   *
   * */
  subTotal: number;

  /**
   * The Invoice Disscount
   * @type {String}
   *
   * */
  orderDisccount: number;

  /**
   * The Store Commision
   * @type {String}
   *
   * */
  storeCommisssion: number;

  /**
   * The Url for Tracking service
   * @type {String}
   *
   * */
  trackingUrl: string;

  /**
   * Disables the tracking button
   * @type {boolean}
   *
   * */
  disableTrackingButton?: boolean;

  /**
   * Callback to handle the click on the invoice button
   * @type {() => void}
   */
  onInvoiceClick?: () => void;

  /**
   * Callback to handle the click on the view orders button
   * @type {() => void}
   */
  onViewOrdersClick?: () => void;
}
