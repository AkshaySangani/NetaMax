import { GET_ALL_CATEGORIES_API_URL } from "constants/categoryConstants";
import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { ICategory } from "./ICategory";

export const getCategories = createAsyncThunk("category/getCategories", async () => {
  const response = await get(GET_ALL_CATEGORIES_API_URL);
  return (await response.data) as ICategory[];
});
