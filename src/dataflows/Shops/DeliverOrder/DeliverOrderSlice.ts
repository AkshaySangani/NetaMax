import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { deliverOrder, deliverOrderNoToken } from "./DeliverOrderThunk";
import { IDeliverOrderState } from "./IDeliverOrderState";
import { IPickedUpOrderDetail } from "./IPickedUpOrderDetail";
import { IItem } from "../IItem";

import {
  PICKUP_TOKEN_ERROR_CODE_NO_PROCESS,
  PICKUP_TOKEN_ERROR_CODE_ALREADY_PICKED_UP,
  PICKUP_TOKEN_ERROR_MESSAGE_NO_PROCESS,
  PICKUP_TOKEN_ERROR_MESSAGE_NO_PICKED_UP,
  PICKUP_TOKEN_ERROR_MESSAGE_ALREADY_PICKED_UP,
  PICKUP_TOKEN_ERROR_MESSAGE_INVALID_CODE,
} from "constants/pickUpTokenConstants";

const initialState: IDeliverOrderState = {
  isOpen: false,
  isLoadingPickUpToken: false,
  deliverSuccess: false,
  isDeliveringOrder: false,
};

const deliverOrderSlice = createSlice({
  name: "deliverOrder",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
    setIsLoadingPickUpToken: (state, action: PayloadAction<boolean>) => {
      state.isLoadingPickUpToken = action.payload;
    },
    setDeliverSucess: (state, action: PayloadAction<boolean>) => {
      state.deliverSuccess = action.payload;
    },
    openWithNoToken: (state, action: PayloadAction<IPickedUpOrderDetail>) => {
      state.deliverSuccess = false;
      state.isOpen = true;
      state.orderDetail = action.payload;
    },
    clearErrorMessage: (state) => {
      state.deliverErrorMessage = undefined;
    },
  },
  extraReducers: {
    [deliverOrder.pending.type]: (state) => {
      state.isLoadingPickUpToken = true;
    },
    [deliverOrder.fulfilled.type]: (state, action) => {
      const productsAmount = action.payload?.productsOrder.reduce(
        (acc: number, product: IItem) => acc + product.qty,
        0
      );
      action.payload.productsAmount = productsAmount;
      state.orderDetail = action.payload;
      state.isLoadingPickUpToken = false;
      state.tokenErrorMessage = undefined;
    },
    [deliverOrder.rejected.type]: (state, payload) => {
      const code = payload.payload?.response?.data || payload.error?.code || "";
      let message = PICKUP_TOKEN_ERROR_MESSAGE_INVALID_CODE;

      if (code === PICKUP_TOKEN_ERROR_CODE_NO_PROCESS) {
        message = PICKUP_TOKEN_ERROR_MESSAGE_NO_PROCESS;
      } else if (code.startsWith(PICKUP_TOKEN_ERROR_CODE_ALREADY_PICKED_UP)) {
        message = PICKUP_TOKEN_ERROR_MESSAGE_ALREADY_PICKED_UP;
      }

      state.isLoadingPickUpToken = false;
      state.tokenErrorMessage = message;
    },
    [deliverOrderNoToken.pending.type]: (state) => {
      state.isDeliveringOrder = true;
      state.deliverErrorMessage = undefined;
    },
    [deliverOrderNoToken.fulfilled.type]: (state) => {
      state.isDeliveringOrder = false;
      state.deliverSuccess = true;
      state.deliverErrorMessage = undefined;
    },
    [deliverOrderNoToken.rejected.type]: (state, payload) => {
      const code = payload.payload?.response?.data || payload.error?.code || "";
      let message = PICKUP_TOKEN_ERROR_MESSAGE_NO_PICKED_UP;

      if (code === PICKUP_TOKEN_ERROR_CODE_NO_PROCESS) {
        message = PICKUP_TOKEN_ERROR_MESSAGE_NO_PROCESS;
      } else if (code.startsWith(PICKUP_TOKEN_ERROR_CODE_ALREADY_PICKED_UP)) {
        message = PICKUP_TOKEN_ERROR_MESSAGE_ALREADY_PICKED_UP;
      }

      state.isDeliveringOrder = false;
      state.deliverSuccess = false;
      state.deliverErrorMessage = message;
    },
  },
});

/**
 * Actions
 */
export const {
  onOpen,
  onClose,
  setIsLoadingPickUpToken,
  setDeliverSucess,
  openWithNoToken,
  clearErrorMessage,
} = deliverOrderSlice.actions;

/**
 * Reducers
 */
export const deliverOrderReducer = deliverOrderSlice.reducer;
