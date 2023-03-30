export interface IDisplayable<T> {
  /**
   * The key of the displayable.
   * @type {string}
   */
  key: string;

  /**
   * The displayable's value.
   * @type {T}
   **/
  value: T;
}
