import React, { useEffect, useState, ReactElement } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { ShopsPhoneNumberStep } from "components/Shops/ShopsLogin/ShopsPhoneNumberStep/ShopsPhoneNumberStep";
import { SA_LOGIN_PAGE_VIEWED, TrackerApp } from "constants/amplitudeConstants";
import { ShopsLoginWizardSteps } from "constants/shopsConstants";
import { IPhoneNumberFormValues } from "dataflows/Checkout/PhoneNumber/IPhoneNumberFormValues";
import { PhoneNumberValidationSchema } from "dataflows/Checkout/PhoneNumber/PhoneNumberValidationSchema";
import { IShopsFormValues } from "dataflows/Shops/IShopsFormValues";
import {
  selectIsAuth,
  selectIsSendingOtpCode,
  selectOtpCodeError,
} from "dataflows/Shops/Login/LoginSelectors";
import { sendOtpCode as sendOtpCodeAction } from "dataflows/Shops/Login/LoginThunks";
import { useRouter } from "next/router";
import { trackEvent } from "utils/tracker";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

/**
 * The ShopsLoginContainer component.
 * @returns {ReactElement} the component element.
 */
export const ShopsLoginContainer = (): ReactElement => {
  const dispatch = useDispatch();
  const isUserAuthenticated = useSelector(selectIsAuth);
  const isSendingOtpCode = useSelector(selectIsSendingOtpCode);
  const errorOtpMessage = useSelector(selectOtpCodeError);
  const [isTrackerAppLoaded, setIsTrackerAppLoaded] = useState(false);
  const router = useRouter();
  const [loginForm, setLoginForm] = useState<IShopsFormValues>();
  const [validationList, setValidationList] = useState(
    new Map([
      [ShopsLoginWizardSteps.PHONE_NUMBER, false],
      [ShopsLoginWizardSteps.VERIFICATION_CODE, true],
    ])
  );
  const phoneNumberFormValues = { phone: loginForm?.phone || "" };
  const { control, trigger, getValues, watch, formState, register } =
    useForm<IPhoneNumberFormValues>({
      mode: "onBlur",
      reValidateMode: "onBlur",
      defaultValues: phoneNumberFormValues,
      resolver: yupResolver(PhoneNumberValidationSchema),
    });
  const phone = watch("phone");

  useEffect(() => {
    if (formState.errors.phone) {
      trigger();
    }
  }, [phone]);

  useEffect(() => {
    if (isTrackerAppLoaded) {
      trackEvent(SA_LOGIN_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [isTrackerAppLoaded]);

  useEffect(() => {
    isUserAuthenticated && router.push("/inicio-shop");
  }, [isUserAuthenticated]);

  useEffect(() => {
    const formHasError = Object.keys(formState.errors).length > 0;
    if (!!validationList) {
      validationList.set(ShopsLoginWizardSteps.PHONE_NUMBER, !formHasError);
      setValidationList && setValidationList(validationList);
    }
  }, [formState]);

  /**
   * Register the user
   * @param {string} phone The phone number
   * @returns {void}
   **/
  const sendOtpCode = (phone: string): void => {
    dispatch(
      sendOtpCodeAction({
        phone_number: phone,
      })
    );
  };

  /**
   * Save the checkout form
   * @param {Partial<ICheckoutFormValues>} formValues The form values
   * @returns {void}
   **/
  const saveFormValues = (formValues: Partial<IShopsFormValues>): void => {
    const loginFormValues = {
      ...loginForm,
      ...formValues,
    } as IShopsFormValues;

    setLoginForm(() => loginFormValues);
  };

  /**
   * Handles after clicking next
   * @returns {void}
   **/
  const handleNext = () => {
    const isTriggering = trigger();
    isTriggering.then((onfulfilled) => {
      if (!!validationList) {
        validationList.set(ShopsLoginWizardSteps.PHONE_NUMBER, onfulfilled);
        setValidationList && setValidationList(validationList);
        saveFormValues && saveFormValues(getValues());

        if (onfulfilled) {
          sendOtpCode && sendOtpCode(phone);
        }
      }
    });
  };

  return (
    <ShopsPhoneNumberStep
      errorOtpMessage={errorOtpMessage}
      errors={formState.errors}
      control={control}
      register={register}
      valueForm={phoneNumberFormValues?.phone}
      handleNext={handleNext}
      phoneNumber={phone}
      isSendingOtpCode={isSendingOtpCode}
    />
  );
};
