import RegisterOrLogin from '../RegisterOrLogin';
import Sidebar from '../Sidebar';
import Header from '../Header';

import { useContext } from 'react';
import { AppContext } from '../../context';

function Layout({ children, title }) {
	const { showAuthForm, showSidebar } = useContext(AppContext);
	return (
		<>
			{showAuthForm && <RegisterOrLogin />}
			{showSidebar && <Sidebar />}
			<div className={`${showSidebar && 'translate-x-[320px]'} ease-linear duration-[300ms]`}>
				<Header title={title} />
				<div className="p-2">
					{children}
				</div>
			</div>
		</>
	)
}

export default Layout;