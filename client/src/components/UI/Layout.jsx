import Header from '../Header';

function Layout({ children, title }) {
	return (
		<>
			<Header title={title} />
			{children}
		</>
	)
}

export default Layout;