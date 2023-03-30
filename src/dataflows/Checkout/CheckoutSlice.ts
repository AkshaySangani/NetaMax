import {
  CheckoutWizardSteps,
  COUNTDOWN_TIMER_SECONDS,
  OrderStatus,
} from "constants/checkoutConstants";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCouponCode, postPlaceOrder } from "./CheckoutThunks";
import { ICheckoutState } from "./ICheckoutState";

const initialState: ICheckoutState = {
  isOpen: false,
  onlyLoginSteps: false,
  currentStep: CheckoutWizardSteps.BASKET,
  isPlacingOrder: false,
  orderStatus: OrderStatus.DRAFT,
  countDown: COUNTDOWN_TIMER_SECONDS,
  isCheckingCoupon: false,
  coupon: undefined,
  payWithMonetas: true,
};

const categorySlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    removeCouponCode: (state) => {
      state.coupon = undefined;
    },
    setCurrentStep: (state, action: PayloadAction<CheckoutWizardSteps>) => {
      state.currentStep = action.payload;
    },
    setPayWithMonetas: (state, action: PayloadAction<boolean>) => {
      state.payWithMonetas = action.payload;
    },
    moveToNextStep: (state) => {
      const nextStep = state.currentStep + 1;
      state.currentStep = nextStep;
    },
    moveToPreviousStep: (state) => {
      const previousStep = state.currentStep - 1;
      state.currentStep = previousStep;
    },
    onOpen: (state, action: PayloadAction<{ onlyLoginSteps: boolean }>) => {
      state.isOpen = true;
      state.onlyLoginSteps = action.payload.onlyLoginSteps;
    },
    onClose: (state) => {
      state.isOpen = false;
      if (state.orderStatus === OrderStatus.SUBMITTED) state.orderStatus = OrderStatus.DRAFT;
    },
    setCountDown: (state, action: PayloadAction<number>) => {
      state.countDown = action.payload;
    },
    resetCountDown: (state) => {
      state.countDown = COUNTDOWN_TIMER_SECONDS;
    },
    clearPlaceOrderErrorMessage: (state) => {
      state.placeOrderErrorMessage = undefined;
    },
  },
  extraReducers: {
    [postPlaceOrder.pending.type]: (state) => {
      state.isPlacingOrder = true;
    },
    [postPlaceOrder.fulfilled.type]: (state) => {
      state.isPlacingOrder = false;
      state.coupon = undefined;
      state.placeOrderErrorMessage = undefined;
      state.orderStatus = OrderStatus.SUBMITTED;
    },
    [postPlaceOrder.rejected.type]: (state, payload) => {
      state.isPlacingOrder = false;
      state.orderStatus = OrderStatus.REJECTED;
      state.placeOrderErrorMessage = payload.error.message;
    },
    [getCouponCode.pending.type]: (state) => {
      state.isCheckingCoupon = true;
      state.couponErrorMessage = undefined;
    },
    [getCouponCode.fulfilled.type]: (state, action) => {
      state.isCheckingCoupon = false;
      state.coupon = action.payload;
    },
    [getCouponCode.rejected.type]: (state, payload) => {
      state.isCheckingCoupon = false;
      state.couponErrorMessage = payload.error.message;
    },
  },
});

/**
 * Actions
 */
export const {
  setCurrentStep,
  moveToNextStep,
  moveToPreviousStep,
  onClose,
  onOpen,
  setCountDown,
  resetCountDown,
  clearPlaceOrderErrorMessage,
  removeCouponCode,
  setPayWithMonetas,
} = categorySlice.actions;

/**
 * Reducers
 */

export const checkoutReducer = categorySlice.reducer;
