import { useState } from 'react';


export function useHttp(reqFunc) {
	const [info, setInfo] = useState({ loading: false, error: null, data: null });

	async function send(reqData) {
		setInfo(prev => ({ ...prev, loading: true, error: null }));
		try {
			const data = await reqFunc(reqData);
			setInfo(prev => ({ ...prev, data: data }));
		} catch (error) {
			setInfo(prev => ({ ...prev, error: error }));
		}
		setInfo(prev => ({ ...prev, loading: false }));
	}
	return { send, info }
}