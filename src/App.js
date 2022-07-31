import './App.css';
import SideBar from './components/SideBar/SideBar.jsx';
import RightBar from './components/RightBar/RightBar.jsx';
import { Outlet } from 'react-router';

import { Box, Stack } from '@mui/material';

import BazaAppBar from './components/BazaAppBar/BazaAppBar';
import { useState } from 'react';

import { useContext } from "react";
import { BazaContext } from './BazaContext';

import { useReducer } from 'react';








function App() {


	const BazaState = useContext(BazaContext);





	const [state, dispatch] = useReducer(stateReducer, BazaState);





	function DisplayRightMenu() {
		dispatch(
			{
				type: "DisplayRightMenu",
			}
		)
	}


	function DisplayLeftMenu() {
		dispatch(
			{
				type: "DisplayLeftMenu",
			}
		)
	}





	return (

		<BazaContext.Provider value={state}>

			<Box className='App' m={0} p={0}>

				<BazaAppBar




					DisplayRightMenu={DisplayRightMenu}
					DisplayLeftMenu={DisplayLeftMenu}



				/>

				<Stack direction="row" className="stack" m={0} p={0}>

					<Box flex={1} p={1} sx={{
						display: {
							xs: "none",
							sm: "none",
							md: "block"
						}
					}}   >


						<Box className='sideBar'

							sx={{

								height: "92%",
								overflow: "hidden",
								overflowY: "scroll",

							}}

						>
							<SideBar />
						</Box>


					</Box>



					<Box flex={3} className="outlet">
						<Outlet />
					</Box>


					<Box flex={1} sx={{
						display: {
							xs: "none",
							sm: "none",
							md: "block"
						},

					}}   >



						<Box className="rightBar"

							sx={{

								height: "92%",
								overflow: "hidden",
								overflowY: "scroll",

							}}



						>
							<RightBar />
						</Box>

					</Box>

				</Stack>



			</Box>

		</BazaContext.Provider>

	);
}





function stateReducer(state, action) {
	switch (action.type) {


		case 'DisplayRightBar': {

			console.log("DRB");

			return {
				...state, drb: !state.drb,
			}
				;
		}


		case "DisplayRightMenu": {

			console.log("DRM");

			return {
				...state,
				displayRightMenu: !state.displayRightMenu,
				displayRightBar: !state.displayRightBar,

			}
		}


		case "DisplayLeftMenu": {

			console.log("DLM");

			return {
				...state, displayLeftMenu: !state.displayLeftMenu,
			}
		}


		default: {
			throw Error('Unknown action: ' + action.type);
		}
	}
}




















export default App;
