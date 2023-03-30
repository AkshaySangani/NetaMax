export interface ISKUCardProps {
  /**
   * The card's title
   * @type {string}
   */
  title: string;

  /**
   * Product required number to complete the challenge
   * @type {number}
   */
  requiredItems: number;

  /**
   * Coins obtained when completing the challenge
   * @type {string | number}
   */
  awardCoins: string | number;

  /**
   * Boolean prop that changes the card to in progress state
   * @type boolean
   */
  accepted?: boolean;

  /**
   * Boolean prop that changes the card to completed state
   * @type boolean
   */
  completed?: boolean;

  /**
   * End date for the challenge
   * @type {Date}
   */
  endDate?: Date;

  /**
   * The progress bar value based on basket total
   * @type {number}
   */
  progressBarValue: number;

  /**
   * Button action to start the challenge
   * @type void function;
   */
  buttonAction: () => void;

  /**
   * Boolean that enables a different set of colors
   * @type boolean;
   */
  secondaryColor?: boolean;

  /**
   * Image to display
   * @type number
   */
  image?: string;
}
