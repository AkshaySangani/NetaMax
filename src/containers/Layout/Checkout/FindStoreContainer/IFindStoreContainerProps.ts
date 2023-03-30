import { ICheckoutStepContainerProps } from "../ICheckoutStepContainerProps";

export interface IFindStoreContainerProps extends ICheckoutStepContainerProps {
  /**
   * Redirect to the previous step
   * @type {() => void}
   */
  loadPreviousStep: () => void;
}
