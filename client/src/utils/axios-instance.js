import axios from 'axios';

const token = localStorage.getItem('token');


export const http = axios.create({
	baseURL: 'https://3d0d-195-158-15-110.eu.ngrok.io/api/v1',
	headers: {
		authorization: `Bearer ${token}`
	}
})

// async function getResponse() {
	// 	const response = await axios.get('https://3d0d-195-158-15-110.eu.ngrok.io');
	// 	console.log(response);
	// }
	// getResponse();