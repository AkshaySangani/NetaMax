import { IInvoice } from "../IInvoice";

export interface IInvoicesState {
  /**
   * Invoices List
   * @type {IInvoice}
   */
  invoices: IInvoice[];

  /**
   * Is Loading Invoices
   * @type {boolean}
   */
  isLoadingInvoices: boolean;
}
