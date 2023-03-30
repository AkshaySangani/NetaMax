import { GET_CATEGORY_PRODUCTS_URL } from "constants/productConstants";
import { IPagedData } from "dataflows/IPagedData";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";

export const getCategoryProductsPage = createAsyncThunk(
  "product/getCategoryProducts",
  async (data: { npp: number; page: number; categoryId: string }) => {
    const response = await get(
      `${GET_CATEGORY_PRODUCTS_URL}/${data.categoryId}/product?npp=${data.npp}&page=${data.page}`
    );
    return (await response.data) as IPagedData<IProduct>;
  }
);

export const getHomeCategoryProductsPage = createAsyncThunk(
  "product/getHomeCategoryProducts",
  async (data: { npp: number; page: number; categoryId: string }) => {
    const response = await get(
      `${GET_CATEGORY_PRODUCTS_URL}/${data.categoryId}/product?npp=${data.npp}&page=${data.page}`
    );
    const pageProducts = (await response.data) as IPagedData<IProduct>;
    return { categoryId: data.categoryId, pagedData: pageProducts };
  }
);
