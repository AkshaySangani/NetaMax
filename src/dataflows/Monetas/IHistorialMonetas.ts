export interface IHistorialMonetas {
  /**
   * The unique identifier for the item.
   * @type {string}
   */
  Id: string;

  /**
   * The movement type.
   * @type {number}
   */
  MovementType: number;

  /**
   * Movement description
   * @type {string}
   */
  MovementDescription: string;

  /**
   * Item Order Id
   * @type {number}
   */
  OrderId?: number;

  /**
   * Item amount.
   * @type {Date}
   */
  Amount: number;

  /**
   * Date the discount was applied.
   * @type {Date}
   */
  CreatedOnUtc: Date;

  /**
   * Monetas spent
   * @type {Date}
   */
  coins: number;
}
