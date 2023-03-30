import { IPagedData } from "dataflows/IPagedData";

import { IHistorialMonetas } from "./IHistorialMonetas";

export interface IHistorialMonetasState {
  /**
   * Flag that indicates if the monetas History is loading.
   * @type {boolean}
   */
  isLoadingMonetas: boolean;

  /**
   * Monetas history
   * @type {Record<string,IPagedData<IHistorialMonetas>}
   */
  monetasItems: IPagedData<IHistorialMonetas>;
}
