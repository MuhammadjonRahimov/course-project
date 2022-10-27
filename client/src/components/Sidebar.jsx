import MyButton from './UI/button/MyButton';
import Modal from './UI/Modal';

import { useState, useContext } from 'react';
import { IsShownContext } from '../context';
import { useLocation, useNavigate } from 'react-router-dom';
import { locale } from '../data/locale';

function Sidebar() {
	const location = useLocation();
	const navigate = useNavigate();
	const { showSidebar, setShowSidebar, showAuthFormHandler, languageHandler, lang } = useContext(IsShownContext);

	function closeSidebar() {
		setShowSidebar(false);
		document.body.style.overflow = "auto";
	}
	function changeLanguageHandler() {
		languageHandler();
	}
	function handleRegLog() {
		showAuthFormHandler();
		setShowSidebar(false);
	}
	function goHome() {
		navigate('/');
		closeSidebar();
	}
	const listContent = [{ text: 'Collections' }]
	return (
		<Modal>
			<nav className={` bg-[#f4f7f6] w-80 h-[100vh] absolute z-[1] ${!showSidebar && 'translate-x-[-320px]'} ease-linear duration-[300ms]`}>
				<ul>
					<li className='p-5 border-b-[1px] border-[rgb(230, 234, 234)] font-bold text-2xl flex justify-between px-5'>
						<MyButton onClick={changeLanguageHandler} className='gap-[2px]'>
							<span className={`${lang === 'en' && 'opacity-50'}`}>Uz</span>
							<span className="m-1">/</span>
							<span className={`${lang === 'uz' && 'opacity-50'}`}>Eng</span>
						</MyButton>
						<MyButton onClick={closeSidebar}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</MyButton>
					</li>
					<li className='p-5 border-b-[1px] border-[rgb(230, 234, 234)] font-bold text-2xl flex'>
						<button onClick={handleRegLog} className="flex-1 text-left">
							{locale['register-login']}
						</button>
					</li>
					{listContent.map(elem => <li className='p-5  border-b-[1px] border-[rgb(230, 234, 234)] font-bold text-2xl' key={elem.text}>{elem.text}</li>)}
					<li>
						{location.pathname !== '/' &&
							<MyButton
								variant="dark"
								onClick={goHome}
								className="absolute bottom-0 left-0 sm:hidden"
							>
								{locale.back}
							</MyButton>
						}
					</li>
				</ul>
			</nav>
		</Modal>
	)
}

export default Sidebar;