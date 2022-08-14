
import { createSlice } from '@reduxjs/toolkit';





const initialStateValue = {
	displayRightBar: true,
	displayRightMenu: false,
	displayLeftMenu: false,
}


export const displaySlice = createSlice({
	name: "display",
	initialState: { value: initialStateValue },
	reducers: {


		displayRightMenuAction: (state, action) => {
			state.value = action.payload
		},


	},


});



export const { displayRightMenuAction } = displaySlice.actions;

export default displaySlice.reducer;