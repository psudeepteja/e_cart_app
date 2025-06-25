import { createSlice } from "@reduxjs/toolkit";
import { getProductsApi } from "../asyncThunk";

export const homeProductSlice = createSlice({
    name:"homeProduct",
    initialState:{
        menCollections:[],
        womenCollections:[],
        jewelery:[],
        electronics:[],
        isProductLoading:"idel"
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getProductsApi.pending, (state, action)=>{
            state.isProductLoading = "pending"
        })
        .addCase(getProductsApi.fulfilled,(state, action)=>{
          const {arg} = action.meta;
        const {payload} = action;

        if (arg.includes("men's clothing")) {
          state.menCollections = payload;
        } else if (arg.includes("women's clothing")) {
          state.womenCollections = payload;
        } else if (arg.includes("jewelery")) {
          state.jewelery = payload;
        } else if (arg.includes("electronics")) {
          state.electronics = payload;
        }
        })
        .addCase(getProductsApi.rejected, (state, action)=>{
            state= initialState
        })
    }
})

export default homeProductSlice.reducer