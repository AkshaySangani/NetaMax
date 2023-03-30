export interface IDiscoveryCardProps {
  /**
   * The card description
   * @type{string}
   */
  cardDescription: string;

  /**
   * Boolean prop that changes the ui to show a different icon, text and button
   * @type boolean
   */
  coinClaimed?: boolean;

  /**
   * Shows loader in the button
   * @type boolean
   */
  loading?: boolean;

  /**
   * Number to start the countdown text
   * @type number
   */
  countDown: number;

  /**
   * Button action
   * @type void function;
   */
  buttonAction: () => void;
}
