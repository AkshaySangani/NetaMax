import { IPagedData } from "dataflows/IPagedData";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IOrder } from "./IOrder";
import { IOrderDetail } from "./IOrderDetail";

export const getOrderByOrderId = createAsyncThunk(
  "misCompras/getOrderByOrderId",
  async (orderId: string) => {
    const response = await get(`order/${orderId}`);
    return (await response.data) as IOrderDetail;
  }
);

export const getOrders = createAsyncThunk(
  "misCompras/getMisCompras",
  async (data: { npp: number; page: number; userId: string }) => {
    const response = await get(`order_customer/${data.userId}?npp=${data.npp}&page=${data.page}`);
    return (await response.data) as IPagedData<IOrder>;
  }
);
