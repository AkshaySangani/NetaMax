import { IModalInvoice } from "dataflows/Shops/IModalInvoice";

export interface IModalInvoiceProps {
  /**
   * Payload of getModalInvoice()
   * @type {IModalInvoice}
   * */
  modalInvoice: IModalInvoice;

  credit: {
    InvoiceType: number;
    creditToPay: number;
    dayOfWeek: number;
    dropToPay: number;
    totalToPayToday: number;
  };

  invoice: {
    createdOnUtc: string;
    customerDebit: number;
    deliveryStatus: string;
    id: string;
    invoiceDate: string;
    orderDisccount: number;
    orders: string;
    pdfUrl: string;
    qtyCustomers: number;
    qtyOrders: number;
    status: string;
    storeCommisssion: number;
    storeDebit: number;
    storeId: string;
    storeName: string;
    storeOwner: string;
    storePhone: string;
    subTotal: number;
  };

  metadata: {
    currentPage: number;
    nextRefresh: number;
    perPage: number;
    totalPages: number;
    updatedAt: string;
  };

  orderItems: Array<{
    PriceInclTax: number;
    Quantity: number;
    UnitPriceInclTax: number;
    id: number;
    idProduct: number;
    name: string;
  }>;

  storeProfit: {
    historical: number;
    month: number;
    profitmonthdatefrom: string;
    profitweekdatefrom: string;
    today: number;
    week: number;
    profitweekdateto: string;
  };
  /**
   * indicate if Modal is open
   * @type {boolean}
   * */
  isOpenModal: boolean;
  /**
   * function to close the ModalInvoice
   * @type {void}
   * */
  onClose: () => void;
  /**
   * function to open the ModalInvoice
   * @type {void}
   * */
  onOpen: () => void;
}
