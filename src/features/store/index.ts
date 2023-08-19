import { configureStore } from "@reduxjs/toolkit";
import { blogsApi } from "../apis/blogsSlice";
import { categoriesSlice } from "../apis/categoriesSlice";
import { tagsSlice } from "../apis/tagsSlice";


export const store = configureStore({
  reducer: {
    [blogsApi.reducerPath]: blogsApi.reducer,
    [categoriesSlice.reducerPath]: categoriesSlice.reducer,
    [tagsSlice.reducerPath]: tagsSlice.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      blogsApi.middleware,
      categoriesSlice.middleware,
      tagsSlice.middleware
    ]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;