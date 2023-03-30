import { ShopsLoginWizardSteps } from "constants/shopsConstants";
import { ICheckoutFormValues } from "dataflows/Checkout/ICheckoutFormValues";

export interface IShopsStepContainerProps {
  /**
   * Validation list for all steps
   * @type {Map<ShopsLoginWizardSteps, boolean>}
   */
  validationList?: Map<ShopsLoginWizardSteps, boolean>;

  /**
   * The callback function to validate the current step
   * @type {(validationList: Map<ShopsLoginWizardSteps, boolean>) => void}
   **/
  setValidationList?: (validationList: Map<ShopsLoginWizardSteps, boolean>) => void;

  /**
   * The callback function to check if the form has errors
   * @type {(hasError: boolean) => boolean}
   */
  setFormHasError?: (hasError: boolean) => void;

  /**
   * The current step
   * @type {ShopsLoginWizardSteps}
   **/
  currentStep: ShopsLoginWizardSteps;

  /**
   * Indicates if the user is clicking on the next button
   * @type {boolean}
   **/
  isClickingNextButton: boolean;

  /**
   * The callback function to set the isClickingNextButton
   * @type {(isClickingNextButton: boolean) => void}
   **/
  setIsClickingNextButton: (isClickingNextButton: boolean) => void;

  /**
   * Load the next step
   * @type {() => void}
   **/
  loadNextStep: () => void;

  /**
   * Save the form values
   * @type {(formValues: ICheckoutFormValues) => void}
   **/
  saveFormValues?: (formValues: Partial<ICheckoutFormValues>) => void;
}
