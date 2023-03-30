import { GET_PRODUCTS_NODES_API_URL } from "constants/nodeConstants";
import { IPagedData } from "dataflows/IPagedData";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";

export const getNodeProductsPage = createAsyncThunk(
  "product/getNodeProducts",
  async (data: { npp: number; page: number; nodeId: string }) => {
    const response = await get(
      `${GET_PRODUCTS_NODES_API_URL}?idNode=${data.nodeId}&npp=${data.npp}&page=${data.page}`
    );
    return (await response.data) as IPagedData<IProduct>;
  }
);

export const getHomeNodeProductsPage = createAsyncThunk(
  "product/getHomeNodeProducts",
  async (data: { npp: number; page: number; nodeId: string }) => {
    const response = await get(
      `${GET_PRODUCTS_NODES_API_URL}?idNode=${data.nodeId}&npp=${data.npp}&page=${data.page}`
    );
    const pageProducts = (await response.data) as IPagedData<IProduct>;
    return { nodeId: data.nodeId, pagedData: pageProducts };
  }
);
