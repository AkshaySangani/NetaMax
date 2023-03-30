export interface IIncrementalBasketButtonProps {
  /**
   * The minimum value of the button.
   * @type {number}
   **/
  min?: number;

  /**
   * The maximum value of the button.
   * @type {number}
   */
  max?: number;

  /**
   * The current value of the button.
   * @type {number}
   **/
  defaultValue?: number;

  /**
   * The width of the button.
   * @type {number}
   */
  width?: number;

  /**
   * Action to be performed when the button add is clicked.
   * @type {() => void}
   */
  onAdd: () => void;

  /**
   * Action to be performed when the button subtract is clicked.
   * @type {() => void}
   */
  onSubtract: () => void;

  /**
   * Custom height for the incremental button.
   * @type {number}
   **/
  customHeight?: string;

  /**
   * Custom width for the incremental button.
   * @type {number}
   **/
  customWidth?: string;

  /**
   * Custom border-raduis for the incremental button.
   * @type {number}
   **/
  customBorderRadius?: string;
}
