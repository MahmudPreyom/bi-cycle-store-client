import { baseApi } from "../../api/baseApi";

export const biCycleManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBicycle: builder.query({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["Bicycle"],
    }),
    addBicycle: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Bicycle"],
    }),
    deleteBicycle: builder.mutation({
      query: (productId) => ({
        url: `/products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Bicycle"],
    }),
    updateBicycle: builder.mutation({
      query: (args) => ({
        url: `/products/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["Bicycle"],
    }),
  }),
});

export const {
  useAddBicycleMutation,
  useGetAllBicycleQuery,
  useDeleteBicycleMutation,
  useUpdateBicycleMutation,
} = biCycleManagementApi;
