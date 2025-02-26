// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { createOrder, verifyPayment } from './action';
// // import { createOrder, verifyPayment } from './actions';

// interface OrderState {
//   loading: boolean;
//   error: string | null;
//   checkoutUrl: string | null;
//   verificationData: any | null;
// }

// const initialState: OrderState = {
//   loading: false,
//   error: null,
//   checkoutUrl: null,
//   verificationData: null,
// };

// const orderSlice = createSlice({
//   name: 'order',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(createOrder.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.checkoutUrl = null;
//       })
//       .addCase(createOrder.fulfilled, (state, action: PayloadAction<string>) => {
//         state.loading = false;
//         state.checkoutUrl = action.payload;
//       })
//       .addCase(createOrder.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to create order';
//       })
//       .addCase(verifyPayment.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.verificationData = null;
//       })
//       .addCase(verifyPayment.fulfilled, (state, action: PayloadAction<any>) => {
//         state.loading = false;
//         state.verificationData = action.payload;
//       })
//       .addCase(verifyPayment.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message || 'Failed to verify payment';
//       });
//   },
// });

// export default orderSlice.reducer;
