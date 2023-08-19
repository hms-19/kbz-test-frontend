import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from ".";

export const blogsApi = createApi({
    reducerPath: "blogsApi",
    baseQuery: fetchBaseQuery({
      baseUrl: BASE_URL+"/blogs/"
    }),
    tagTypes: ['Blogs'],
    endpoints: (builder) => ({     
      getBlogs: builder.query<any, Object>({
        query: (body) => ({
            url: `list`,
            method: 'POST',
            body,
        }),
        transformResponse: (response : any, request : any) => {
          const { data, page } = request;
          
          return {
            data: [...(data?.data || []), ...response.data],            
            status: response?.status
          };
        },
  
      }),
      getBlogDetail: builder.query<any, Object>({
        query: (body) => ({
            url: `detail`,
            method: 'POST',
            body,
        }),
      }),
    }),
});
  
export const { useGetBlogsQuery, useGetBlogDetailQuery } = blogsApi;