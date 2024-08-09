import { createSlice } from "@reduxjs/toolkit";
import { channels } from "../../helpers";
import { createChannel } from "../actions/channels";

type InitialState = {
  channels: IChannel[] | null;
  loading: boolean;
  errors: string[] | null;
};

const initialState: InitialState = {
  errors: null,
  loading: false,
  channels: channels,
};

const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createChannel.pending, (state) => {
      state.errors = null;
      state.loading = true;
    });
    builder.addCase(createChannel.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(createChannel.rejected, (state, action) => {
      state.loading = false;
      const errors = action.payload?.errors;
      state.errors = errors || [action.error.message || "unknow error"];
    });
  },
});

export default channelsSlice.reducer;
