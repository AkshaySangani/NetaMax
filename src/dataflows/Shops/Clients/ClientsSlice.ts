import { createSlice } from "@reduxjs/toolkit";

import { getClients } from "./ClientsThunks";
import { IClientsState } from "./IClientsState";

const initialState: IClientsState = {
  clients: [],
  isLoadingClients: true,
};

const clientsSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {},
  extraReducers: {
    [getClients.pending.type]: (state) => {
      state.isLoadingClients = true;
    },
    [getClients.fulfilled.type]: (state, action) => {
      state.clients = action.payload;
      state.isLoadingClients = false;
    },
    [getClients.rejected.type]: (state) => {
      state.isLoadingClients = false;
    },
  },
});

export const clientsReducer = clientsSlice.reducer;
