import { createSlice } from '@reduxjs/toolkit'
import { getProductsApi } from '../asyncThunk'

const initialState = {
  products: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsApi.fulfilled, (state, action) => {
      state.products = action.payload;
    })
  }
})

export default productSlice.reducer