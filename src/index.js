import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Tools from './components/Tools/Tools';
import Main from './components/Main/Main';
import Content from './components/Tools/Content/Content';


import { store } from './store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<React.StrictMode>

		<Provider store={store}>

			<BrowserRouter>

				<Routes>
					<Route path="/" element={<App />}>

						<Route index element={<Main />} />

						<Route path="tools/*" element={<Tools />} >

							<Route path=":category" element={<Content />} />

						</Route>


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

		</Provider>

	</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
