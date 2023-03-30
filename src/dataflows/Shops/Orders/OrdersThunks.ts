import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IItem } from "../IItem";
import { IOrderShops } from "../IOrderShops";

const MS_ORDER_URL = process.env.NEXT_PUBLIC_MS_ORDER_URL;

export const getOrders = createAsyncThunk(
  "shopsOrders/getOrders",
  async (data: { orders?: string }) => {
    const response = await axios.get(`${MS_ORDER_URL}/order/list/${data.orders}`);
    return (await response.data) as IOrderShops[];
  }
);

export const getOrderItems = createAsyncThunk(
  "shopsOrders/getOrderItems",
  async (orderId: string) => {
    const response = await axios.get(`${MS_ORDER_URL}/order-item/order/${orderId}`);
    return (await response.data) as IItem[];
  }
);
