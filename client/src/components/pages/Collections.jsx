import Card from "../Card";
import dates from '../../dates/card-dates';
import Layout from "../UI/Layout";
import Section from "../section/Section";

import cardDates from '../../dates/card-dates';

console.log(dates);

function Collections() {
	return (
		<Layout title="Collection-1">
			<Section title="Single Collection" dates={cardDates} />
		</Layout>
	)
}

export default Collections;