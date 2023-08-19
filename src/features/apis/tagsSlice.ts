import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from ".";

export const tagsSlice = createApi({
    reducerPath: "tagsSlice",
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL+"/tags/"
    }),
    tagTypes: ['Tags'],
    endpoints: (builder) => ({     
      getTags: builder.query<any, Object>({
        query: (body) => ({
            url: `list`,
            method: 'POST',
            body,
        }),
      }),
    }),
});
  
export const { useGetTagsQuery } = tagsSlice;