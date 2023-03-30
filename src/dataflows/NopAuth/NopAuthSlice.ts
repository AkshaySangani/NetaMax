import { createSlice } from "@reduxjs/toolkit";

import { INopAuthState } from "./INopAuthState";
import { acquireNopToken } from "./NopAuthThunks";

const initialState: INopAuthState = {
  isLoadingToken: true,
};

const nopAuthSlice = createSlice({
  name: "nopAuth",
  initialState,
  reducers: {},
  extraReducers: {
    [acquireNopToken.fulfilled.type]: (state, action) => {
      state.token = action.payload.token;
      state.isLoadingToken = false;
    },
    [acquireNopToken.pending.type]: (state) => {
      state.isLoadingToken = true;
    },
  },
});

/**
 * Reducers
 */
export const nopAuthReducer = nopAuthSlice.reducer;
