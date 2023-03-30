import { IPagedData } from "dataflows/IPagedData";

import { IOrderShops } from "../IOrderShops";
import { ISummary } from "../ISummary";

export interface ISalesState {
  /**
   * Is Loading Invoices
   * @type {boolean}
   */
  isLoadingSales: boolean;

  /**
   * Is Loading Invoices
   * @type {ISummary}
   */
  summary?: ISummary;

  /**
   * Is Loading Invoices
   * @type {IOrderShops}
   */
  orders?: IPagedData<IOrderShops>;
}
