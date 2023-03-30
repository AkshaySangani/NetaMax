import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IPromotion } from "./IPromotion";
import { GET_ALL_PROMOTIONS_API_URL } from "constants/promotionConstants";

export const getPromotions = createAsyncThunk("promo/getPromotions", async () => {
  const response = await get(GET_ALL_PROMOTIONS_API_URL);
  return (await response.data) as IPromotion[];
});

export const getPromotionsById = createAsyncThunk(
  "promo/getPromotionsById",
  async (productId: string) => {
    const response = await get(`${GET_ALL_PROMOTIONS_API_URL}${productId}`);
    return (await response.data) as IPromotion;
  }
);
