import Layout from "../components/UI/Layout";
import Section from "../components/section/Section";
import cardDates from "../dates/card-dates";
import { tags } from "../dates/tag-dates";
import Tags from '../components/Tags';
import { locale } from "../dates/locale";

function Home() {
	return (
		<Layout title={locale['header-title']}>
			<Section title={locale['last-updates']} dates={cardDates} />
			<Section title={locale['top-big']} dates={cardDates} />
			<Tags dates={tags} />
		</Layout>
	)
}
export default Home;