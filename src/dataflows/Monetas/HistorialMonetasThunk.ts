import { IPagedData } from "dataflows/IPagedData";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IHistorialMonetas } from "./IHistorialMonetas";

export const getMonetasHistory = createAsyncThunk(
  "history/getHistorialMonetas",
  async (data: { npp: number; page: number }) => {
    const response = await get(`history?npp=${data.npp}&page=${data.page}`);
    return (await response.data) as IPagedData<IHistorialMonetas>;
  }
);
