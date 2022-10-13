import { useState, useEffect } from 'react';
import { IsShownContext } from '../context';
import { Route, Routes } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../routes';

function AppRouter() {
	const [showSidebar, setShowSidebar] = useState(false);
	const [showAuthForm, setShowAuthForm] = useState(false);
	useEffect(() => {
		document.addEventListener('keydown', e => {
			if (e.key === 'Escape') {
				setShowSidebar(false);
				setShowAuthForm(false);
			}
		})
		return () => document.removeEventListener('keydown', null);
	}, []);
	function showAuthFormHandler() {
		setShowAuthForm(true);
		document.body.style.overflow = "hidden";
	}

	function hideAuthFormHandler() {
		setShowAuthForm(false);
		document.body.style.overflow = "auto";
	}
	return (
		<IsShownContext.Provider value={{ showSidebar, setShowSidebar, showAuthForm, showAuthFormHandler, hideAuthFormHandler }}>
			<Routes>
				{publicRoutes.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
			</Routes>
		</IsShownContext.Provider>
	);
}

export default AppRouter;