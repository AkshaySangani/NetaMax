import { IClient } from "../IClient";

export interface IClientsState {
  /**
   * The array of clients
   * @type {IClient}
   */
  clients: IClient[];

  /**
   * Determines if clients is loading
   * @type {number}
   */
  isLoadingClients: boolean;
}
