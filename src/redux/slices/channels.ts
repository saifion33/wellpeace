import { createSlice } from "@reduxjs/toolkit";
import { channels } from "../../helpers";


type InitialState= {
  channels: IChannel[] | null;
  loading: boolean;
  errors: string[] | null
}

const initialState: InitialState = {
  errors: null,
  loading: false,
  channels: channels,
};

const channelsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default channelsSlice.reducer;
