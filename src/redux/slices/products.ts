import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts } from "../actions/products";
import { getRandomItems } from "../../helpers";

type InitialState= {
  products: IProduct[] | null;
  loading: boolean;
  errors: string[] | null
  random_4_products:IProduct[] | null;
}

const initialState: InitialState = {
  errors: null,
  loading: false,
  products: null,
  random_4_products: null
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // *********************************************** SIGNUP *****************************************************************
    builder.addCase(getAllProducts.pending, (state) => {
      state.errors = null;
      state.loading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      const products=action.payload.products;
      state.loading = false;
      state.products= products;
      state.random_4_products=getRandomItems(products,4);
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.loading = false;
      const errors = action.payload?.errors;
      state.errors = errors || [action.error.message || "unknow error"];
    });
  },
});

export default productsSlice.reducer;
