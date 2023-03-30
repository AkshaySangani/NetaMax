import { post } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IResponseLogInOtp } from "../IResponseLogInOtp";

const MS_SECURITY_URL = process.env.NEXT_PUBLIC_MS_SECURITY_URL;

export const logInStore = createAsyncThunk(
  "shops/logInStore",
  async (data: { one_time_password: string; phone_number: string }) => {
    const response = await post(`${MS_SECURITY_URL}/login-store/validate`, data);
    const result = (await response.data) as IResponseLogInOtp;
    return result as IResponseLogInOtp;
  }
);

export const sendOtpCode = createAsyncThunk(
  "shops/sendOtpCode",
  async (data: { phone_number: string }) => {
    const response = await post(`${MS_SECURITY_URL}/login-store`, data);
    return await response.data;
  }
);
