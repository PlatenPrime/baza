import './App.css';
import SideBar from './components/SideBar/SideBar.jsx';
import RightBar from './components/RightBar/RightBar.jsx';
import { Outlet } from 'react-router';
import BazaAppBar from './components/BazaAppBar/BazaAppBar';
import { Box, Stack } from '@mui/material';





function App() {
	return (
		<>


			<Box className='App'  >

				<BazaAppBar />

				<Stack direction="row" >

					<SideBar />

					<Box flex={4} p={2}>
						<Outlet />
					</Box>

					<RightBar />

				</Stack>



			</Box>

		</>
	);
}

export default App;
