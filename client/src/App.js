import { useState } from 'react';

import AppRouter from "./components/AppRouter";

import { http } from "./utils/axios-instance";

import axios from 'axios';


function App() {
	// async function getResponse() {
	// 	const response = await axios.get('https://3d0d-195-158-15-110.eu.ngrok.io');
	// 	console.log(response);
	// }
	// getResponse();
	return (
		<AppRouter />
	);
}


export default App;