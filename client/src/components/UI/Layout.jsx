import RegisterOrLogin from '../RegisterOrLogin';
import Sidebar from '../Sidebar';
import Header from '../Header';

import { useContext } from 'react';
import { IsShownContext } from '../../context';

function Layout({ children, title }) {
	const { showAuthForm, showSidebar } = useContext(IsShownContext);
	return (
		<>
			{showAuthForm && <RegisterOrLogin />}
			{showSidebar && <Sidebar />}
			<Header title={title} />
			{children}
		</>
	)
}

export default Layout;