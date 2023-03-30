import { AxiosResponse } from "axios";
import { MAX_QTY_PRODUCT_IN_SEARCH } from "constants/navBarConstants";
import { IPagedData } from "dataflows/IPagedData";
import { RootState } from "state/store";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";

export const getSearchProducts = createAsyncThunk(
  "product/getSearchProducts",
  async (data: { nameProduct: string; perPage: number; currentPage: number }) => {
    const url =
      `products/search?q=${data.nameProduct}&npp=${data.perPage}&page=${data.currentPage}` as string;
    const response = await get(url);
    return (await response.data) as IPagedData<IProduct>;
  }
);

export const getSearchBarProducts = createAsyncThunk(
  "product/getSearchBarProducts",
  async (nameProduct: string, { getState }) => {
    const store = getState() as RootState;
    const url =
      `products/search?q=${nameProduct}&npp=${MAX_QTY_PRODUCT_IN_SEARCH}&page=${1}` as string;
    const response: AxiosResponse = await get(url);
    const responseData: IPagedData<IProduct> = {
      ...response.data,
      isUserUnderLegalAge: store.legalAge.isUserUnderLegalAge,
    };
    return responseData as IPagedData<IProduct>;
  }
);
