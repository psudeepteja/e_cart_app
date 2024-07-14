import { createAsyncThunk } from "@reduxjs/toolkit";
import { getServices } from "../../services/services";

export const getCategoryApi = createAsyncThunk(
	"category/getCategoryApi",
	async (url) => await getServices(url)
);

export const getProductsApi = createAsyncThunk(
	"product/getProductsApi",
	async (url) => await getServices(url)
);