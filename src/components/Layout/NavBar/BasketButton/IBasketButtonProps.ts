export interface IBasketButtonProps {
  /**
   * The total number of items in the basket.
   * @type {number}
   */
  totalItems: number;

  /**
   * The function to call when the button is clicked.
   * @type {() => void}
   */
  onClick: () => void;

  /**
   * The ref to the button.
   * @type {React.RefObject<HTMLButtonElement>}
   */
  btnRef: React.RefObject<HTMLButtonElement>;
}
