import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IModalInvoice } from "../IModalInvoice";

const MS_ORDER_URL = process.env.NEXT_PUBLIC_MS_ORDER_URL;

export const getModalInvoice = createAsyncThunk(
  "shopsOrders/getInvoices",
  async (data: { invoiceId?: string }) => {
    const response = await axios.get(`${MS_ORDER_URL}/order_invoice/${data.invoiceId}`);
    return (await response.data) as IModalInvoice;
  }
);
