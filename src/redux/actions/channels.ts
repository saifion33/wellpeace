import { createAsyncThunk } from "@reduxjs/toolkit";
import { createChannelFunc, getChannelsList } from "../../helpers";

export const createChannel = createAsyncThunk<
  ICreateChannelResponse,
  ICreateChannelData,
  { rejectValue: IServerResponse }
>("/community/create", async (data, thunkApi) => {
  try {
    const _id = await createChannelFunc(data);
    if (!_id) {
      throw new Error("channel creation failed.");
    }
    return { _id };
  } catch (error) {
    const errMsg = error as { message: string; errors: string[] };
    return thunkApi.rejectWithValue(errMsg);
  }
});

export const getAllChannels = createAsyncThunk<
  IChannel[],
  void,
  { rejectValue: IServerResponse }
>("/community/getAllChannels", async (_, thunkApi) => {
  try {
    const data = await getChannelsList();
    if (!data) {
      throw new Error("No channels list found.");
    }
    return data;
  } catch (error) {
    console.log(error);
    const errMsg = error as { message: string; errors: string[] };
    return thunkApi.rejectWithValue(errMsg);
  }
});
