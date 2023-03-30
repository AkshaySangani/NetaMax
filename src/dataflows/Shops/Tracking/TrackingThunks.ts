import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { ITrackingURL } from "./ITrackingState";

//TODO: Pedir que backend agregue el /api/v1 para no tener que usar la ROOT_URL
const PUBLIC_API_ROOT_URL = process.env.NEXT_PUBLIC_API_ROOT_URL;

export const getLastTrackingUrl = createAsyncThunk(
  "shopsLogin/getLastTrackingUrl",
  async (orderId: string) => {
    const response = await axios.get(`${PUBLIC_API_ROOT_URL}/beetrack?criteria=${orderId}`);
    return (await response.data.beecode) as string;
  }
);

export const getTrackingUrl = createAsyncThunk(
  "shopsLogin/getTrackingUrl",
  async (trackingParams: ITrackingURL) => {
    const { trackingId, invoiceId } = trackingParams;
    const response = await axios.get(`${PUBLIC_API_ROOT_URL}/beetrack?criteria=${trackingId}`);
    return {
      trackingId: await response.data.beecode,
      invoiceId,
    } as ITrackingURL;
  }
);
