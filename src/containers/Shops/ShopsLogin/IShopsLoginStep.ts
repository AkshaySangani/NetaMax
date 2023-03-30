import { ShopsLoginWizardSteps } from "constants/shopsConstants";

export interface IShopsLoginStep {
  /**
   * The step of the checkout wizard
   * @type {ShopsLoginWizardSteps}
   */
  id: ShopsLoginWizardSteps;

  /**
   * The render function for the step
   * @type {() => JSX.Element}
   **/
  render: () => JSX.Element;
}
