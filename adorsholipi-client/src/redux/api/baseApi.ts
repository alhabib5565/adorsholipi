import { createApi } from "@reduxjs/toolkit/query/react";
import { tags } from "../tag-types";
import { axiosBaseQuery } from "@/axiosHelper/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://bornolipi-server.vercel.app/api/v1",
  }),
  endpoints: () => ({}),
  tagTypes: Object.values(tags),
});
