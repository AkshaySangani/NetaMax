import { GET_ALL_PROMOTIONS_API_URL } from "constants/promotionConstants";
import { IPagedData } from "dataflows/IPagedData";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";

export const getPromotionProductsPage = createAsyncThunk(
  "product/getPromotionProducts",
  async (data: { npp: number; page: number; promotionId: string }) => {
    const response = await get(
      `${GET_ALL_PROMOTIONS_API_URL}/${data.promotionId}/product?npp=${data.npp}&page=${data.page}`
    );
    return (await response.data) as IPagedData<IProduct>;
  }
);
