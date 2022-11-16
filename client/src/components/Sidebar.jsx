import MyButton from './UI/button/MyButton';
import Modal from './UI/Modal';

import { useState, useContext } from 'react';
import { AppContext } from '../context';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { locale } from '../data/locale';


function Sidebar() {
	const location = useLocation();
	const navigate = useNavigate();
	const { showSidebar, setShowSidebar, showAuthFormHandler, languageHandler, lang } =
		useContext(AppContext);
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
					<li>
						<MyButton>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
							</svg>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
							</svg>
						</MyButton>
					</li>
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
					{listContent.map(elem => <li
						className='p-5  border-b-[1px] border-[rgb(230, 234, 234)] font-bold text-2xl'
						key={elem.text}
						onClick={closeSidebar}
					>
						<Link to="/collections">
							{elem.text}
						</Link>
					</li>)}
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