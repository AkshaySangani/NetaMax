import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IFindStoreWithMapContainerProps extends ICheckoutStepContainerProps {
  /**
   * Redirect to the previous step
   * @type {() => void}
   */
  loadPreviousStep: () => void;
}
