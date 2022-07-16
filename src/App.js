import './App.css';
import SideBar from './components/SideBar/SideBar.jsx';
import { Outlet } from 'react-router';
import BazaAppBar from './components/BazaAppBar/BazaAppBar';





function App() {
	return (



		<div className='App'>


			{/* 	<BazaAppBar />

			<div className="AppContent"> */}

			<SideBar />

			<Outlet />
			{/* 	</div> */}

		</div>


	);
}

export default App;
