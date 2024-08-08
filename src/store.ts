import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/slices/auth"
import productsReducer from './redux/slices/products'
const store = configureStore({
  reducer: {
      auth:authReducer,
      products:productsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
