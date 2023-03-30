import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProfit } from "../IProfit";

const MS_ORDER_URL = process.env.NEXT_PUBLIC_MS_ORDER_URL;

export const getCurrentProfit = createAsyncThunk(
  "shopsLogin/getCurrentProfit",
  async (data: { storeId?: string }) => {
    const response = await axios.get(`${MS_ORDER_URL}/order/store/${data.storeId}/profit-today`);
    return (await response.data.todaysProfit) as IProfit;
  }
);
