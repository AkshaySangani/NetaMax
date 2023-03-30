export interface IOrderConfirmedContainerProps {
  /**
   * Close the Pick-up panel
   * @type {() => void}
   **/
  onClose: () => void;

  /**
   * Redirect to the verification phone step
   * @type {() => void}
   **/
  onVerify: (number: number) => void;
}
