import Layout from "../components/UI/Layout";
import Section from "../components/section/Section";
import cardDates from '../dates/card-dates';



function Collections() {
	return (
		<Layout title="Collection-1">
			<Section title="Single Collection" dates={cardDates} />
		</Layout>
	)
}

export default Collections;