import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery(
    { baseUrl: 'https://portfolio-server-livid-sigma.vercel.app',
})

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: ["projects", "blogs", "skills"],
    endpoints: () => ({}),
  })