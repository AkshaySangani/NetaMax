import React, { useEffect, ReactElement } from "react";

import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import { VerificationCodeStep } from "components/Shops/ShopsLogin/VerificationCodeStep/VerificationCodeStep";
import {
  SA_LOGIN_COMPLETED,
  SA_LOGIN_FAILED,
  SA_OTP_REQUESTED,
  SA_OTP_RESEND_CODE,
  SA_OTP_TOAST_ERROR,
  TrackerApp,
} from "constants/amplitudeConstants";
import {
  ERROR_MESSAGE_INVALID_CODE,
  ERROR_MESSAGE_NO_STORE,
  ShopsLoginWizardSteps,
} from "constants/shopsConstants";
import { selectIsAuth, selectShopUser } from "dataflows/Shops/Login/LoginSelectors";
import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";
import { VerificationCodeValidationSchema } from "dataflows/Checkout/VerificationCode/VerificationCodeValidationSchema";
import { useIsMounted } from "hooks/useIsMounted";
import { useRouter } from "next/router";
import { identifyUser, trackEvent } from "utils/tracker";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IVerificationCodeContainerProps } from "./IVerificationCodeContainerProps";

/**
 * The VerificationCodeContainer component.
 * @param {IVerificationCodeContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const VerificationCodeContainer = (props: IVerificationCodeContainerProps): ReactElement => {
  const shopUser = useSelector(selectShopUser);
  const currentShop = shopUser && shopUser[0];
  const isShopAuth = useSelector(selectIsAuth);

  const {
    verificationCodeFormValues,
    isUserAuthenticated,
    saveFormValues,
    isClickingNextButton,
    setIsClickingNextButton,
    validationList,
    setValidationList,
    setFormHasError,
    countDown,
    setCountDown,
    loginErrorMessage,
    isLoadingLogIn,
    resendOtpCode,
    loadPreviousStep,
    userPhone,
  } = props;

  const { control, watch, trigger, getValues, setError, formState, setValue, reset } =
    useForm<IVerificationCodeFormValues>({
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: verificationCodeFormValues,
      resolver: yupResolver(VerificationCodeValidationSchema),
    });

  const verificationCode = watch("verificationCode");
  const router = useRouter();
  const isMounted = useIsMounted();

  useEffect(() => {
    trackEvent(SA_OTP_REQUESTED, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storePhone: userPhone,
    });
  }, []);

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      }
      if (countDown === 0) {
        clearInterval(myInterval);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  useEffect(() => {
    if (loginErrorMessage) {
      if (loginErrorMessage === ERROR_MESSAGE_NO_STORE) {
        trackEvent(SA_LOGIN_FAILED, [TrackerApp.Amplitude, TrackerApp.Segment], {
          storePhone: userPhone,
        });
      } else if (loginErrorMessage === ERROR_MESSAGE_INVALID_CODE) {
        trackEvent(SA_OTP_TOAST_ERROR, [TrackerApp.Amplitude, TrackerApp.Segment], {
          storePhone: userPhone,
        });
      }
      setError("verificationCode", {
        type: "manual",
        message: loginErrorMessage,
      });
    }
  }, [loginErrorMessage]);

  useEffect(() => {
    saveFormValues && saveFormValues(getValues());
  }, [verificationCode]);

  useEffect(() => {
    const formHasError = Object.keys(formState.errors).length > 0;
    setFormHasError && setFormHasError(formHasError);
  }, [formState]);

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      const isTriggering = trigger();
      isTriggering.then((onfulfilled) => {
        if (!!validationList) {
          validationList.set(ShopsLoginWizardSteps.VERIFICATION_CODE, onfulfilled);
          setValidationList && setValidationList(validationList);
          const values = getValues();
          saveFormValues && saveFormValues(values);
          if (!onfulfilled) {
            setError("verificationCode", {
              type: "manual",
              message: "Código inválido",
            });
          }
        }
      });
      setIsClickingNextButton && setIsClickingNextButton(false);
    }
  }, [isClickingNextButton]);

  useEffect(() => {
    if (isMounted && isShopAuth) {
      const shopInfo = { phone: currentShop?.CompanyPhoneNumber, name: currentShop?.CompanyName };
      currentShop && identifyUser(currentShop?.Id, shopInfo);

      trackEvent(SA_LOGIN_COMPLETED, [TrackerApp.Amplitude, TrackerApp.Segment], {
        storePhone: userPhone,
      });
      router.push("/invoices");
    }
  }, [isShopAuth]);

  /**
   * Resend the verification code
   * @returns {void}
   */
  const onResendOtp = () => {
    setValue("verificationCode", "");
    trackEvent(SA_OTP_RESEND_CODE, [TrackerApp.Amplitude, TrackerApp.Segment], {
      storePhone: userPhone,
    });
    saveFormValues && saveFormValues(getValues());
    reset();
    resendOtpCode && resendOtpCode();
  };

  /**
   * Redirect to the verification phone step
   * @returns {void}
   */
  const onEditPhoneNumber = () => {
    loadPreviousStep();
  };

  return (
    <VerificationCodeStep
      userPhone={userPhone}
      isLoading={isLoadingLogIn}
      seconds={countDown}
      errors={formState.errors}
      control={control}
      reSendOtpCode={onResendOtp}
      redirectToPhoneNumberStep={onEditPhoneNumber}
    />
  );
};
