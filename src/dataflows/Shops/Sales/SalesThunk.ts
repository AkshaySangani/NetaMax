import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { ISales } from "./ISales";

const MS_ORDER_URL = process.env.NEXT_PUBLIC_MS_ORDER_URL;

export const getSales = createAsyncThunk(
  "shopsLogin/getInvoices",
  async (data: { storeId?: string; date: Date }) => {
    const { storeId, date } = data;
    const response = await axios.get(
      `${MS_ORDER_URL}/order_store/${storeId}?npp=3000&page=1&date=${date.toISOString()}`
    );
    return (await response.data) as ISales;
  }
);
