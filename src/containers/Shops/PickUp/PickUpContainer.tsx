import { useEffect, useState, ReactElement } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "components/common/Loader";
import { SA_TOKEN_ERROR_FOUND, TrackerApp } from "constants/amplitudeConstants";
import { PickUpWizardSteps, PICKUP_TOKEN_LENGTH } from "constants/pickUpTokenConstants";
import { IVerificationCodeFormValues } from "dataflows/Checkout/VerificationCode/IVerificationCodeFormValue";
import { VerificationCodeValidationSchema } from "dataflows/Checkout/VerificationCode/VerificationCodeValidationSchema";
import {
  selectIsLoadingPickUpToken,
  selectIsOpen,
  selectPickedUpOrderDetail,
  selectTokenErrorMessage,
} from "dataflows/Shops/DeliverOrder/DeliverOrderSelectors";
import { onClose as onCloseAction } from "dataflows/Shops/DeliverOrder/DeliverOrderSlice";
import { deliverOrder } from "dataflows/Shops/DeliverOrder/DeliverOrderThunk";
import { selectInvoices } from "dataflows/Shops/Invoices/InvoicesSelectors";
import { selectShopUser } from "dataflows/Shops/Login/LoginSelectors";
import dynamic from "next/dynamic";
import router from "next/router";
import { trackEvent } from "utils/tracker";

import { Center, Drawer, DrawerContent, ModalOverlay } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IPickUpContainerProps } from "./IPickUpContainerProps";
import { IOrderConfirmedContainerProps } from "./OrderConfirmedContainer/IOrderConfirmedContainerProps";
import { IOrderDetailsContainerProps } from "./OrderDetailsContainer/IOrderDetailsContainerProps";
import { ITokenInputContainerProps } from "./TokenInputContainer/ITokenInputContainerProps";
import { ITokenSuccessContainerProps } from "./TokenSuccessContainer/ITokenSuccessContainerProps";
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
      "./TokenInputContainer/TokenInputContainer"
    ).then((mod) => mod.TokenInputContainer),
  {
    loading: () => TokenLoader,
  }
);

const TokenSuccessContainer = dynamic<ITokenSuccessContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Pick-up-Token" */
      "./TokenSuccessContainer/TokenSuccessContainer"
    ).then((mod) => mod.TokenSuccessContainer),
  {
    loading: () => TokenLoader,
  }
);

const OrderDetailsContainer = dynamic<IOrderDetailsContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Pick-up-Token" */
      "./OrderDetailsContainer/OrderDetailsContainer"
    ).then((mod) => mod.OrderDetailsContainer),
  {
    loading: () => TokenLoader,
  }
);

const OrderConfirmContainer = dynamic<IOrderConfirmedContainerProps>(
  () =>
    import(
      /* webpackChunkName: "Pick-up-Token" */
      "./OrderConfirmedContainer/OrderConfirmedContainer"
    ).then((mod) => mod.OrderConfirmContainer),
  {
    loading: () => TokenLoader,
  }
);

/**
 * The Pick Up Container
 * @returns {ReactElement} The Pick Up Container
 */
export const PickUpContainer = ({ withToken }: IPickUpContainerProps): ReactElement => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsOpen);
  const isLoadingPickUp = useSelector(selectIsLoadingPickUpToken);
  const tokenErrorMessage = useSelector(selectTokenErrorMessage);
  const shopUser = useSelector(selectShopUser);
  const pickedUpOrderDetail = useSelector(selectPickedUpOrderDetail);
  const currentShop = shopUser && shopUser[0];
  const { control, watch, setError, formState, reset } = useForm<IVerificationCodeFormValues>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(VerificationCodeValidationSchema),
  });
  const [currentStep, setCurrentStep] = useState<number>(
    withToken ? PickUpWizardSteps.INPUT_TOKEN : PickUpWizardSteps.ORDER_CONFIRMED
  );
  const [notRegisterNumber, setNotRegisterNumber] = useState<boolean>(false);
  const [countdown, setCountdown] = useState(10);
  const [play, setPlay] = useState(false);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const [time, setTime] = useState<NodeJS.Timeout>();
  const [isClickingNextStep, setIsClickingNextStep] = useState(false);
  const invoices = useSelector(selectInvoices);

  const verificationCode = watch("verificationCode");

  useEffect(() => {
    // Resets the input values to enter a new token
    if (currentStep === PickUpWizardSteps.RESET_FLOW) {
      setCurrentStep(withToken ? PickUpWizardSteps.INPUT_TOKEN : PickUpWizardSteps.ORDER_CONFIRMED);
      setIsClickingNextStep(false);
      reset({
        verificationCode: "",
      });
      return;
    }

    if (currentStep === PickUpWizardSteps.INPUT_TOKEN && isClickingNextStep && !isLoadingPickUp) {
      if (tokenErrorMessage) {
        setError("verificationCode", {
          type: "verificationCodeError",
          message: tokenErrorMessage,
        });
        trackEvent(SA_TOKEN_ERROR_FOUND, [TrackerApp.Amplitude, TrackerApp.Segment], {
          storeID: currentShop?.Id,
          storeName: currentShop?.CompanyName,
          storePhone: currentShop?.CompanyPhoneNumber,
        });
        setNotRegisterNumber(true);
      } else {
        setCurrentStep(PickUpWizardSteps.TOKEN_SUCCESS);
      }
    }
  }, [currentStep, isClickingNextStep, isLoadingPickUp]);

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
    dispatch(onCloseAction());
    router.push("/inicio-shop");
  };

  /**
   * Send the pick-up token
   * @returns {void}
   **/
  const sendOtpCode = (): void => {
    dispatch(deliverOrder({ code: verificationCode, id: currentShop?.Id }));
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
    // @ts-ignore
    clearTimeout(time);
    setPlay(true);
    setIsDisable(true);
    setCountdown(10);
  };

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      size="md"
      closeOnEsc
      closeOnOverlayClick
    >
      <ModalOverlay />
      <DrawerContent>
        {currentStep === PickUpWizardSteps.INPUT_TOKEN && (
          <TokenInputContainer
            isLoading={isLoadingPickUp}
            isDisabled={verificationCode?.length !== PICKUP_TOKEN_LENGTH}
            control={control}
            errors={formState.errors}
            onClose={onClose}
            setIsClickingNextStep={setIsClickingNextStep}
            sendOtpCode={sendOtpCode}
            onResendOtp={reSendCode}
            countdown={countdown}
            isDisable={isDisable}
            notRegisterNumber={notRegisterNumber}
            lastInvoiceId={invoices[0]?.id}
            currentShop={currentShop}
          />
        )}
        {currentStep === PickUpWizardSteps.TOKEN_SUCCESS && (
          <TokenSuccessContainer code={verificationCode} onVerify={setCurrentStep} />
        )}
        {currentStep === PickUpWizardSteps.ORDER_DETAILS && (
          <OrderDetailsContainer
            orderDetail={pickedUpOrderDetail}
            onVerify={setCurrentStep}
            currentShop={currentShop}
          />
        )}
        {currentStep === PickUpWizardSteps.ORDER_CONFIRMED && (
          <OrderConfirmContainer
            orderDetail={pickedUpOrderDetail}
            onClose={onClose}
            onVerify={setCurrentStep}
            withToken={withToken || false}
            currentShop={currentShop}
          />
        )}
      </DrawerContent>
    </Drawer>
  );
};
