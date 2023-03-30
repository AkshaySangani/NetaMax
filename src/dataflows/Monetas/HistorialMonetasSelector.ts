import { IPaginatedMetadata } from "dataflows/IPagedData";
import { RootState } from "state/store";

import { IHistorialMonetas } from "./IHistorialMonetas";

/**
 * Selector to get the HistorialMonetas products.
 * @param {RootState} state the root state
 * @returns {IHistorialMonetas[]} the HistorialMonetas.
 */
export const selectHistorialMonetasRecords = (state: RootState): IHistorialMonetas[] =>
  state.monetas.monetasItems.records;
/**
 * Selector to get the HistorialMonetas page metadata state from the state.
 * @param {RootState} state the root state
 * @returns {boolean} the historialMonetas page metadata
 */
export const selectHistorialMonetasMetadata = (state: RootState): IPaginatedMetadata =>
  state.monetas.monetasItems.metadata;

/**
 * Selector to get the isLoadingHistorialMonetas
 * @param {RootState} state the root state.
 * @returns {boolean} the isLoadingHistorialMonetas.
 */
export const selectIsLoadingHistorialMonetas = (state: RootState): boolean =>
  state.monetas.isLoadingMonetas;
