import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IStoreByDefaultContainerProps extends ICheckoutStepContainerProps {
  /**
   * Redirect to the previuos step
   * @type {() => void}
   */
  loadPreviousStep: () => void;
}
