import { useEffect, useState, ReactElement } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { VerificationCodeStep } from "components/Layout/Checkout/VerificationCodeStep/VerificationCodeStep";
import {
  OTP_ERROR_TOASTED,
  OTP_PAGE_VIEWED,
  OTP_REQUESTED,
  OTP_RESEND_CODE,
  TrackerApp,
} from "constants/amplitudeConstants";
import { INVALID_CODE } from "constants/authConstants";
import { CheckoutWizardSteps, OTP_CODE_LENGTH } from "constants/checkoutConstants";
import { selectAccessTokenLogin, selectSuccessValidationOtp } from "dataflows/Auth/AuthSelectors";
import { clearIsOtpSent } from "dataflows/Auth/AuthSlice";
import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";
import { VerificationCodeValidationSchema } from "dataflows/Checkout/VerificationCode/VerificationCodeValidationSchema";
import { useIsMounted } from "hooks/useIsMounted";
import { trackEvent } from "utils/tracker";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IVerificationCodeContainerProps } from "./IVerificationCodeContainerProps";

/**
 * The VerificationCodeContainer component.
 * @param {IVerificationCodeContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const VerificationCodeContainer = (props: IVerificationCodeContainerProps): ReactElement => {
  const {
    verificationCodeFormValues,
    isUserAuthenticated,
    saveFormValues,
    isClickingNextButton,
    setIsClickingNextButton,
    validationList,
    setValidationList,
    loadNextStep,
    setFormHasError,
    countDown,
    setCountDown,
    loginErrorMessage,
    isLoadingLogIn,
    loadPreviousStep,
    userPhone,
    resetCountDown,
    validateOtpCode,
    sendOtpCode,
    authenticateUserAccessToken,
  } = props;

  const dispatch = useDispatch();
  const validateOtpSuccess = useSelector(selectSuccessValidationOtp);
  const accessTokenLogin = useSelector(selectAccessTokenLogin);
  const [verificationCodeField, setVerificationCodeField] = useState(0);

  const { control, watch, trigger, getValues, setError, formState, reset } =
    useForm<IVerificationCodeFormValues>({
      mode: "onChange",
      reValidateMode: "onChange",
      defaultValues: verificationCodeFormValues,
      resolver: yupResolver(VerificationCodeValidationSchema),
    });

  const verificationCode = watch("verificationCode");
  const isMounted = useIsMounted();

  useEffect(() => {
    if (loginErrorMessage && loginErrorMessage !== INVALID_CODE) {
      saveFormValues && saveFormValues({ verificationCode: undefined });
    }
  }, [loginErrorMessage]);

  useEffect(() => {
    trackEvent(OTP_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment]);
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
      setError("verificationCode", {
        type: "manual",
        message: loginErrorMessage,
      });
    }
  }, [isLoadingLogIn]);

  // Change verificationCode for verificationCodeField, chakra UI not update state
  useEffect(() => {
    saveFormValues && saveFormValues(getValues());
    if (verificationCode?.length === OTP_CODE_LENGTH) {
      setIsClickingNextButton && setIsClickingNextButton(true);
    }
  }, [verificationCodeField]);

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      const isTriggering = trigger();
      isTriggering.then((onfulfilled) => {
        if (!!validationList) {
          validationList.set(CheckoutWizardSteps.VERIFICATION_CODE, onfulfilled);
          setValidationList && setValidationList(validationList);
          const values = getValues();
          saveFormValues && saveFormValues(values);
          trackEvent(OTP_REQUESTED, [TrackerApp.Amplitude, TrackerApp.Segment]);
          userPhone && validateOtpCode && validateOtpCode(userPhone, values.verificationCode);
        }
      });
      setIsClickingNextButton && setIsClickingNextButton(false);
    }
  }, [isClickingNextButton]);

  useEffect(() => {
    if (isMounted && isUserAuthenticated) {
      loadNextStep && loadNextStep();
    }
  }, [isUserAuthenticated]);

  useEffect(() => {
    const formHasError = Object.keys(formState.errors).length > 0;
    if (!!validationList) {
      validationList.set(CheckoutWizardSteps.NAME_AND_TERM_CONDITIONS, !formHasError);
      setValidationList && setValidationList(validationList);
    }
    setFormHasError && setFormHasError(formHasError);
  }, [formState]);

  /**
   * Resend the verification code
   * @returns {void}
   */
  const onResendOtp = () => {
    resetCountDown();
    reset({
      verificationCode: "",
    });
    userPhone && sendOtpCode(userPhone);

    trackEvent(OTP_RESEND_CODE, [TrackerApp.Amplitude, TrackerApp.Segment]);
  };

  /**
   * Redirect to the verification phone step
   * @returns {void}
   */
  const onEditPhoneNumber = () => {
    dispatch(clearIsOtpSent());
    resetCountDown();
    reset({
      verificationCode: "",
    });
    loadPreviousStep();
  };

  useEffect(() => {
    if (validateOtpSuccess === undefined) return;
    if (validateOtpSuccess) {
      saveFormValues && saveFormValues(getValues());
      authenticateUserAccessToken && authenticateUserAccessToken(accessTokenLogin);
    } else {
      setError("verificationCode", {
        type: "manual",
        message: "Código inválido",
      });
      trackEvent(OTP_ERROR_TOASTED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [validateOtpSuccess]);

  return (
    <VerificationCodeStep
      userPhone={userPhone}
      isLoading={isLoadingLogIn}
      seconds={countDown}
      errors={formState.errors}
      control={control}
      reSendOtpCode={onResendOtp}
      redirectToPhoneNumberStep={onEditPhoneNumber}
      setVerificationCodeField={setVerificationCodeField}
    />
  );
};
