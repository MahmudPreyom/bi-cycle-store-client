import { Product } from "../../../pages/Home/AllBiCycle";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
    
        if (args) {
          Object.entries(args).forEach(([key, value]) => {
            if (value !== undefined) {
              params.append(key, value as string);
            }
          });
        }
    
        return {
          url: "/products",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<Product>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
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
