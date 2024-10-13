import { tags } from "../tag-types";
import { baseApi } from "./baseApi";

const kidsVoice = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    uploadKidsVoice: builder.mutation({
      query: (data) => ({
        url: "/voices/voice-upload",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tags.QRCode],
    }),

    editKidsVoice: builder.mutation({
      query: (data) => ({
        url: "/voices/edit-voice",
        method: "PATCH",
        data,
      }),
      invalidatesTags: [tags.QRCode],
    }),

    getAllKidsVoices: builder.query({
      query: () => ({
        url: "/voices",
      }),
      providesTags: [tags.QRCode],
    }),
  }),
});

export const {
  useUploadKidsVoiceMutation,
  useEditKidsVoiceMutation,
  useGetAllKidsVoicesQuery,
} = kidsVoice;
