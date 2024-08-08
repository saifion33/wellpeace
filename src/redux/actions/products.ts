import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProductsApi } from "../../API";

export const getAllProducts = createAsyncThunk<
  IGetAllProductsResponse,
  void,
  { rejectValue: IServerResponse }
>("/products/all", async (_, thunkApi) => {
  try {
    const response = await getAllProductsApi();
    return response.data as IGetAllProductsResponse;
  } catch (error) {
    const requestError = error as { response: { data: IServerResponse } };
    return thunkApi.rejectWithValue(requestError.response.data);
  }
});
