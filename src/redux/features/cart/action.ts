// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { RootState } from '../../store';

// interface OrderData {
//   product: string;
//   quantity: number;
//   // ... other necessary order data
// }

// interface OrderResponse {
//   data: string; // Checkout URL
// }

// export const createOrder = createAsyncThunk<
//   string, // Return type
//   OrderData, // Argument type
//   { state: RootState }
// >('order/createOrder', async (orderData, { getState }) => {
//   const token = getState().auth.token; // Assuming you store token in auth slice
//   try {
//     const response = await axios.post<OrderResponse>(
//       '/api/orders', // Your backend order creation endpoint
//       orderData,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data.data; // Return checkout URL
//   } catch (error: any) {
//     throw new Error(error.response?.data?.message || 'Failed to create order');
//   }
// });

// interface VerifyPaymentResponse {
//   data: any; // Adjust type based on your verification response
// }

// export const verifyPayment = createAsyncThunk<
//   any, // Return type
//   string, // Order ID
//   { state: RootState }
// >('order/verifyPayment', async (orderId, { getState }) => {
//   const token = getState().auth.token;
//   try {
//     const response = await axios.get<VerifyPaymentResponse>(
//       `/api/orders/verify?order_id=${orderId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );
//     return response.data.data;
//   } catch (error: any) {
//     throw new Error(error.response?.data?.message || 'Failed to verify payment');
//   }
// });