export interface IOrderDetailsContainerProps {
  /**
   * Close the Pick-up panel
   * @type {() => void}
   **/
  onClose: () => void;

  /**
   * Redirect to the next step
   * @type {() => void}
   **/
  onVerify: (number: number) => void;
}
