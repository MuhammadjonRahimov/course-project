import Layout from "../components/UI/Layout";
import Section from "../components/section/Section";
import cardDates from "../dates/card-dates";
import { tags } from "../dates/tag-dates";
import Tags from '../components/Tags';

function Home() {
	const paginationArray = [1, 2, 3, 4, 5];
	return (
		<Layout title="Collections">
			<Section title='Last updates ' dates={cardDates} />
			<Section title="Top 5 big collections" dates={cardDates} />
			<Tags dates={tags} />
		</Layout>
	)
}
export default Home;