import { createSlice } from "@reduxjs/toolkit";
import { createChannel, getAllChannels } from "../actions/channels";

type InitialState = {
  channels: IChannel[] | null;
  loading: boolean;
  errors: string[] | null;
};

const initialState: InitialState = {
  errors: null,
  loading: false,
  channels: null,
};

const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // ************************************ create a new channel **********************************
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
    // ********************************** Get all channels list ********************************
    builder.addCase(getAllChannels.pending, (state) => {
      state.errors = null;
      state.loading = true;
    });
    builder.addCase(getAllChannels.fulfilled, (state,action) => {
      state.loading = false;
      state.channels=action.payload;
    });
    builder.addCase(getAllChannels.rejected, (state, action) => {
      state.loading = false;
      const errors = action.payload?.errors;
      state.errors = errors || [action.error.message || "unknow error"];
    });
    // ********************************* 
  },
});

export default channelsSlice.reducer;
