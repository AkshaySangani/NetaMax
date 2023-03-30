import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IBasketItem } from "./IBasketItem";
import { IBasketState } from "./IBasketState";

const initialState: IBasketState = {
  basketItems: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IBasketItem>) => {
      const { id } = action.payload;
      const existingItem = state.basketItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.basketItems.push(action.payload);
      }
    },
    removeItem: (state, action: PayloadAction<IBasketItem>) => {
      const { id } = action.payload;
      const existingItem = state.basketItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        const existingItemIndex = state.basketItems.findIndex((item) => item.id === id);
        state.basketItems.splice(existingItemIndex, 1);
      }
    },
    clearBasket: (state) => {
      state.basketItems = [];
    },
    addQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.basketItems.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity++;
      }
    },
    removeQuantity: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const existingItem = state.basketItems.find((item) => item.id === id);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--;
      } else {
        const existingItemIndex = state.basketItems.findIndex((item) => item.id === id);
        state.basketItems.splice(existingItemIndex, 1);
      }
    },
  },
});

/**
 * Actions
 */
export const { addItem, removeItem, addQuantity, removeQuantity, clearBasket } =
  basketSlice.actions;

/**
 * Reducers
 */
export const basketReducer = basketSlice.reducer;
