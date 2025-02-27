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
    getUserOrdersByAdmin: builder.query({
      query: () => ({
        url: "orders/order/get-all-orders",
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
    updateBicycleOrderByAdmin: builder.mutation({
      query: (args) => ({
        url: `/orders/orderShipping/${args.id}`,
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
    deleteBicycleOrderByAdmin: builder.mutation({
      query: (orderId) => ({
        url: `/orders/order/${orderId}`,
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
  useUpdateBicycleOrderByAdminMutation,
  useDeleteBicycleOrderByAdminMutation,
  useCreateOrderBiCycleMutation,
  useGetUserOrdersByAdminQuery,
} = orderApi;
