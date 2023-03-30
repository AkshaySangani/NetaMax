import { RootState } from "state/store";

import { IClient } from "../IClient";

/**
 * Selector to get the clients list
 * @param {RootState} state the root state
 * @returns {IClient} the client value
 */
export const selectClients = (state: RootState): IClient[] | undefined =>
  state.shops.clients.clients;

/**
 * Selector to get the selectIsLoadingClients state
 * @param {RootState} state the root state
 * @returns {Boolean} the selectIsLoadingClients state
 */
export const selectIsLoadingClients = (state: RootState): boolean =>
  state.shops.clients.isLoadingClients;
