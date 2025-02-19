import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
    getSingleBicycle: builder.query({
      query: (id) => {
        const params = new URLSearchParams(id);
        return {
          url: `products/${id}`,
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleBicycleQuery } = productApi;
