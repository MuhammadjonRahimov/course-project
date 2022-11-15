import { useState, useEffect } from 'react';
import { AppContext } from '../context';
import { Route, Routes } from 'react-router-dom';

import { publicRoutes, privateRoutes } from '../routes';
import { locale } from '../data/locale';
import useLocalStorage from '../hooks/use-localStorage';

function AppRouter() {
	const [showSidebar, setShowSidebar] = useState(false);
	const [showAuthForm, setShowAuthForm] = useState(false);
	const [isAuth, setIsAuth] = useState(false);
	const { item: lang, setItem: setLang } = useLocalStorage("lang", "en");

	locale.setLanguage(lang);

	useEffect(() => {
		document.addEventListener('keydown', e => {
			if (e.key === 'Escape') {
				setShowSidebar(false);
				setShowAuthForm(false);
				document.body.style.overflow = "auto";
			}
		})
		return () => document.removeEventListener('keydown', null);
	}, []);

	useEffect(() => {
		document.addEventListener('click', e => {
			const id = e.target.getAttribute('id');
			if (id === 'overlay') {
				setShowSidebar(false);
				setShowAuthForm(false);
				document.body.style.overflow = "auto";
			}
		})
		return () => document.removeEventListener('click', null);
	}, []);

	function languageHandler() {
		setLang(lang === 'en' ? 'uz' : 'en');
	}

	function showAuthFormHandler() {
		setShowAuthForm(true);
		document.body.style.overflow = "hidden";
	}

	function hideAuthFormHandler() {
		setShowAuthForm(false);
		document.body.style.overflow = "auto";
	}
	return (
		<AppContext.Provider
			value={{
				showSidebar,
				setShowSidebar,
				isAuth,
				showAuthForm,
				showAuthFormHandler,
				hideAuthFormHandler,
				lang,
				languageHandler,
			}}
		>
			<Routes>
				{publicRoutes.map((route) =>
					<Route key={route.path} path={route.path} element={route.element} />
				)}
			</Routes>
		</AppContext.Provider>
	);
}

export default AppRouter;