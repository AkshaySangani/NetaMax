import axios, { AxiosError } from "axios";
import {
  GET_CUSTOMER_INFO_URL,
  LOGIN_URL,
  OTP_CODE_URL_SEC,
  OTP_VALIDATE_CODE_URL,
  ZIP_CODE_URL,
} from "constants/authConstants";
import { addJwtToken, get, post, postSecurity, postWithHeaders } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { ICustomer } from "./ICustomer";
import { IOtpCodeRequest } from "./IOtpCodeRequest";
import { IOtpValidationCodeRequest } from "./IOtpValidationCodeRequest";

export const acquireToken = createAsyncThunk(
  "auth/acquireToken",
  async (data: {
    username: string;
    code: string;
    name: string;
    deviceId: string;
    accessToken?: string;
  }) => {
    let headers = {};
    if (data && data.accessToken) {
      headers = { Authorization: data.accessToken };
    }
    data.accessToken = "";
    const response = await postWithHeaders(LOGIN_URL, headers, data);
    const result = (await response.data) as {
      accessToken: string;
      customer: ICustomer;
      refreshToken: string;
    };

    //TODO: This should be managed in the state
    addJwtToken(result.accessToken);
    return result;
  }
);

export const sendOtpCodeCore = createAsyncThunk(
  "auth/sendOtpCode",
  async (data: IOtpCodeRequest) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const response = await postSecurity(OTP_CODE_URL_SEC, data as any);
      return (await response.data) as {
        error: boolean;
        message: string;
      };
    } catch (error) {
      let interalErrorMessage = "No pudimos autenticarte, intenta de nuevo";
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        if (error?.response) {
          interalErrorMessage =
            axiosError.response?.data.errorMessage || "No pudimos autenticarte, intenta de nuevo";
        }
      }
      throw Error(interalErrorMessage);
    }
  }
);

// La llamada al endpoint no requiere de un parametro,
// éste se está pasando para que la llamada a la url sea unica y no tenga problemas de cache
export const getCustomerInfo = createAsyncThunk("auth/me", async () => {
  const response = await get(`${GET_CUSTOMER_INFO_URL}?param=${new Date().toISOString()}`);
  return (await response.data) as { customer: ICustomer };
});
export const postSendZipCode = createAsyncThunk(
  "auth/sendZipCode",
  async (data: { username: string; zipcode: string }) => {
    await post(ZIP_CODE_URL, data);
  }
);

export const validateOtpCode = createAsyncThunk(
  "auth/validateOtpCode",
  async (data: IOtpValidationCodeRequest) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response = await postSecurity(OTP_VALIDATE_CODE_URL, data as any);
    const responseData = (await response.data) as {
      error: boolean;
      message: string;
      accessToken: string;
    };
    return { validateOtpSuccess: !responseData.error, accessToken: responseData.accessToken };
  }
);
