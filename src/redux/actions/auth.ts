import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginApi, signupApi } from "../../API";
import { signinWithEmail, signupwithEmail } from "../../helpers";

interface ISignupResponse extends IServerResponse {
  user: IUser;
}

export const signup = createAsyncThunk<
  ISignupResponse,
  ISignupData,
  { rejectValue: IServerResponse }
>("/auth/signup", async (data, thunkApi) => {
  try {
    const token = await signupwithEmail(data);
    if (!token) {
      throw new Error("firebase token not found.");
    }
    const formData = { ...data, token };
    const response = await signupApi(formData);
    return response.data as ISignupResponse;
  } catch (error) {
    const requestError = error as { response: { data: IServerResponse } };
    return thunkApi.rejectWithValue(requestError.response.data);
  }
});

export const login = createAsyncThunk<
  ISignupResponse,
  ISignupLoginForm,
  { rejectValue: IServerResponse }
>("/auth/login", async (data: ISignupLoginForm, thunkApi) => {
  try {
    const token=await signinWithEmail(data);
    if (!token) {
      throw new Error("firebase token not found.");
    }
    const formData = { ...data, token };
    const response = await loginApi(formData);
    return response.data as ISignupResponse;
  } catch (error) {
    const requestError = error as { response: { data: IServerResponse } };
    return thunkApi.rejectWithValue(requestError.response.data);
  }
});
