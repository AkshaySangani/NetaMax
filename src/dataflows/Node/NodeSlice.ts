import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INodeState } from "./INodeState";
import { getNodes } from "./NodeThunks";

const initialState: INodeState = {
  nodeItems: [],
  isLoadingNodeSection: false,
};

const nodeSlice = createSlice({
  name: "node",
  initialState,
  reducers: {
    selectNode: (state, action: PayloadAction<string>) => {
      state.selectedNode = state.nodeItems.find((node) => node.id.toString() === action.payload);
    },
  },
  extraReducers: {
    [getNodes.pending.type]: (state) => {
      state.isLoadingNodeSection = true;
    },
    [getNodes.fulfilled.type]: (state, action) => {
      state.nodeItems = action.payload;
      state.isLoadingNodeSection = false;
    },
    [getNodes.rejected.type]: (state) => {
      state.isLoadingNodeSection = false;
    },
  },
});

/**
 * Actions
 */
export const { selectNode } = nodeSlice.actions;

/**
 * Reducers
 */
export const nodeReducer = nodeSlice.reducer;
