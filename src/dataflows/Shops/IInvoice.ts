export interface IInvoice {
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
   * @type {number}
   *
   * */
  subTotal: number;

  /**
   * The Invoice Disscount
   * @type {number}
   *
   * */
  //TODO: Check with business the grammar of 'Disscount'
  orderDisccount: number;

  /**
   * The Store Commision
   * @type {number}
   *
   **/
  //TODO: Check with business the grammar of 'Commisssion'
  storeCommisssion: number;
}
