import { useEffect, ReactElement } from "react";

import { useForm } from "react-hook-form";

import { PostalCodeStep } from "components/Layout/Checkout/PostalCodeStep/PostalCodeStep";
import { TrackerApp, ZIPCODE_PAGE_VIEWED, ZIPCODE_VERIFIED } from "constants/amplitudeConstants";
import { CheckoutWizardSteps } from "constants/checkoutConstants";
import { IPostalCodeFormValues } from "dataflows/Checkout/PostalCode/IPostalCodeFormValues";
import { PostalCodeValidationSchema } from "dataflows/Checkout/PostalCode/PostalCodeValidationSchema";
import { useIsMounted } from "hooks/useIsMounted";
import { trackEvent } from "utils/tracker";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IPostalCodeContainerProps } from "./IPostalCodeContainerProps";

/**
 * PostalCodeContainer component.
 * @param {IPostalCodeContainerProps} props the component props.
 * @returns {ReactElement} the react element.
 */
export const PostalCodeContainer = (props: IPostalCodeContainerProps): ReactElement => {
  const {
    postalCodeFormValues,
    saveFormValues,
    isClickingNextButton,
    setIsClickingNextButton,
    validationList,
    setValidationList,
    loadNextStep,
    setFormHasError,
    sendZipCode,
  } = props;

  const { register, trigger, getValues, formState, watch } = useForm<IPostalCodeFormValues>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: postalCodeFormValues,
    resolver: yupResolver(PostalCodeValidationSchema),
  });

  const postalCode = watch("postalCode");
  const isMounted = useIsMounted();

  useEffect(() => {
    trackEvent(ZIPCODE_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment]);
  }, []);

  useEffect(() => {
    if (formState.errors.postalCode) {
      trigger("postalCode");
    }
  }, [postalCode]);

  useEffect(() => {
    const formHasError = Object.keys(formState.errors).length > 0;
    if (!!validationList) {
      validationList.set(CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS, !formHasError);
      setValidationList && setValidationList(validationList);
    }
    setFormHasError && setFormHasError(formHasError);
  }, [formState]);

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      const isTriggering = trigger();
      isTriggering.then((onfulfilled) => {
        if (!!validationList) {
          validationList.set(CheckoutWizardSteps.POSTAL_CODE, onfulfilled);
          if (onfulfilled) {
            trackEvent(ZIPCODE_VERIFIED, [TrackerApp.Amplitude, TrackerApp.Segment], {
              zipCode: postalCode,
            });
          }
          setValidationList && setValidationList(validationList);
          const values = getValues();
          saveFormValues && saveFormValues(values);
          sendZipCode(values.postalCode);
          loadNextStep && loadNextStep();
        }
      });
      setIsClickingNextButton && setIsClickingNextButton(false);
    }
  }, [isClickingNextButton]);

  return <PostalCodeStep errors={formState.errors} register={register} />;
};
