import { ReactElement } from "react";

import { useSelector } from "react-redux";

import { IOrderSuccessProps } from "components/Layout/Checkout/OrderSuccess/IOrderSuccessProps";
import { OrderSuccess } from "components/Layout/Checkout/OrderSuccess/OrderSuccess";
import { REFERRAL_CODE_CLICKED, TrackerApp } from "constants/amplitudeConstants";
import {
  NUMBER_WITH_PREFIX_LENGTH,
  NUMBER_WITHOUT_PREFIX_LENGTH,
} from "constants/checkoutConstants";
import { selectCustomer } from "dataflows/Auth/AuthSelectors";
import { selectPayWithMonetas } from "dataflows/Checkout/CheckoutSelectors";
import {
  selectAwardCoins,
  selectShowChallengeModal,
} from "dataflows/GanaDinero/GanaDineroSelectors";
import { selectSelectedStore } from "dataflows/Stores/StoreSelectors";
import { trackEvent } from "utils/tracker";

import { IOrderSuccessContainerProps } from "./IOrderSuccessContainerProps";

/**
 * The OrderSuccessContainer component.
 * @param {IOrderSuccessContainerProps} props the component props
 * @returns {ReactElement} The React element.
 */
export const OrderSuccessContainer = (props: IOrderSuccessContainerProps): ReactElement => {
  const { partialSumSuccess, couponSumSuccess, monetasSumSuccess, totalSumSuccess, couponSuccess } =
    props;
  const customer = useSelector(selectCustomer);
  const showCoinAwardedCard = useSelector(selectShowChallengeModal);
  const payWithMonetas = useSelector(selectPayWithMonetas);
  const selectedStore = useSelector(selectSelectedStore);

  /**
   * Format the customers phone number
   * @param {string} phoneNumber the customers phoneNumber
   * @returns { string } the formatted phoneNumber
   */
  const formatPhone = (phoneNumber: string | undefined): string => {
    if (phoneNumber && phoneNumber.length === NUMBER_WITH_PREFIX_LENGTH) {
      return `+${phoneNumber.replace(/(\d{2})(\d{3})(\d{3})(\d{4})/, "$1 $2 $3 $4")} `;
    }
    if (phoneNumber && phoneNumber.length === NUMBER_WITHOUT_PREFIX_LENGTH) {
      return `+52 ${phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1 $2 $3")} `;
    }

    return "";
  };
  const awardCoins = useSelector(selectAwardCoins);

  /**
   * Send Amplitude data.
   * @returns {void}
   */
  const onReferralShareButtonClick = () => {
    trackEvent(REFERRAL_CODE_CLICKED, [TrackerApp.Amplitude, TrackerApp.Segment]);
  };

  const orderSuccessProps: IOrderSuccessProps = {
    priceAmount: awardCoins,
    shareDiscountCodeText: props.shareDiscountCodeText,
    onReferralShareButtonClick,
    showCoinAwardedCard,
    formattedPhone: formatPhone(customer?.username),
    customerName: customer?.name,
    coupon: couponSuccess,
    couponSumSuccess,
    totalSumSuccess,
    monetasSumSuccess,
    payWithMonetas,
    partialSumSuccess,
    selectedStore,
  };

  return customer?.referralCode ? <OrderSuccess {...orderSuccessProps} /> : <>{props.loader}</>;
};
