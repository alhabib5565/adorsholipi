import { tags } from "../tag-types";
import { baseApi } from "./baseApi";

const userFeedbackApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUserFeedback: builder.mutation({
      query: (data) => ({
        url: `/feedbacks/create-feedback`,
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.UserFeedback],
    }),

    editUserFeedback: builder.mutation({
      query: ({ data, id }) => ({
        url: `/feedbacks/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tags.UserFeedback],
    }),

    getAllUserFeedback: builder.query({
      query: () => ({
        url: "/feedbacks",
      }),
      providesTags: [tags.UserFeedback],
    }),

    getOneUserFeedback: builder.query({
      query: (id) => ({
        url: `/feedbacks/${id}`,
      }),
      providesTags: [tags.UserFeedback],
    }),
  }),
});

export const {
  useGetAllUserFeedbackQuery,
  useGetOneUserFeedbackQuery,
  useCreateUserFeedbackMutation,
  useEditUserFeedbackMutation,
} = userFeedbackApi;
