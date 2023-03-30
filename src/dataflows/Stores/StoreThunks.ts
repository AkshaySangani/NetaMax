import { get } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { INearestStore } from "./INearestStore";
import { IResponse, IStore } from "./IStore";

export const getStoreByName = createAsyncThunk("store/getStoreDetail", async (name: string) => {
  const response = await get(`store?url=${name}`);
  const stores = (await response.data) as IStore[];
  if (Array.isArray(stores) && stores.length !== 0) return stores[0];
  else return undefined;
});

export const getNearestStores = createAsyncThunk(
  "store/getStores",
  async (data: { lat: number; lng: number; search: string }) => {
    const response = await get(
      `store/by/location?location=${encodeURIComponent(data.search)}&lat=${data.lat}&lng=${
        data.lng
      }`
    );
    const typedResponse = response.data as IResponse;
    const nearestStores = typedResponse.stores;
    if (Array.isArray(nearestStores) && nearestStores.length !== 0) {
      nearestStores.map((store) => {
        store.location = { lat: Number(store.latitud), lng: Number(store.longitud) };

        return store;
      });
      return {
        nearestStores: nearestStores as INearestStore[],
        distance: typedResponse.distance,
      };
    } else throw Error("No nearest stores found.");
  }
);
