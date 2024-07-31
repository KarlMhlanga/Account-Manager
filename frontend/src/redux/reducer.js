import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  account: {},
  services: [],
  payments: [],
  orders: [],
};

const telecomSlice = createSlice({
  name: 'telecom',
  initialState,
  reducers: {
    setAccountStatus(state, action) {
      state.account = action.payload;
    },
    setServices(state, action) {
      state.services = action.payload;
    },
    setPayments(state, action) {
      state.payments = action.payload;
    },
    setOrders(state, action) {
      state.orders = action.payload;
    },
  },
});

export const { setAccountStatus, setServices, setPayments, setOrders } = telecomSlice.actions;
export default telecomSlice.reducer;
