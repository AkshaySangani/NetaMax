export interface ITokenSuccessContainerProps {
  /**
   * The form token.
   * @type {string}
   */
  code: string;

  /**
   * Redirect to the verification phone step
   * @type {() => void}
   **/
  onVerify?: (number: number) => void;
}
