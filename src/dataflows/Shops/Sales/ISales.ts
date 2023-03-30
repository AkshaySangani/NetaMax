import { IPagedData } from "dataflows/IPagedData";

import { IOrderShops } from "../IOrderShops";
import { ISummary } from "../ISummary";

export interface ISales extends IPagedData<IOrderShops> {
  summary: ISummary;
}
