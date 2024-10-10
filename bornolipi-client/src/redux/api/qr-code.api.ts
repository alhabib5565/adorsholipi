import { tags } from "../tag-types";
import { baseApi } from "./baseApi";

const qrCodeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    generateQRCode: builder.mutation({
      query: (data) => ({
        url: "/qr-codes/generate-qr-code",
        method: "POST",
        data,
      }),
      invalidatesTags: [tags.QRCode],
    }),

    getAllQRCods: builder.query({
      query: () => ({
        url: "/qr-codes",
      }),
      providesTags: [tags.QRCode],
    }),
  }),
});

export const { useGenerateQRCodeMutation, useGetAllQRCodsQuery } = qrCodeApi;
