import { createSlice } from '@reduxjs/toolkit'
import { getCategoryApi } from '../asyncThunk'

const initialState = {
  category: [],
  isLoading: "idle"
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryApi.pending, (state, action) => {
      state.isLoading = "pending";
    })
    .addCase(getCategoryApi.fulfilled, (state, action) => {
      state.category = action.payload;
      state.isLoading = "idle";
    })
     .addCase(getCategoryApi.rejected, (state, action) => {
      state.isLoading = "idle";
    })
  }
})

export default categorySlice.reducer