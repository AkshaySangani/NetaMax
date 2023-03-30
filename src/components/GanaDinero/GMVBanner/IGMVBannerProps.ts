export interface IGMVBannerProps {
  /**
   * Coins obtained when completing the challenge
   * @type {number}
   */
  coins: number;

  /**
   * The progress bar value based on basket total
   * @type {number}
   */
  progressBarValue: number;

  /**
   * The current amount on the basket
   * @type {number}
   */
  requiredAmount?: number;

  /**
   * GMV Threshold value to handle the progressbar
   * @type {number}
   */
  GMVThreshold: number;

  /**
   * Flag to hide the progress bar then the checkout is opened
   * @type {boolean}
   */
  checkoutOpened: boolean;

  /**
   * Action when pressing the button from the complete status
   * @type {() => void}
   */
  buttonAction: () => void;
}
