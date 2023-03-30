import { useEffect, ReactElement } from "react";

import { PickUpWizardSteps } from "constants/pickUpTokenConstants";

import { ITokenSuccessContainerProps } from "./ITokenSuccessContainerProps";
import { TokenSuccess } from "components/Shops/PickUp/TokenSuccess/TokenSuccess";

/**
 * The Pick Up Token Container
 * @param {ITokenSuccessContainerProps} props The props.
 * @returns {ReactElement} The Pick Up Token Container
 */
export const TokenSuccessContainer = (props: ITokenSuccessContainerProps): ReactElement => {
  const { onVerify, code } = props;

  useEffect(() => {
    const timer = setTimeout(() => onVerify(PickUpWizardSteps.ORDER_DETAILS), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <TokenSuccess code={code} />;
};
