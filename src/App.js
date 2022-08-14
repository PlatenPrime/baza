import './App.css';

import { Outlet } from 'react-router';



import BazaAppBar from './components/BazaAppBar/BazaAppBar';
import SideBar from './components/SideBar/SideBar.jsx';
import RightBar from './components/RightBar/RightBar.jsx';



function App() {



	return (



		<div className='App' >

			<BazaAppBar />

			<main className="main">



				<div className='sideBar' >
					<SideBar />
				</div>





				<div className="outlet">
					<Outlet />
				</div>





				<div className="rightBar"	>
					<RightBar />
				</div>



			</main>



		</div>



	);
}


export default App;
