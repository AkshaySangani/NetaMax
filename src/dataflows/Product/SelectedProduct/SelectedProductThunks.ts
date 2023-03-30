import { GET_PRODUCTS_URL } from "constants/productConstants";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";

export const getProductById = createAsyncThunk(
  "product/getProductById",
  async (productId: string) => {
    const response = await get(`${GET_PRODUCTS_URL}/${productId}`);
    return (await response.data) as IProduct;
  }
);
