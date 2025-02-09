import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  order: []
}

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    orderItems: (state, action) => {
     state.order =  state.order.concat(action.payload)
    },
  },
})

export const { orderItems } = orderSlice.actions

export default orderSlice.reducer