import { useState, useEffect } from 'react';

function useLocalStorage(key, value) {
	const [item, setItem] = useState(localStorage.getItem(key) || value);

	useEffect(() => {
		localStorage.setItem(key, item);
	}, [item]);

	return { item, setItem };
}

export default useLocalStorage;