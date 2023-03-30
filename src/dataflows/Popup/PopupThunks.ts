import { get, post } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IPopup } from "./IPopup";

export const getPopup = createAsyncThunk("popup/getPopup", async (storeId: string) => {
  const response = await get(`store/${storeId}/popup`);
  const popup = (await response.data) as IPopup;
  if (popup !== undefined) return popup;
  else return undefined;
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const sendMobileNumber = createAsyncThunk("popup/sendMobileNumber", async (data: any) => {
  const response = await post("https://qaproducto.netamx.app/CustomProduct/SavePhoneNoAjax", data);
  const mobilePopup = await response.data;
  return mobilePopup;
});
