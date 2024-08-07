import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, signup } from "../actions/auth";

const storedUser = localStorage.getItem("user");

type InitialState = {
  loading: boolean;
  user: null | IUser;
  errors: null | string[];
};

const initialState: InitialState = {
  loading: false,
  user: storedUser !== undefined && storedUser ? JSON.parse(storedUser) : null,
  errors: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<InitialState>) => {
      localStorage.removeItem("user");
      state = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    logout:(state)=>{
      state.user=null;
      state.loading=false;
      state.errors=null;
    }
  },

  extraReducers: (builder) => {
    // *********************************************** SIGNUP *****************************************************************
    builder.addCase(signup.pending, (state) => {
      state.errors = null;
      state.loading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.loading = false;
      const errors = action.payload?.errors;
      state.errors = errors || [action.error.message || "unknow error"];
    });
    // ************************************************* login  *********************************************
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.errors = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      const errors = action.payload?.errors;
      state.errors = errors || [action.error.message || "unknow error"];
    });
  },
});

export const { setAuth,setLoading ,logout} = authSlice.actions;
export default authSlice.reducer;
