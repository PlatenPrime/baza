
import { configureStore } from '@reduxjs/toolkit';
import displaySliceReducer from "./features/displaySlice";




export const store = configureStore({
	reducer: {

		display: displaySliceReducer,

	},
})