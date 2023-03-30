export interface IChallenge {
  /**
   * The challenge id number.
   * @type {number}
   */
  Id: number;

  /**
   * Event id.
   * @type {number}
   */
  PrizeType: number;

  /**
   * Amount of the challenge.
   * @type {number}
   **/
  PriceAmount: number;

  /**
   * Challenge name or identifier name.
   * @type {number}
   **/
  PrizeCategoryName: string;

  /**
   * Challenge date created.
   * @type {Date}
   */
  CreatedOnUTC: Date;

  /**
   * To show the toast in case you don't reach the prize yet but stress about the value.
   * @type {number}
   */
  GMVAlarmThreshold: number;

  /**
   * Value after win the prize.
   * @type {number}
   */
  GMVThreshold: number;

  /**
   * Event type id.
   * @type {number}
   */
  EventID: number;

  /**
   * Amout of times the challenge could be complete.
   * @type {number}
   */
  EventCounts: number;

  /**
   * Challenge description.
   * @type {string}
   */
  CardDescription: string;

  /**
   * Call to action for the challenge.
   * @type {number}
   */
  IncludeCTA: number;

  /**
   * Start of challenge.
   * @type {Date}
   */
  StartTimeUTC: Date;

  /**
   * End of challenge.
   * @type {string}
   */
  EndTimeUTC: string;

  /**
   * String Code to identify challenge parameters for SKU or Category
   * @type {string}
   */
  Code: string;

  /**
   * Boolean flag that marks a challenge as accepted
   * @type {boolean}
   */
  isAccepted: boolean;

  /**
   * Challenge status.
   * @type {number}
   */
  isActive: number;

  /**
   * If the user complete the challenge or not yet.
   * @type {number}
   */
  completed?: boolean;

  /**
   * Value to win the price with code;
   * @type {number}
   */
  CodeThreshold: number;
}
