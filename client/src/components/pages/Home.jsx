import Layout from "../UI/Layout";
import Section from "../section/Section";

function Home() {
	return (
		<Layout title="Collections">
			<Section title='Last updated ' />
			<Section title="Top 5 big collections" />
		</Layout>
	)
}

export default Home;