import { tags } from "../tag-types";
import { baseApi } from "./baseApi";

const kidsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadKidsVoice: builder.mutation({
      query: ({ data, id }) => ({
        url: `/kids-accounts/voice-upload/${id}`,
        method: "PATCH",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tags.kidsAccount],
    }),

    editKidsAccount: builder.mutation({
      query: ({ data, id }) => ({
        url: `/kids-accounts/edit-kids-account/${id}`,
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tags.kidsAccount],
    }),

    getAllKidsAccount: builder.query({
      query: () => ({
        url: "/kids-accounts",
      }),
      providesTags: [tags.kidsAccount],
    }),
  }),
});

export const {
  useUploadKidsVoiceMutation,
  useEditKidsAccountMutation,
  useGetAllKidsAccountQuery,
} = kidsApi;
