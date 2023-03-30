export interface ICardHistoryProps {
  /**
   * The detail card history card
   * @type {string}
   */
  detail: string;

  /**
   * The amount card history card
   * @type {number}
   */
  amount: number;

  /**
   * The date card history card
   * @type {Date}
   */
  date: Date;

  /**
   * The orderId card history card
   * @type {number}
   */
  orderId?: number;

  /**
   * The movementTypeId card history card
   * @type {number}
   */
  movementTypeId: number;
}
