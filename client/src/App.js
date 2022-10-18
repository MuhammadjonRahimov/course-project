import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState, useEffect } from 'react';
import { IsShownContext } from "./context";
import RegisterOrLogin from "./components/RegisterOrLogin";
import Section from "./components/section/Section";

function App() {
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
			<Header />
			{showAuthForm && <RegisterOrLogin />}
			{showSidebar && <Sidebar />}
			<Section title='Last updates ' />
			<Section title="Top 5 big collections" />
		</IsShownContext.Provider>
	);
}
export default App;