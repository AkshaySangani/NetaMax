import { useEffect, useState, ReactElement } from "react";

import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import { IOrderReviewProps } from "components/Layout/Checkout/OrderReview/IOrderReviewProps";
import { OrderReview } from "components/Layout/Checkout/OrderReview/OrderReview";
import {
  CHECKOUT_PAGE_VIEWED,
  CHO_ORDER_SUMMARY_PAGE,
  TrackerApp,
} from "constants/amplitudeConstants";
import { OrderStatus } from "constants/checkoutConstants";
import { selectCustomer, selectIsLoadingOrderReview } from "dataflows/Auth/AuthSelectors";
import { getCustomerInfo } from "dataflows/Auth/AuthThunks";
import {
  selectDiscountAmount,
  selectTotalAmount,
  selectWalletAmount,
} from "dataflows/Basket/BasketSelectors";
import {
  selectCoupon,
  selectCouponErrorMessage,
  selectIsCheckingCoupon,
  selectPayWithMonetas,
} from "dataflows/Checkout/CheckoutSelectors";
import { removeCouponCode, setPayWithMonetas } from "dataflows/Checkout/CheckoutSlice";
import { getCouponCode } from "dataflows/Checkout/CheckoutThunks";
import { CouponCodeValidationSchema } from "dataflows/Checkout/CouponCode/CouponCodeValidationSchema";
import { ICouponCodeFormValues } from "dataflows/Checkout/CouponCode/ICouponCodeFormValues";
import { selectWinnerChallenges } from "dataflows/GanaDinero/GanaDineroSelectors";
import { selectSelectedStore } from "dataflows/Stores/StoreSelectors";
import { useIsMounted } from "hooks/useIsMounted";
import { trackEvent } from "utils/tracker";

import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

import { IOrderReviewContainerProps } from "./IOrderReviewContainerProps";

/**
 * The OrderReviewContainer component.
 * @param {IOrderReviewContainerProps} props The props.
 * @returns {ReactElement} The React element.
 */
export const OrderReviewContainer = (props: IOrderReviewContainerProps): ReactElement => {
  const {
    couponCodeFormValues,
    totalNetPrice,
    discountCoupon,
    isClickingNextButton,
    setIsClickingNextButton,
    loadNextStep,
    placeOrder,
    saveFormValues,
    customerName,
    totalDiscountPrice,
    customerCurrentNetaWallet,
    orderStatus,
    updateStore,
    basketItems,
    loadPreviousStep,
    setPartialSumSuccess,
    setCouponSumSuccess,
    setMonetasSumSuccess,
    setTotalSumSuccess,
    setCouponSuccess,
  } = props;

  const { trigger, watch, formState, register, setError, getValues, reset } =
    useForm<ICouponCodeFormValues>({
      mode: "onBlur",
      reValidateMode: "onBlur",
      defaultValues: couponCodeFormValues,
      resolver: yupResolver(CouponCodeValidationSchema),
    });

  const coupon = useSelector(selectCoupon);
  const isCheckingCoupon = useSelector(selectIsCheckingCoupon);
  const selectedStore = useSelector(selectSelectedStore);
  const couponErrorMessage = useSelector(selectCouponErrorMessage);
  const isLoadingOrderReview = useSelector(selectIsLoadingOrderReview);
  const dispatch = useDispatch();
  const couponCode = watch("couponCode");
  const isMounted = useIsMounted();

  const discountAmount = useSelector(selectDiscountAmount);
  const walletAmount = useSelector(selectWalletAmount);
  const totalAmount = useSelector(selectTotalAmount);
  const statusChallenges = useSelector(selectWinnerChallenges);
  const payWithMonetas = useSelector(selectPayWithMonetas);
  const actualCoupon = coupon && coupon[0];
  const [couponInputVisible, setCouponInputVisible] = useState<boolean>(!!actualCoupon);
  const customer = useSelector(selectCustomer);

  /**
   * Remove the coupon code
   * @returns {void}
   */
  const removeCoupon = () => {
    dispatch(removeCouponCode());
    saveFormValues && saveFormValues({ couponCode: "" });
    reset({ couponCode: "" });
  };

  /**
   * Handles the monetas setter
   * @returns { void }
   */
  const handlePayWithMonetas = (): void => {
    dispatch(setPayWithMonetas(!payWithMonetas));
  };

  /**
   * Fetch the get coupon code
   * @returns {void} array of discounts
   */
  const fetchCode = () => {
    dispatch(getCouponCode(couponCode));
  };

  /**
   * Open/closes coupon input
   * @returns { void }
   */
  const handleCouponVisible = (): void => {
    couponInputVisible && removeCoupon();
    setCouponInputVisible(!couponInputVisible);
  };

  useEffect(() => {
    if (couponErrorMessage && couponCode) {
      setError("couponCode", { type: "manual", message: couponErrorMessage });
    }
  }, [couponErrorMessage]);

  useEffect(() => {
    if (isMounted && isClickingNextButton) {
      setIsClickingNextButton && setIsClickingNextButton(false);
      trackEvent(CHECKOUT_PAGE_VIEWED, [TrackerApp.Amplitude, TrackerApp.Segment]);
      setPartialSumSuccess(totalNetPrice);
      setCouponSumSuccess(discountAmount);
      setMonetasSumSuccess(walletAmount);
      setTotalSumSuccess(totalAmount);
      coupon && coupon.length > 0 && setCouponSuccess(coupon);
      placeOrder();
    }
  }, [isClickingNextButton]);

  useEffect(() => {
    if (orderStatus === OrderStatus.SUBMITTED) {
      loadNextStep && loadNextStep();
      removeCoupon();
    }
  }, [orderStatus]);

  useEffect(() => {
    if (formState.errors.couponCode) {
      trigger("couponCode");
    }
    saveFormValues && saveFormValues(getValues());
  }, [couponCode]);

  useEffect(() => {
    if (Array.isArray(coupon) && coupon.length === 0) {
      setError("couponCode", { type: "manual", message: "Cupón inválido" });
    }
  }, [coupon]);

  useEffect(() => {
    dispatch(getCustomerInfo());
  }, []);

  useEffect(() => {
    trackEvent(CHO_ORDER_SUMMARY_PAGE, [TrackerApp.Amplitude, TrackerApp.Segment]);

    if (coupon === undefined) {
      reset({
        couponCode: "",
      });
    }
  }, []);

  const orderReviewProps: IOrderReviewProps = {
    totalNetPrice,
    discountCoupon,
    customerName,
    selectedStore,
    register,
    fetchCode,
    isCheckingCoupon,
    coupon,
    errors: formState.errors,
    totalDiscountPrice,
    customerCurrentNetaWallet,
    removeCoupon,
    isLoadingOrderReview,
    updateStore,
    discountAmount,
    walletAmount,
    totalAmount,
    statusChallenges,
    couponInputVisible,
    handleCouponVisible,
    payWithMonetas,
    handlePayWithMonetas,
    totalMonetasAmount: Number(customer?.customerCurrentNetaWallet) || 0,
    basketItems,
    loadPreviousStep,
  };

  return <OrderReview {...orderReviewProps} />;
};
