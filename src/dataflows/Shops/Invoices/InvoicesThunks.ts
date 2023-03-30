import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IInvoice } from "../IInvoice";

const MS_INVOICE_URL = process.env.NEXT_PUBLIC_MS_INVOICE_URL;

export const getInvoices = createAsyncThunk(
  "shopsLogin/getInvoices",
  async (data: { storeId?: string }) => {
    const response = await axios.get(`${MS_INVOICE_URL}/invoice/of/store/${data.storeId}`);
    return (await response.data) as IInvoice[];
  }
);
