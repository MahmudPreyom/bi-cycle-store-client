import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserOrders: builder.query({
      query: () => ({
        url: "orders/order/my-orders",
        method: "GET",
      }),
      providesTags: ["Orders"],
    }),
    createOrderBiCycle: builder.mutation({
      query: (orderData) => ({
        url: "/orders",
        method: "POST",
        body: orderData,
        credentials: "include",
      }),
      invalidatesTags: ["Orders"],
    }),
    updateBicycleOrder: builder.mutation({
      query: (args) => ({
        url: `/orders/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
      invalidatesTags: ["Orders"],
    }),
    deleteBicycleOrder: builder.mutation({
      query: (orderId) => ({
        url: `/orders/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Orders"],
    }),
  }),
});

export const {
  useGetUserOrdersQuery,
  useDeleteBicycleOrderMutation,
  useUpdateBicycleOrderMutation,
  useCreateOrderBiCycleMutation,
} = orderApi;
