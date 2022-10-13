import Layout from "../UI/Layout";
import Sidebar from "../Sidebar";
import Section from "../section/Section";
import RegisterOrLogin from "../RegisterOrLogin";
import { useContext } from 'react';
import { IsShownContext } from '../../context';

function Home() {
	const { showAuthForm, showSidebar } = useContext(IsShownContext);
	return (
		<Layout title="Collections">
			{showAuthForm && <RegisterOrLogin />}
			{showSidebar && <Sidebar />}
			<Section title='Last updated ' />
			<Section title="Top 5 big collections" />
		</Layout>
	)
}

export default Home;