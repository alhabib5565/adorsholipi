import { tags } from "../tag-types";
import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        url: `/users/create-user`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.Users],
    }),

    editUsers: builder.mutation({
      query: ({ data, id }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tags.Users],
    }),

    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: [tags.Users],
    }),

    getSingleUsers: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
      }),
      providesTags: [tags.Users],
    }),
  }),
});

export const {
  useCreateUserMutation,
  useEditUsersMutation,
  useGetAllUsersQuery,
  useGetSingleUsersQuery,
} = userApi;
