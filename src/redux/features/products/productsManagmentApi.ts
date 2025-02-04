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
      query: (productId) => {
        const params = new URLSearchParams(productId);
        return {
          url: `products/${productId}`,
          method: "GET",
          params: params,
        };
      },
    }),
  }),
});

export const { useGetAllProductsQuery, useGetSingleBicycleQuery } = productApi;
