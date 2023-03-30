export interface IGMVCardProps {
  /**
   * The card description
   * @type{string}
   */
  cardDescription: string;

  /**
   * The reward amount
   * @type{string}
   **/
  priceAmount: number;

  /**
   * The card's title
   * @type {string}
   */
  title: string;

  /**
   * Sends the user back to home function
   *  @type {() => void}
   * */
  backToHome: () => void;

  /**
   * The progress bar value based on basket total
   * @type {number}
   */
  progressBarValue: number;

  /**
   * If the user complete the challenge or not yet.
   * @type {boolean}
   */
  completed?: boolean;

  /**
   * End date for the challenge
   * @type {Date}
   */
  endChallenge?: Date;

  /**
   * GMV Threshold value to handle the progressbar
   * @type {number}
   */
  GMVThreshold: number;
}
