import './App.css';
import SideBar from './components/SideBar/SideBar.jsx';
import { Outlet } from 'react-router';




function App() {
	return (
		<div className='App'>
			<SideBar />
			<Outlet />
		</div>
	);
}

export default App;
