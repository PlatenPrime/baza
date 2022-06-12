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
import Cheetsheets from './components/Tools/Cheetsheets/Cheetsheets';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<React.StrictMode>
		<BrowserRouter>

			<Routes>
				<Route path="/" element={<App />}>

					<Route path="tools" element={<Tools />} >
						<Route
							index
							element={
								<main style={{ padding: "1rem" }}>
									<p>Select a tool</p>
								</main>
							}
						/>
						<Route path="cheetsheets" element={<Cheetsheets />} />

					</Route>


					<Route path="guides" element={<Guides />} />
					<Route path="workbook" element={<Workbook />} />
					<Route
						path="*"
						element={
							<main style={{ padding: "1rem" }}>
								<p>There's nothing here!</p>
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
