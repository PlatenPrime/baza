import './App.css';
import SideBar from './components/SideBar/SideBar.jsx';
import RightBar from './components/RightBar/RightBar.jsx';
import { Outlet } from 'react-router';

import { Box, Stack } from '@mui/material';
import styled from '@emotion/styled';
import BazaAppBar from './components/BazaAppBar/BazaAppBar';





function App() {
	return (



		<Box className='App' m={0} p={0}>

			<BazaAppBar />

			<Stack direction="row" className="stack" m={0} p={0}

			>

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


	);
}

export default App;
