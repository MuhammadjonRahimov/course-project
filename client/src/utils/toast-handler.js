import { toast } from 'react-toastify';

export function toastHandler(message, status) {
	return (
		toast[status](message)
	)
}