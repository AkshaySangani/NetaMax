import { useEffect, useState, ReactElement } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { PICKUP_TOKEN_LENGTH } from "constants/pickUpTokenConstants";
import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";
import { VerificationCodeValidationSchema } from "dataflows/Checkout/VerificationCode/VerificationCodeValidationSchema";
import { selectIsLoadingPickUpToken } from "dataflows/Shops/DeliverOrder/DeliverOrderSelectors";
import {
  selectIsOtpDrawerOpen,
  selectOtpCodeError,
  selectCurrentStep,
} from "dataflows/Shops/Login/LoginSelectors";
import { moveToPreviousStep } from "dataflows/Shops/Login/LoginSlice";
import { logInStore, sendOtpCode as reSendOtpCode } from "dataflows/Shops/Login/LoginThunks";
import dynamic from "next/dynamic";

import { Center, Drawer, DrawerContent, ModalOverlay } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { ITokenSuccessContainerProps } from "../../Token/TokenSuccessContainer/ITokenSuccessContainer";
import {
  ERROR_MESSAGE_INVALID_CODE,
  ERROR_MESSAGE_NO_STORE,
  ShopsLoginWizardSteps,
} from "constants/shopsConstants";
import { ITokenInputContainerProps } from "containers/Shops/PickUp/TokenInputContainer/ITokenInputContainerProps";
import { ILoginContainerProps } from "./ILoginContainerProps";
import { trackEvent } from "utils/tracker";
import {
  SA_LOGIN_COMPLETED,
  SA_LOGIN_FAILED,
  SA_OTP_REQUESTED,
  SA_OTP_TOAST_ERROR,
  TrackerApp,
} from "constants/amplitudeConstants";
import { setAmplitudeUserProperties } from "utils/amplitude";
import { clearTimeout } from "timers";

const TokenLoader = (
  <Center>
    <Loader delay={300} />
  </Center>
);

const TokenInputContainer = dynamic<ITokenInputContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Pick-up-Token" */
      "../../PickUp/TokenInputContainer/TokenInputContainer"
    ).then((mod) => mod.TokenInputContainer),
  {
    loading: () => TokenLoader,
  }
);

const TokenSuccessContainer = dynamic<ITokenSuccessContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Pick-up-Token" */
      "../../Token/TokenSuccessContainer/TokenSuccessContainer"
    ).then((mod) => mod.TokenSuccessContainer),
  {
    loading: () => TokenLoader,
  }
);

/**
 * The Pick Up Container
 * @returns {ReactElement} The Pick Up Container
 */
export const LoginContainer = ({ phoneNumber }: ILoginContainerProps): ReactElement => {
  const dispatch = useDispatch();
  const isOtpDraweOpen = useSelector(selectIsOtpDrawerOpen);
  const isLoadingPickUp = useSelector(selectIsLoadingPickUpToken);
  const otpCodeError = useSelector(selectOtpCodeError);
  const currentStep = useSelector(selectCurrentStep);
  const { control, watch, setError, formState, clearErrors } = useForm<IVerificationCodeFormValues>(
    {
      mode: "onChange",
      reValidateMode: "onChange",
      resolver: yupResolver(VerificationCodeValidationSchema),
    }
  );
  const [notRegisterNumber, setNotRegisterNumber] = useState<boolean>(false);
  const [countdown, setCountdown] = useState(10);
  const [play, setPlay] = useState(false);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [time, setTime] = useState<NodeJS.Timeout>();
  const verificationCode = watch("verificationCode");

  useEffect(() => {
    setAmplitudeUserProperties({ phone: phoneNumber });
    trackEvent(SA_OTP_REQUESTED, [TrackerApp.Amplitude, TrackerApp.Segment]);
  }, []);

  useEffect(() => {
    if (otpCodeError) {
      if (otpCodeError === ERROR_MESSAGE_NO_STORE) {
        trackEvent(SA_LOGIN_FAILED, [TrackerApp.Amplitude, TrackerApp.Segment]);
      } else if (otpCodeError === ERROR_MESSAGE_INVALID_CODE) {
        trackEvent(SA_OTP_TOAST_ERROR, [TrackerApp.Amplitude, TrackerApp.Segment]);
      }
      setError("verificationCode", {
        type: "verificationCodeError",
        message: otpCodeError,
      });
      setNotRegisterNumber(true);
      return;
    }
    clearErrors();
  }, [otpCodeError]);

  useEffect(() => {
    if (currentStep === ShopsLoginWizardSteps.VERIFICATION_SUCCESS) {
      trackEvent(SA_LOGIN_COMPLETED, [TrackerApp.Amplitude, TrackerApp.Segment]);
    }
  }, [currentStep]);

  useEffect(() => {
    if (play) {
      play && refreshCountdown();
    }
  }, [play]);

  /**
   * On close panel action
   * @returns {void}
   **/
  const onClose = (): void => {
    dispatch(moveToPreviousStep());
  };

  /**
   * Send the pick-up token
   * @param {string} phone The pick-up token
   * @returns {void}
   **/
  const sendOtpCode = (): void => {
    dispatch(logInStore({ one_time_password: verificationCode, phone_number: phoneNumber }));
  };

  /**
   * Register the user
   * @returns {void}
   **/
  const onResendOtp = (): void => {
    dispatch(
      reSendOtpCode({
        phone_number: phoneNumber,
      })
    );
  };

  /**
   * Refresh Countdown.
   * @type {void}
   * @returns {void} To Start countdown.
   */
  const refreshCountdown = () => {
    if (countdown === 0) {
      setCountdown(10);
      setPlay(false);
      setIsDisable(false);
    }
    if (!play) {
      // @ts-ignore
      clearTimeout(time);
      setCountdown(10);
    }
    if (play && countdown !== 0) {
      setPlay(false);
      setTime(
        setTimeout(() => {
          if (countdown >= 0) setCountdown(countdown - 1);
          setPlay(true);
        }, 1000)
      );
    }
  };

  /**
   * Re send code.
   * @type {Function}
   * @returns {void} To Start countdown.
   */
  const reSendCode = () => {
    onResendOtp();
    // @ts-ignore
    clearTimeout(time);
    setPlay(true);
    setIsDisable(true);
    setCountdown(10);
  };

  return (
    <Drawer
      isOpen={isOtpDraweOpen}
      placement="right"
      onClose={onClose}
      size="md"
      closeOnEsc
      closeOnOverlayClick
    >
      <ModalOverlay />
      <DrawerContent>
        {currentStep === ShopsLoginWizardSteps.VERIFICATION_CODE && (
          <TokenInputContainer
            isLoading={isLoadingPickUp}
            isDisabled={verificationCode?.length !== PICKUP_TOKEN_LENGTH}
            control={control}
            errors={formState.errors}
            onClose={onClose}
            sendOtpCode={sendOtpCode}
            onResendOtp={reSendCode}
            countdown={countdown}
            isDisable={isDisable}
            notRegisterNumber={notRegisterNumber}
            isShopOwner
          />
        )}
        {currentStep === ShopsLoginWizardSteps.VERIFICATION_SUCCESS && (
          <TokenSuccessContainer code={verificationCode} />
        )}
      </DrawerContent>
    </Drawer>
  );
};
