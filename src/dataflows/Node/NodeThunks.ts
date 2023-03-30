import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { INode } from "./INode";

export const getNodes = createAsyncThunk("node/getNodes", async () => {
  const response = await get("node");
  const data = await response.data;
  if (Array.isArray(data)) {
    return data as INode[];
  } else {
    return [];
  }
});

export const getNodesById = createAsyncThunk("node/getNodesById", async () => {
  const response = await get("node");
  return (await response.data) as INode;
});
