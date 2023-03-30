import { CheckoutWizardSteps } from "constants/checkoutConstants";

export interface ICheckoutStep {
  /**
   * The step of the checkout wizard
   * @type {CheckoutWizardSteps}
   */
  id: CheckoutWizardSteps;

  /**
   * The render function for the step
   * @type {() => JSX.Element}
   **/
  render: () => JSX.Element;
}
