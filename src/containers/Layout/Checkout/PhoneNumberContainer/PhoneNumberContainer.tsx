import { useEffect, ReactElement } from "react";

import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { PhoneNumberStep } from "components/Layout/Checkout/PhoneNumberStep/PhoneNumberStep";
import { PHONE_ADDED, TrackerApp } from "constants/amplitudeConstants";
import { CheckoutWizardSteps } from "constants/checkoutConstants";
import { selectErrorMessage, selectIsOtpSent } from "dataflows/Auth/AuthSelectors";
import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";
import { PhoneNumberValidationSchema } from "dataflows/Checkout/PhoneNumber/PhoneNumberValidationSchema";
import { useIsMounted } from "hooks/useIsMounted";
import { trackEvent } from "utils/tracker";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IPhoneNumberContainerProps } from "./IPhoneNumberContainerProps";

/**
 * The PhoneNumberContainer component.
 * @param {IPhoneNumberContainerProps} props The props.
 * @returns {ReactElement} The React element.
 **/
export const PhoneNumberContainer = (props: IPhoneNumberContainerProps): ReactElement => {
  const {
    phoneNumberFormValues,
    saveFormValues,
    isClickingNextButton,
    setIsClickingNextButton,
    validationList,
    setValidationList,
    loadNextStep,
    setFormHasError,
    sendOtpCode,
  } = props;
  const { control, trigger, getValues, watch, formState, register, setError } =
    useForm<IPhoneNumberFormValues>({
      mode: "onBlur",
      reValidateMode: "onBlur",
      defaultValues: phoneNumberFormValues,
      resolver: yupResolver(PhoneNumberValidationSchema),
    });

  const phone = watch("phone");
  const isMounted = useIsMounted();
  const isOtpSent = useSelector(selectIsOtpSent);
  const errorMessage = useSelector(selectErrorMessage);

  useEffect(() => {
    if (formState.errors.phone) {
      trigger();
    }
  }, [phone]);

  useEffect(() => {
    const formHasError = Object.keys(formState.errors).length > 0;
    if (!!validationList) {
      validationList.set(CheckoutWizardSteps.PHONE_NUMBER, !formHasError);
      setValidationList && setValidationList(validationList);
    }
    setFormHasError && setFormHasError(formHasError);
  }, [formState]);

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      const isTriggering = trigger();
      isTriggering.then((onfulfilled) => {
        if (!!validationList) {
          validationList.set(CheckoutWizardSteps.PHONE_NUMBER, onfulfilled);
          setValidationList && setValidationList(validationList);
          const oldPhoneNumber = phoneNumberFormValues?.phone;
          saveFormValues && saveFormValues(getValues());

          if (onfulfilled && oldPhoneNumber !== phone) {
            trackEvent(PHONE_ADDED, [TrackerApp.Amplitude, TrackerApp.Segment], {
              phone: phone,
            });
          }
          sendOtpCode && sendOtpCode(phone);
        }
      });
      setIsClickingNextButton && setIsClickingNextButton(false);
    }
  }, [isClickingNextButton]);

  useEffect(() => {
    if (isOtpSent) {
      loadNextStep && loadNextStep();
    }
  }, [isOtpSent]);

  useEffect(() => {
    if (!!errorMessage) {
      setFormHasError && setFormHasError(true);
      setError("phone", {
        type: "manual",
        message: errorMessage,
      });
    }
  }, [errorMessage]);

  return <PhoneNumberStep errors={formState.errors} control={control} register={register} />;
};
