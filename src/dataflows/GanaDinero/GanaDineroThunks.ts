import { GET_COINS_BY_CUSTOMER_ID } from "constants/ganaDineroContstans";
import { get, post } from "utils/http";

import { createAsyncThunk } from "@reduxjs/toolkit";

import { IChallenge } from "./IChallenge";
import { ICoins } from "./ICoins";

export const getCoins = createAsyncThunk("ganaDinero/getCoins", async () => {
  const response = await get(GET_COINS_BY_CUSTOMER_ID);
  return (await response.data) as ICoins;
});

export const availableChallenges = createAsyncThunk("ganaDinero/availableChallenges", async () => {
  const response = await get("challenge");
  return (await response.data) as IChallenge;
});

export const addCoins = createAsyncThunk("ganaDinero/postCoins", async () => {
  const response = await post("discovery");
  return (await response.data) as ICoins;
});

export const winnerChallenges = createAsyncThunk(
  "ganaDinero/winnerChallenges",
  async (userId: string) => {
    const response = await get(`winner-challenges/${userId}`);
    return (await response.data) as IChallenge;
  }
);

export const getOrderChallengeStatus = createAsyncThunk(
  "ganaDinero/getOrderChallengeStatus",
  async (orderId: string, { dispatch }) => {
    try {
      const response = await post(`challenge-winner/${orderId}`, {});
      dispatch(getCoins());
      return (await response.data) as { isWinner: boolean; coins: number };
    } catch {
      return { isWinner: false };
    }
  }
);

export const acceptChallenge = createAsyncThunk(
  "ganaDinero/acceptChallenge",
  async (args: { challengeId: number; userId: string }, { dispatch }) => {
    const { challengeId } = args;
    await post("accepted-challenges", { challengeId });
    dispatch(availableChallenges());
  }
);
