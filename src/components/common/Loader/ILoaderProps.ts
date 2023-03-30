export interface ILoaderProps {
  /**
   * The thickness of the loader
   * @type {string}
   */
  thickness?: string;

  /**
   * The speed of the loader
   * @type {string}
   */
  speed?: string;

  /**
   * The empty color of the loader
   * @type {string}
   **/
  emptyColor?: string;

  /**
   * The full color of the loader
   * @type {string}
   */
  color?: string;

  /**
   * The size of the loader
   * @type {string}
   **/
  size?: string;

  /**
   * The delay in seconds before the loader is shown
   * @type {number}
   **/
  delay?: number;
}
