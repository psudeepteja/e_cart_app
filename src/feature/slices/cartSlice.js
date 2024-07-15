import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart = [...state.cart, ...action.payload]
    },
    increment: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item) {
        item.quantity += quantity;
      }
    },
    decrement: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity -= quantity;
      }
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.cart = state.cart.filter((item) => item.id !== idToRemove);
    },
    clearCart: (state) => {
      state.cart = []
    }
  },
})

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer