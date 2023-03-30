import { useEffect, ReactElement } from "react";

import { useDispatch } from "react-redux";

import { onClose as onCloseAction } from "dataflows/Shops/DeliverOrder/DeliverOrderSlice";
import router from "next/router";
import { trackEvent } from "utils/tracker";

import {
  SA_TOKEN_ALTERNATIVE_VALIDATION,
  SA_TOKEN_PAGE,
  TrackerApp,
} from "../../../../constants/amplitudeConstants";
import { ITokenInputContainerProps } from "./ITokenInputContainerProps";
import { TokenInput } from "components/Shops/PickUp/TokenInput/TokenInput";

/**
 * The Pick Up Token Container
 * @param {ITokenInputContainerProps} props The props.
 * @returns {ReactElement} The Pick Up Token Container
 */
export const TokenInputContainer = (props: ITokenInputContainerProps): ReactElement => {
  const {
    onClose,
    errors,
    control,
    setIsClickingNextStep,
    isLoading,
    isDisabled,
    sendOtpCode,
    onResendOtp,
    countdown,
    isDisable,
    notRegisterNumber,
    lastInvoiceId,
    currentShop,
    isShopOwner,
  } = props;

  const dispatch = useDispatch();

  /**
   * Advances to next step
   * @returns {void}
   **/
  const handleNextStep = () => {
    setIsClickingNextStep && setIsClickingNextStep(true);
    sendOtpCode();
  };

  /**
   * handles the redirection
   * @returns {void}
   **/
  const handleRedirect = () => {
    dispatch(onCloseAction());
    trackEvent(
      SA_TOKEN_ALTERNATIVE_VALIDATION,
      [TrackerApp.Amplitude, TrackerApp.Segment],
      shopForTracker()
    );

    router.push(lastInvoiceId ? `invoices/${lastInvoiceId}/details` : "invoices");
  };

  useEffect(() => {
    trackEvent(SA_TOKEN_PAGE, [TrackerApp.Amplitude, TrackerApp.Segment], shopForTracker());
  }, []);

  /**
   * Creates shop track object with shop info
   * @returns {object}
   **/
  const shopForTracker = () => {
    return {
      storeID: currentShop?.Id,
      storeName: currentShop?.CompanyName,
      storePhone: currentShop?.CompanyPhoneNumber,
    };
  };

  /**
   * Resend the verification code
   * @returns {void}
   */

  return (
    <TokenInput
      onClose={onClose}
      errors={errors}
      control={control}
      handleRedirect={handleRedirect}
      handleNextStep={handleNextStep}
      reSendOtpCode={onResendOtp}
      countdown={countdown}
      isDisable={isDisable}
      isLoading={isLoading}
      isDisabled={isDisabled}
      isShopOwner={isShopOwner}
      notRegisterNumber={notRegisterNumber}
    />
  );
};
