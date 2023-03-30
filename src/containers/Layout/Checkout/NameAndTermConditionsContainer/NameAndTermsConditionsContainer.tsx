import { useEffect, ReactElement } from "react";

import { useForm } from "react-hook-form";

import { NameAndTermConditionsStep } from "components/Layout/Checkout/NameAndTermsConditionsStep/NameAndTermConditionsStep";
import { NAME_ADDED, TrackerApp } from "constants/amplitudeConstants";
import { CheckoutWizardSteps } from "constants/checkoutConstants";
import { INameAndTermConditionsFormValues } from "dataflows/Checkout/NameAndTermConditions/INameAndTermConditionsFormValues";
import { NameAndTermConditionsValidationSchema } from "dataflows/Checkout/NameAndTermConditions/NameAndTermConditionsValidationSchemaValidationSchema";
import { useIsMounted } from "hooks/useIsMounted";
import { trackEvent } from "utils/tracker";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { INameAndTermsConditionsContainerProps } from "./INameAndTermsConditionsContainerProps";

/**
 * The LogInStepContainer component.
 * @param {INameAndTermsConditionsContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const NameAndTermsConditionsContainer = (
  props: INameAndTermsConditionsContainerProps
): ReactElement => {
  const {
    nameAndTermConditionsFormValues,
    saveFormValues,
    isClickingNextButton,
    setIsClickingNextButton,
    validationList,
    setValidationList,
    loadNextStep,
    setFormHasError,
  } = props;

  const { register, trigger, getValues, formState } = useForm<INameAndTermConditionsFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: nameAndTermConditionsFormValues,
    resolver: yupResolver(NameAndTermConditionsValidationSchema),
  });

  const isMounted = useIsMounted();

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
          validationList.set(CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS, onfulfilled);
          const values = getValues();
          trackEvent(NAME_ADDED, [TrackerApp.Amplitude, TrackerApp.Segment]);
          setValidationList && setValidationList(validationList);
          saveFormValues && saveFormValues(values);
          loadNextStep && loadNextStep();
        }
      });
      setIsClickingNextButton && setIsClickingNextButton(false);
    }
  }, [isClickingNextButton]);

  return <NameAndTermConditionsStep errors={formState.errors} register={register} />;
};
