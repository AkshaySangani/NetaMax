import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IDeliverOrder } from "../IDeliverOrder";

const API_MS_ORDER = process.env.NEXT_PUBLIC_MS_ORDER_URL;

export const deliverOrder = createAsyncThunk(
  "shops/getDeliverOrder",
  async (data: { code: string; id?: string }, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "patch",
        url: `${API_MS_ORDER}/order/store/${data.id}/picked-up`,
        timeout: 10000,
        data: { token: data.code },
      });
      return (await response.data) as IDeliverOrder;
    } catch (e) {
      // Use `e` as `action.payload` for a `rejected` action, by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(e);
    }
  }
);

export const deliverOrderNoToken = createAsyncThunk(
  "shops/deliverOrderNoToken",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios({
        method: "patch",
        url: `${API_MS_ORDER}/order/${id}/picked-up`,
        timeout: 10000,
        data: { force: true },
      });
      return (await response.data) as IDeliverOrder;
    } catch (e) {
      // Use `e` as `action.payload` for a `rejected` action, by explicitly returning it using the `rejectWithValue()` utility
      return rejectWithValue(e);
    }
  }
);
