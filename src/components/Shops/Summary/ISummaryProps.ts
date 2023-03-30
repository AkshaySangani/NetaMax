import { IModalInvoice } from "dataflows/Shops/IModalInvoice";

export interface ISummaryProps {
  /**
   * The invoice´s Id
   * @type {String}
   *
   * */
  invoiceId: string;
  /**
   * The phone number
   * @type {String}
   *
   * */
  storeStatus: string;
  /**
   * The phone number
   * @type {Number}
   *
   * */
  qtyOrders: number;
  /**
   * The phone number
   * @type {Number}
   *
   * */
  driverAmount: number;
  /**
   * The phone number
   * @type {Number}
   *
   * */
  earningsAmount: number;
  /**
   * The phone number
   * @type {Number}
   *
   * */
  qtyProducts: number;
  /**
   * The phone number
   * @type {String}
   *
   * */
  invoiceUrl: string;
  /**
   * The phone number
   * @type {String}
   *
   * */
  trackUrl: string;
  /**
   * Url of invoice on pdf
   * @type {String}
   *
   * */
  pdfUrl: string;
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
   * function to open the ModalInvoice
   * @type {void}
   *
   * */
  onOpen: () => void;
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
   * Payload of getSummaryInvoice()
   * @type {IModalInvoice}
   *
   * */
  modalInvoice?: IModalInvoice;
}
