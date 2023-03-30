import { ReactElement } from "react";
// CR-SHOPS-2/5/22: Verificar el uso de este componente
import { IPhoneNumberContainerProps } from "./IPhoneNumberContainerProps";
/**
 * The PhoneNumberContainer component.
 * @param {IPhoneNumberContainerProps} props The props.
 * @returns {ReactElement} The React element.
 **/
export const PhoneNumberContainer = (props: IPhoneNumberContainerProps): ReactElement => {
  const {
    phoneNumberFormValues,
    isClickingNextButton,
    setIsClickingNextButton,
    setValidationList,
    validationList,
    sendOtpCode,
    resetCountDown,
    setFormHasError,
    saveFormValues,
  } = props;

  return <div></div>;
};
