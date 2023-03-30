import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { getCategories } from "./CategoryThunks";
import { ICategoryState } from "./ICategoryState";

const initialState: ICategoryState = {
  categoryItems: [],
  isLoading: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    selectCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = state.categoryItems.find(
        (category) => category.id === action.payload
      );
    },
  },
  extraReducers: {
    [getCategories.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getCategories.fulfilled.type]: (state, action) => {
      state.categoryItems = action.payload;
      state.isLoading = false;
    },
    [getCategories.rejected.type]: (state) => {
      state.isLoading = false;
    },
  },
});

/**
 * Actions
 */
export const { selectCategory } = categorySlice.actions;

/**
 * Reducers
 */
export const categoryReducer = categorySlice.reducer;
