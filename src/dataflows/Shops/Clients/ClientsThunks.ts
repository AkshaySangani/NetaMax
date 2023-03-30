import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IClient } from "../IClient";

const MS_SECURITY_URL = process.env.NEXT_PUBLIC_MS_SECURITY_URL;

export const getClients = createAsyncThunk(
  "shopsLogin/getClients",
  async (data: { storeId?: string }) => {
    const response = await axios.get(`${MS_SECURITY_URL}/customers/store/${data.storeId}`);
    return (await response.data) as IClient[];
  }
);
