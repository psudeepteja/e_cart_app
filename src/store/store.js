import { configureStore } from '@reduxjs/toolkit'
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { persistedReducer } from './reducer';

const preloadedState = {};

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(logger),
	devTools: process.env.NODE_ENV !== "production",
	preloadedState,
	// enhancers: [],
})

export const persistor = persistStore(store);