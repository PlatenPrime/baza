import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Tools from './components/Tools/Tools';
import Guides from './components/Guides/Guides';
import Workbook from './components/Workbook/Workbook';
import Navbar from './components/Navbar/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<React.StrictMode>
		<BrowserRouter>

			<Routes>
				<Route path="/" element={<App />}>

					<Route index element={<h1>App</h1>} />

					<Route path="tools/*" element={<Tools />} >
						<Route path=":toolscategory" element={<h1>Resourses</h1>} />

					</Route>



					<Route path="guides" element={<Guides />} />
					<Route path="workbook" element={<Workbook />} />
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>Нихрена не отрисует</p>
							</main>
						}
					/>
				</Route>
			</Routes>

		</BrowserRouter>
	</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
