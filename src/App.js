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
					<SideBar />
				</Box>



				<Box flex={4} >
					<Outlet />
				</Box>


				<Box flex={1} p={1} sx={{
					display: {
						xs: "none",
						sm: "none",
						md: "block"
					}
				}}   >
					<RightBar />

				</Box>

			</Stack>



		</Box>


	);
}

export default App;
