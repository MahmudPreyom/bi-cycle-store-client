import { baseApi } from "../../api/baseApi";

export const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateUserPassword: builder.mutation({
      query: (args) => ({
        url: "user/change-password",
        method: "PATCH",
        body: args.data,
      }),
      //   invalidatesTags: ["User"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
  }),
});

export const { useUpdateUserPasswordMutation, useGetAllUsersQuery } =
  userManagementApi;
