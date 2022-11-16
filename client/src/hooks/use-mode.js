import { useEffect, useState } from 'react';

function useMode(key, value) {
	const [mode, setMode] = useState(localStorage.getItem(key) || value);

	useEffect(() => {
		localStorage.setItem(key, mode);
	}, [mode]);

	return { mode, setMode }
}

export default useMode;