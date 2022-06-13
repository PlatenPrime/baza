import './App.css';
import SideBar from './components/SideBar/SideBar.jsx';
import { Outlet } from 'react-router';
import GalleryCard from './components/Gallery/GalleryCard/GalleryCard';




function App() {
	return (
		<div className='App'>
			<SideBar />
			{<GalleryCard />}
			{<GalleryCard />}
			{<GalleryCard />}
			<Outlet />
		</div>
	);
}

export default App;
