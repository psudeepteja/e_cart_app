import { combineReducers } from '@reduxjs/toolkit'
import storage from "redux-persist/lib/storage";
import persistReducer from 'redux-persist/es/persistReducer';
import counterReducer from '../feature/slices/counterSlice';
import categoriesReducer from '../feature/slices/categoriesSlice';
import productReducer from '../feature/slices/productSlice';
import cartReducer from '../feature/slices/cartSlice';
import orderReducer from '../feature/slices/orderSlice';
import homeProductReducer from '../feature/slices/homeProductsSlice'

const persistConfig = {
	key: "root",
	storage,
};

export const rootReducer = combineReducers({
	counter: counterReducer,
	categories: categoriesReducer,
	product: productReducer,
	cart: cartReducer,
	order: orderReducer,
	homeProduct: homeProductReducer
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);