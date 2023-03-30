import axios from "axios";

import { createAsyncThunk } from "@reduxjs/toolkit";

const NOP_API_URL = process.env.NEXT_PUBLIC_NOP_API_URL;

export const acquireNopToken = createAsyncThunk(
  "nopAuth/acquireToken",
  async (data: { email?: string; password?: string }) => {
    const response = await axios.post(`${NOP_API_URL}/Authenticate/GetToken`, data);
    const result = (await response.data) as {
      token: string;
      username: string;
      customer_id: number;
    };

    return result;
  }
);
