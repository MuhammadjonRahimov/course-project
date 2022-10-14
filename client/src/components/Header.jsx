import { useState, useRef, useEffect, useContext } from 'react';
import { IsShownContext } from '../context';
import MyButton from './UI/button/MyButton';
import MyForm from './UI/MyForm';
import MyInput from './UI/MyInput';

function Header({ title }) {
	const { showSidebar, setShowSidebar, showAuthFormHandler } = useContext(IsShownContext);
	const [searching, setSearching] = useState(false);
	useEffect(() => {
		searching && focusRef.current.focus();
	}, [searching]);
	const focusRef = useRef(null);
	function handleSidebar() {
		setShowSidebar(true);
		document.body.style.overflow = "hidden";
	}
	function searchHandler(e) {
		e.preventDefault();
		setSearching(!searching);
	}
	return (
		<header className={` bg-[#f4f7f6] h-[70px] border-b-[1px] border-[rgb(230, 234, 234)] flex ${showSidebar && 'translate-x-[320px]'} ease-linear duration-[300ms]`}>
			<div className="h-[100%] w-[60px] sm:w-[115px] border-r-[1px] border-[rgb(230, 234, 234)] text-center"
			>
				<MyButton onClick={handleSidebar}>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
						<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
					</svg>
				</MyButton>
			</div>
			<div className="flex-1 flex items-center justify-between">
				{searching ?
					<>
						<MyForm className="flex-1">
							<MyInput placeholder="Search for collections" ref={focusRef} />
						</MyForm>
						<MyButton variant="dark" onClick={searchHandler}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							</svg>
						</MyButton>
					</>
					:
					<>
						<MyButton onClick={searchHandler}>
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
							</svg>
						</MyButton>
						<h1 className="text-[rgb(20,21,21)] text-[20px] font-bold  pr-[10px] sm:pr-0">{title}</h1>
						<MyButton
							variant="dark"
							onClick={showAuthFormHandler}
							className="hidden sm:block"
						>
							register / login
						</MyButton>
					</>
				}
			</div>
		</header >
	)
}
export default Header;