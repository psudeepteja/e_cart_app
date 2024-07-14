import { createSlice } from '@reduxjs/toolkit'
import { getCategoryApi } from '../asyncThunk'

const initialState = {
  category: []
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryApi.fulfilled, (state, action) => {
      state.category = action.payload;
    })
  }
})

export default categorySlice.reducer