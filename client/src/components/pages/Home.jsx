import Layout from "../UI/Layout";
import Section from "../section/Section";

function Home() {
	const paginationArray = [1, 2, 3, 4, 5];
	return (
		<Layout title="Collections">
			<Section title='Last updates ' />
			<Section title="Top 5 big collections" />
		</Layout>
	)
}

export default Home;