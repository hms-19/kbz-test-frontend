import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from ".";

export const categoriesSlice = createApi({
    reducerPath: "categoriesSlice",
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL+"/categories/"
    }),
    tagTypes: ['Categories'],
    endpoints: (builder) => ({     
      getCategories: builder.query<any, Object>({
        query: (body) => ({
            url: `list`,
            method: 'POST',
            body,
        }),
      }),
    }),
});
  
export const { useGetCategoriesQuery } = categoriesSlice;