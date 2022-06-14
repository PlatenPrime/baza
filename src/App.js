import './App.css';
import SideBar from './components/SideBar/SideBar.jsx';
import { Outlet } from 'react-router';
import GalleryCard from './components/Gallery/GalleryCard/GalleryCard';
import HomeLink from './components/HomeLink/HomeLink';




function App() {
	return (
		<div className='App'>
			<HomeLink />
			<SideBar />
			<Outlet />
		</div>
	);
}

export default App;
