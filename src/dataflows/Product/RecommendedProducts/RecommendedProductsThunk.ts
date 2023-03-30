import { GET_PRODUCT_RECOMMENDATIONS_URL } from "constants/productConstants";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";

export const getProductRecommendations = createAsyncThunk(
  "product/getProductRecommendations",
  async (productId: string): Promise<IProduct[]> => {
    const response = await get(`${GET_PRODUCT_RECOMMENDATIONS_URL}/${productId}`);
    const data = (await response.data) as { RecommendedProductsIds: IProduct[] };
    return data.RecommendedProductsIds;
  }
);
