import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout.jsx';
import App from './App.jsx';
import { LoginPage, RegistrationPage, Home } from './pages';
import './index.css';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import { FirebaseProvider } from './context/Firebase.jsx';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Layout />}>
			<Route path='' element={<App />} />
			{/* <Route path='' element={<Home />} /> */}
			<Route path='login' element={<LoginPage />} />
			<Route path='register' element={<RegistrationPage />} />
			<Route path='home' element={<Home />} />
			<Route path='*' element={<Home />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<FirebaseProvider>
			<RouterProvider router={router} />
		</FirebaseProvider>
	</React.StrictMode>
);
