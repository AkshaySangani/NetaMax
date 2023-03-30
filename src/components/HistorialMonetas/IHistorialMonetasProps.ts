import { ICoins } from "dataflows/GanaDinero/ICoins";
import { IHistorialMonetas } from "dataflows/Monetas/IHistorialMonetas";

export interface IHistorialMonetasProps {
  /**
   * The monetas history array
   * @type {IHistorialMonetas[]}
   */
  monetasHistory?: IHistorialMonetas[];

  /**
   * The Coins object.
   * @type {ICoins}
   */
  coins?: ICoins;

  /**
   * Indicates if there are more monetas to load.
   * @type {boolean}
   */
  hasMoreMonetas: boolean;

  /**
   * load the next page of monetas
   * @type {() => void}
   **/
  loadNextPage: () => void;
}
