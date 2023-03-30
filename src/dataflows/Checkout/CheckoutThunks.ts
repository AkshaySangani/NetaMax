import axios, { AxiosError } from "axios";
import { PLACE_ORDER_URL_V2 } from "constants/checkoutConstants";
import { getOrderChallengeStatus } from "dataflows/GanaDinero/GanaDineroThunks";
import { get, post } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { ICheckoutOrder } from "./ICheckoutOrder";
import { ICoupon } from "./ICoupon";

export const postPlaceOrder = createAsyncThunk(
  "checkout/placeOrder",
  async (order: ICheckoutOrder, { dispatch }) => {
    try {
      //TODO: se cambio PLACE_ORDER_URL por la ruta PLACE_ORDER_URL_V2);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await post(PLACE_ORDER_URL_V2, order as any);
      const orderId = (await response.data) as { id: number };

      dispatch(getOrderChallengeStatus(String(orderId.id)));
    } catch (error) {
      let interalErrorMessage = "No pudimos procesar tu orden. Intenta de nuevo";
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (error?.response) {
          interalErrorMessage =
            axiosError.response?.data.message || "No pudimos procesar tu orden. Intenta de nuevo";
        }
      }
      throw Error(interalErrorMessage);
    }
  }
);

export const getCouponCode = createAsyncThunk("checkout/couponCode", async (couponCode: string) => {
  try {
    const response = await get(`discount?code=${couponCode}`);
    return (await response.data) as ICoupon[];
  } catch (error) {
    let interalErrorMessage = "Cupón inválido";
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (error?.response) {
        interalErrorMessage = axiosError.response?.data.error || "Cupón inválido";
      }
    }
    throw Error(interalErrorMessage);
  }
});
