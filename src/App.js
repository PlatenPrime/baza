import './App.css';
import SideBar from './components/SideBar/SideBar.jsx';
import RightBar from './components/RightBar/RightBar.jsx';
import { Outlet } from 'react-router';

import { Box, Stack } from '@mui/material';
import styled from '@emotion/styled';





function App() {
	return (



		<Box className='App' m={0} p={0} >



			<Stack direction="row" className="stack" m={0} p={0}    >

				<SideBar />

				<Box flex={7} >
					<Outlet />
				</Box>

				<RightBar />

			</Stack>



		</Box>


	);
}

export default App;
