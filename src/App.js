import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import SignIn from './components/SignIn';

function App() {
	return (
		<div className='App'>
			<Button variant="contained" style={{backgroundColor: "crimson"}}>Это БАЗА, детка</Button>
<SignIn/>
		</div>
	);
}

export default App;
