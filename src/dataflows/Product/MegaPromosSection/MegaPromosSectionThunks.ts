import { GET_PRODUCTS_SALES_SECTION_URL } from "constants/productConstants";
import { IPagedData } from "dataflows/IPagedData";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IProduct } from "../IProduct";

export const getMegaPromosSectionPage = createAsyncThunk(
  "product/getMegaPromosSection",
  async (data: { npp: number; page: number }) => {
    const response = await get(
      `${GET_PRODUCTS_SALES_SECTION_URL}?isPromo=true&npp=${data.npp}&page=${data.page}`
    );
    return (await response.data) as IPagedData<IProduct>;
  }
);
