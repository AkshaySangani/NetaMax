import { IClient } from "dataflows/Shops/IClient";

export interface IClientDetailProps extends IClient {
  /**
   * The store's name
   * @type {string}
   */
  storeName?: string;

  /**
   * Callback to handle the click on the share link button
   * @type {() => void}
   */
  onShareButtonClick?: () => void;
}
