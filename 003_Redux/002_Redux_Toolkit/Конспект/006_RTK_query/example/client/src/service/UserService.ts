//src/service/UserService.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://jsonplaceholder.typicode.com`,
  }),
  endpoints: (build) => ({
    fetchAllUsers: build.query({
      query: () => ({
        url: `/users`,
      }),
    }),
  }),
});
