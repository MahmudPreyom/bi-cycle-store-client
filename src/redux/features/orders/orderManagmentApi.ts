import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSingleOrder: builder.query({
      query: (id) => {
        const params = new URLSearchParams(id);
        return {
          url: `orders/${id}`,
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useGetSingleOrderQuery } = orderApi;
